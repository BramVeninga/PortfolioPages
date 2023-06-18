document.addEventListener('DOMContentLoaded', () => {
    const codeBlockElement = document.getElementById('code-block');
    const welcomeTextElement = document.getElementById('welcome-text');
  
    const welcomeText = 'Loading profesional skills...';
    const typingInterval = 50;
  
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
      const code = `import { portfolioPieces, competences,} from 'identity';
  
  export const identity: profile = {
    name: "Bram Veninga",
    userName: "appelvreter123",
    competences: [
      { skill: "html", skillType: "hard", proficiency: "High" },
      { skill: "css", skillType: "soft", proficiency: "High" },
      { skill: "PHP", proficiency: "basic" },
      { skill: "Java", proficiency: "High" },
      { skill: "Javascript / typescript", proficiency: "basic" },
      { skill: "Python", proficiency: "basic" },
      { skill: "SQL", proficiency: "basic" },
      { skill: "C/C++", proficiency: "basic" }
    ],
    spokenLanguages: [
      Language.Dutch,
      Language.English,
      Language.German,
      Language.French
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