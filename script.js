// Datos de las imágenes
const imageData = [
    {
      title: "Foto 1",
      description: "Descripción de la foto 1",
      src: "1.jpg",
      features: ["Característica 1", "Característica 2", "Característica 3", "Característica 4", "Característica 5"]
    },
    {
      title: "Foto 2",
      description: "Descripción de la foto 2",
      src: "2.jpg",
      features: ["A", "B", "C", "D", "E"]
    },
    {
      title: "Foto 3",
      description: "Descripción de la foto 3",
      src: "3.jpg",
      features: ["Dato 1", "Dato 2", "Dato 3", "Dato 4", "Dato 5"]
    },
    {
      title: "Foto 4",
      description: "Descripción de la foto 4",
      src: "4.jpg",
      features: ["Info 1", "Info 2", "Info 3", "Info 4", "Info 5"]
    },
    {
      title: "Foto 5",
      description: "Descripción de la foto 5",
      src: "5.jpg",
      features: ["Detalle 1", "Detalle 2", "Detalle 3", "Detalle 4", "Detalle 5"]
    },
    {
      title: "Foto 6",
      description: "Descripción de la foto 6",
      src: "6.jpg",
      features: ["Punto 1", "Punto 2", "Punto 3", "Punto 4", "Punto 5"]
    },
    {
      title: "Foto 7",
      description: "Descripción de la foto 7",
      src: "7.jpg",
      features: ["Aspecto 1", "Aspecto 2", "Aspecto 3", "Aspecto 4", "Aspecto 5"]
    },
    {
      title: "Foto 8",
      description: "Descripción de la foto 8",
      src: "8.jpg",
      features: ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5"]
    },
  ];
  
  let currentIndex = 0;
  
  // Cargar el collage al inicio
  window.onload = () => {
    const gallery = document.getElementById('gallery');
    imageData.forEach((img, index) => {
      const photoDiv = document.createElement('div');
      photoDiv.className = 'photo';
      photoDiv.innerHTML = `<img src="${img.src}" alt="${img.title}" onclick="openModal(${index})">`;
      gallery.appendChild(photoDiv);
    });
  };
  
  function openModal(index) {
    currentIndex = index;
    const image = imageData[index];
    document.getElementById('expandedImg').src = image.src;
    document.getElementById('modalTitle').textContent = image.title;
    document.getElementById('modalDescription').textContent = image.description;
  
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    image.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      featuresList.appendChild(li);
    });
  
    document.getElementById('imageModal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % imageData.length;
    openModal(currentIndex);
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
    openModal(currentIndex);
  }
  