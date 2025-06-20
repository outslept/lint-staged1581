```
clk: ~3.87 GHz
cpu: 11th Gen Intel(R) Core(TM) i3-1115G4 @ 3.00GHz
runtime: node 23.5.0 (x64-win32)

benchmark                   avg (min … max) p75 / p99    (min … top 1%)
------------------------------------------- -------------------------------
old (100)                      2.43 µs/iter   2.46 µs  █▃
                        (2.30 µs … 3.16 µs)   3.06 µs ▃██
                    (297.78  b … 551.46  b) 535.07  b ███▆▇█▃▂▁▃▁▁▁▁▂▁▁▁▂▁▂

newFromPr (100)              132.11 ns/iter 128.17 ns   █
                    (121.39 ns … 735.67 ns) 173.54 ns   █
                    (  0.10  b … 342.23  b)   0.71  b ▁▁██▂▂▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁

suggestion (100)             113.18 ns/iter 109.96 ns      █▂
                       (95.21 ns … 1.11 µs) 145.83 ns      ██
                    (  0.10  b … 333.24  b)   0.60  b ▁▁▁▁▁██▃▂▁▁▁▂▁▁▁▁▁▁▁▁

summary
  suggestion (100)
   1.17x faster than newFromPr (100)
   21.49x faster than old (100)

------------------------------------------- -------------------------------
old (1k)                      28.79 µs/iter  28.78 µs               ██
                      (26.62 µs … 36.73 µs)  29.51 µs ▅▅▅ ▅      ▅ ▅██    ▅
                    (  1.33 kb …   1.52 kb)   1.35 kb ███▁█▁▁▁▁▁▁█▁███▁▁▁▁█

newFromPr (1k)                 1.77 µs/iter   1.63 µs  █
                        (1.44 µs … 6.62 µs)   6.58 µs  █
                    (  0.10  b …  56.11  b)   2.35  b ▆█▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁

suggestion (1k)                1.89 µs/iter   1.79 µs ▃█
                        (1.47 µs … 7.58 µs)   7.06 µs ██
                    (  0.10  b …  56.11  b)   2.52  b ██▅▁▂▁▁▁▁▁▁▁▁▁▁▂▁▁▁▁▂

summary
  newFromPr (1k)
   1.07x faster than suggestion (1k)
   16.27x faster than old (1k)

------------------------------------------- -------------------------------
old (10k)                    536.06 µs/iter 478.80 µs █
                      (352.00 µs … 3.67 ms)   2.36 ms █
                    (460.97 kb … 976.84 kb) 817.51 kb ██▄▃▂▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁

newFromPr (10k)               22.03 µs/iter  16.60 µs █
                       (15.60 µs … 1.22 ms) 105.00 µs █
                    ( 32.00  b … 194.46 kb) 242.38  b █▂▂▂▁▁▁▁▁▁▁▂▁▁▁▁▁▁▁▁▁

suggestion (10k)              22.80 µs/iter  18.10 µs █
                     (15.90 µs … 500.00 µs)  99.90 µs █
                    ( 32.00  b … 139.31 kb) 206.41  b █▅▃▂▁▁▁▁▁▁▁▂▂▁▁▁▁▁▁▁▁

summary
  newFromPr (10k)
   1.04x faster than suggestion (10k)
   24.33x faster than old (10k)

------------------------------------------- -------------------------------
old (100k)                     8.85 ms/iter   9.99 ms  █
                       (6.96 ms … 14.53 ms)  13.60 ms ▂██   ▂▄
                    (  1.71 mb …   8.40 mb)   1.80 mb ███▆▄▁█████▃▇▄▃▃▁▁▁▁▃

newFromPr (100k)               1.33 ms/iter   1.27 ms  █
                      (978.50 µs … 3.60 ms)   3.21 ms  █▅
                    (152.00  b …   1.92 kb) 155.62  b ███▄▂▂▂▂▂▂▂▂▂▁▂▁▁▂▁▁▁

suggestion (100k)              1.30 ms/iter   1.26 ms  █
                      (970.60 µs … 3.82 ms)   3.05 ms ▂█▂
                    (152.00  b …   2.37 kb) 156.40  b ███▅▃▂▂▁▂▁▂▁▂▂▂▁▁▂▁▂▁

summary
  suggestion (100k)
   1.02x faster than newFromPr (100k)
   6.8x faster than old (100k)
```
