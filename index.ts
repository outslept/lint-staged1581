import { bench, run, summary, do_not_optimize } from 'mitata'

interface File {
  filepath: string
  status: string
}

const createFiles = (count: number): File[] => {
  const dirs = ['src', 'lib', 'components', 'utils', 'hooks', 'pages', 'api', 'styles', 'tests', 'config']
  const subdirs = ['auth', 'dashboard', 'profile', 'settings', 'common', 'shared', 'core', 'feature']
  const files = ['index', 'component', 'utils', 'types', 'constants', 'helpers', 'service', 'model']
  const exts = ['.js', '.ts', '.tsx', '.jsx', '.vue', '.css', '.scss', '.json']

  return Array.from({ length: count }, (_, i) => {
    const depth = Math.floor(Math.random() * 10) + 1 // 1-10 levels deep
    const pathParts = ['/project']

    for (let j = 0; j < depth; j++) {
      if (j === depth - 1) {
        pathParts.push(files[Math.floor(Math.random() * files.length)] + exts[Math.floor(Math.random() * exts.length)])
      } else {
        const dirName = j === 0
          ? dirs[Math.floor(Math.random() * dirs.length)]
          : subdirs[Math.floor(Math.random() * subdirs.length)] + i.toString()
        pathParts.push(dirName)
      }
    }

    return {
      filepath: pathParts.join('/'),
      status: ['M', 'A', 'D', 'R'][Math.floor(Math.random() * 4)]
    }
  })
}

const old = (files: File[]) => {
  return files.map(f => f.filepath).join(' ').length
}

const newFromPr = (files: File[]) => {
  return files.reduce((totalLength, file, index) => {
    return totalLength + file.filepath.length + (index > 0 ? 1 : 0)
  }, 0)
}

const suggestion = (files: File[]) => {
  return files.reduce((totalLength, file) => totalLength + file.filepath.length, 0) + (files.length - 1)
}

const files100 = createFiles(100)
const files1k = createFiles(1000)
const files10k = createFiles(10000)
const files100k = createFiles(100000)

summary(() => {
  bench('old (100)', () => do_not_optimize(old(files100)))
  bench('newFromPr (100)', () => do_not_optimize(newFromPr(files100)))
  bench('suggestion (100)', () => do_not_optimize(suggestion(files100)))
})

summary(() => {
  bench('old (1k)', () => do_not_optimize(old(files1k)))
  bench('newFromPr (1k)', () => do_not_optimize(newFromPr(files1k)))
  bench('suggestion (1k)', () => do_not_optimize(suggestion(files1k)))
})

summary(() => {
  bench('old (10k)', () => do_not_optimize(old(files10k)))
  bench('newFromPr (10k)', () => do_not_optimize(newFromPr(files10k)))
  bench('suggestion (10k)', () => do_not_optimize(suggestion(files10k)))
})

summary(() => {
  bench('old (100k)', () => do_not_optimize(old(files100k)))
  bench('newFromPr (100k)', () => do_not_optimize(newFromPr(files100k)))
  bench('suggestion (100k)', () => do_not_optimize(suggestion(files100k)))
})

await run()
