function changeContent() {
    const text = document.getElementById("info");
    text.textContent = "JavaScript made this change! - Working wonders as we take coffee!";
    text.style.color = "#ee6c4d";
    text.style.fontSize = "1.2rem";
    text.style.fontStyle = "sans-serif";
    text.style.fontWeight = "bold";
  }
  
  function toggleElement() {
    const existing = document.getElementById("extra-heading");
    if (existing) {
        document.getElementById("extra-heading").remove();
        document.getElementById("extra-p1").remove();
        document.getElementById("extra-p2").remove();
    } else {
      const newEl = document.createElement("h2");
      const newEl1 = document.createElement("p");
      const newEl2 = document.createElement("p");
      newEl.id = "extra-heading";
      newEl1.id = "extra-p1";
        newEl2.id = "extra-p2";
      newEl.textContent = "About PLP Academy! "
      newEl1.textContent ="PLP Academy equips youth with 21st-century tech skills" 
      newEl2.textContent ="It focuses on project-based learning, real-world application, and personal growth in a vibrant community. to prepare them for careers in software development and beyond.";
      
      const parent = document.getElementById("actions");
        parent.appendChild(newEl);
        parent.appendChild(newEl1);
        parent.appendChild(newEl2);
        newEl.style.color = "#ee6c4d";

    }
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark-theme");
  }
  
