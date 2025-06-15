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

summary(() => {
  bench('old (100)', function* () {
    const files = createFiles(100)
    yield () => do_not_optimize(old(files))
  })

  bench('newFromPr (100)', function* () {
    const files = createFiles(100)
    yield () => do_not_optimize(newFromPr(files))
  })

  bench('suggestion (100)', function* () {
    const files = createFiles(100)
    yield () => do_not_optimize(suggestion(files))
  })
})

summary(() => {
  bench('old (1k)', function* () {
    const files = createFiles(1000)
    yield () => do_not_optimize(old(files))
  })

  bench('newFromPr (1k)', function* () {
    const files = createFiles(1000)
    yield () => do_not_optimize(newFromPr(files))
  })

  bench('suggestion (1k)', function* () {
    const files = createFiles(1000)
    yield () => do_not_optimize(suggestion(files))
  })
})

summary(() => {
  bench('old (10k)', function* () {
    const files = createFiles(10000)
    yield () => do_not_optimize(old(files))
  })

  bench('newFromPr (10k)', function* () {
    const files = createFiles(10000)
    yield () => do_not_optimize(newFromPr(files))
  })

  bench('suggestion (10k)', function* () {
    const files = createFiles(10000)
    yield () => do_not_optimize(suggestion(files))
  })
})

summary(() => {
  bench('old (100k)', function* () {
    const files = createFiles(100000)
    yield () => do_not_optimize(old(files))
  })

  bench('newFromPr (100k)', function* () {
    const files = createFiles(100000)
    yield () => do_not_optimize(newFromPr(files))
  })

  bench('suggestion (100k)', function* () {
    const files = createFiles(100000)
    yield () => do_not_optimize(suggestion(files))
  })
})

await run()
