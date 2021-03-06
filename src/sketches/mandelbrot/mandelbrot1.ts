import p5 from 'p5';

interface MandelbrotSettings {
  adiv?: number
}

const MandelbrotSet1 = (customSettings: MandelbrotSettings) => (p: p5) => {
  const { adiv = 1 } = customSettings
  const maxIterations = 50;
  const limit = 2

  p.setup = () => {
    p.createCanvas(512, 512);
    p.pixelDensity(1);
    p.loadPixels();
    
    
    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        let brightness;

        let a = p.map(x, 0, p.width, -2.5, 1.5);
        let b = p.map(y, 0, p.height, -2, 2);

        let ca = a;
        let cb = b;

        for (let n = 0; n < maxIterations; n = n + 1) {
          let aa = a * a - b * b;
          let bb = 2 * a * b;

          a = (aa + ca)/adiv
          b = (bb + cb)/adiv;

          if (p.abs(a + b) > limit) break;

          brightness = p.map(n, 0, maxIterations, 0, 255)

          if (n === maxIterations) {
            brightness = 0
          }
        }

        let pix = (x + y * p.width) * 4;

        p.pixels[pix + 0] = brightness;
        p.pixels[pix + 1] = brightness;
        p.pixels[pix + 2] = brightness;
        p.pixels[pix + 3] = 255;
      }
    }

    p.updatePixels();
  };
};

export default MandelbrotSet1;
