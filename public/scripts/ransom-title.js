document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('header h1');
  if (!heading) return;

  const name = 'Lydia TerBeek';
  const letters = Array.from(name);
  const container = document.createElement('div');
  container.className = 'ransom-title';

  const charMap = {
    l: ['L1.jpg', 'L2.jpg', 'L3.jpg', 'L4.jpg'],
    y: ['Y1.jpg', 'Y2.jpg', 'Y3.jpg', 'Y4.jpg'],
    d: ['D1.jpg', 'D2.jpg', 'D3.jpg', 'D4.jpg'],
    i: ['I1.jpg', 'I2.jpg', 'I3.jpg', 'I4.jpg'],
    a: ['A1.jpg', 'A2.jpg', 'A3.jpg', 'A4.jpg'],
    t: ['T1.jpg', 'T2.jpg', 'T3.jpg', 'T4.jpg'],
    e: ['E1.jpg', 'E2.jpg', 'E3.jpg', 'E4.jpg', 'E5.jpg', 'E6.jpg', 'E7.jpg', 'E8.jpg', 'E9.jpg', 'E10.jpg', 'E11.jpg', 'E12.jpg'],
    r: ['R1.jpg', 'R2.jpg', 'R3.jpg', 'R4.jpg'],
    b: ['B1.jpg', 'B2.jpg', 'B3.jpg', 'B4.jpg'],
    k: ['K1.jpg', 'K2.jpg', 'K3.jpg', 'K4.jpg']
  };

  let ePlacement = 0;

  letters.forEach((char) => {
    const normalizedChar = char.toLowerCase();
    const options = charMap[normalizedChar];

    if (!options) {
      const space = document.createElement('span');
      space.className = 'ransom-title-space';
      container.appendChild(space);
      return;
    }

    let chosenFile;
    if (normalizedChar === 'e') {
      const random = Math.floor(Math.random() * 4) + 1;
      console.log(`E placement: ${ePlacement}, Random: ${random}`);
      const fileIndex = (ePlacement * 4) + random;
      const clampedIndex = Math.max(1, Math.min(12, fileIndex));
      chosenFile = `E${clampedIndex}.jpg`;
      ePlacement += 1;
    } else {
      const randomIndex = Math.floor(Math.random() * options.length);
      chosenFile = options[randomIndex];
    }

    const img = document.createElement('img');
    img.src = `/images/letters/${chosenFile}`;
    img.alt = char;
    img.className = 'ransom-letter';
    const baseRotation = (Math.random() * 8 - 4).toFixed(1);
    const scale = (0.7 + Math.random() * 0.12).toFixed(2);
    img.style.setProperty('--letter-rotate', `${baseRotation}deg`);
    img.style.transform = `rotate(${baseRotation}deg) scale(${scale})`;

    const wobble = () => {
      const nextRotation = (parseFloat(baseRotation) + (Math.random() > 0.5 ? 1 : -1) * 2).toFixed(1);
      img.style.transform = `rotate(${nextRotation}deg) scale(${scale})`;
    };

    setInterval(wobble, 1500);
    container.appendChild(img);
  });

  heading.replaceWith(container);
});
