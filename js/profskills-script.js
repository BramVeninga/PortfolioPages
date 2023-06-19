document.addEventListener('DOMContentLoaded', () => {
    const codeBlockElement = document.getElementById('code-block');
    const welcomeTextElement = document.getElementById('welcome-text');
  
    const welcomeText = 'Loading profesional skills...';
    const typingInterval = 25;
  
    function typeWelcomeText() {
      let currentWelcomeIndex = 0;
  
      function typeNextCharacter() {
        if (currentWelcomeIndex < welcomeText.length) {
          welcomeTextElement.textContent += welcomeText.charAt(currentWelcomeIndex);
          currentWelcomeIndex++;
          setTimeout(typeNextCharacter, typingInterval);
        } else {
          typeCodeBlock();
        }
      }
  
      typeNextCharacter();
    }
  
    function typeCodeBlock() {
      const code = `import {hard skills, soft skills, portfolioPieces,} from 'identity';
  
  export const identity: profile = {
    name: "Bram Veninga",
    userName: "appelvreter123",
    hardSkills: [
      { skill: "Programming skills", , proficiency: "intermediate" },
      { skill: "Database management", ", proficiency: "high" },
      { skill: "Web development", proficiency: "basic" },
      { skill: "System and network administration", proficiency: "intermediate" },
      { skill: "Agile methodologies", proficiency: "high" },
      { skill: "Data analysis", proficiency: "intermediate" },
      { skill: "Project management", proficiency: "high" },
    ],
    softSkills: [
      { skill: "Communication skills", proficiency: "High" },
      { skill: "Problem-solving ability", proficiency: "High" },
      { skill: "Critical thinking", proficiency: "basic" },
      { skill: "Time management", proficiency: "High" },
      { skill: "Self-motivation", proficiency: "basic" },
      { skill: "Teamwork", proficiency: "basic" },
      { skill: "Leadership", proficiency: "basic" },
      { skill: "Customer orientation", proficiency: "basic" }
      { skill: "Self-reflection", proficiency: "basic" }
      { skill: "Creativity", proficiency: "basic" }
    ],
    portfolioPieces: [
     display select buttons
    ],
  };`;
  
      let currentLineIndex = 0;
  
      function typeNextLine() {
        if (currentLineIndex < code.length) {
          codeBlockElement.textContent += code.charAt(currentLineIndex);
          currentLineIndex++;
          setTimeout(typeNextLine, typingInterval);
        }
      }
  
      setTimeout(typeNextLine, 1000);
    }
  
    setTimeout(typeWelcomeText, 2000);
  });
  
  function openPDF(pdfPath) {
    const pdfContainer = document.getElementById('pdf-container');
    const pdfEmbed = `<embed src="${pdfPath}" type="application/pdf" width="100%" height="600px" />`;
    pdfContainer.innerHTML = pdfEmbed;
  }
  
  function showDiscord()
  {
      let name = "appelvreter123";
      let discrim = "0496";
  
      alert("My Discord tag: " + name + "#" + discrim);
  }
  
  function showEmail()
  {
      let name = "bram.veninga";
      let domain = "student.nhlstenden";
      let tld = "com";
  
      let nameP = "bramveninga";
      let domainP = "outlook";
      let tldP = "com";
  
      alert("My personal email address: " + nameP + '@' + domainP + '.' + tldP
          + "\nMy school email address: " + name + '@' + domain + '.' + tld);
  }

  function showTAmessage()
  {
      alert("Dit bestand is beschikbaar vanaf 23 juni 23:59");
  }