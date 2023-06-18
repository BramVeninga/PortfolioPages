document.addEventListener('DOMContentLoaded', () => {
  const codeBlockElement = document.getElementById('code-block');
  const welcomeTextElement = document.getElementById('welcome-text');

  const welcomeText = 'Loading Bram Veninga...';
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
    const code = `import { Profile, Language, jobInfo, educationInfo } from 'identity';

export const identity: Profile = {
  name: "Bram Veninga",
  userName: "appelvreter123",
  programmingLanguages: [
    { language: "html", proficiency: "High" },
    { language: "css", proficiency: "High" },
    { language: "PHP", proficiency: "basic" },
    { language: "Java", proficiency: "High" },
    { language: "Javascript / typescript", proficiency: "basic" },
    { language: "Python", proficiency: "basic" },
    { language: "SQL", proficiency: "basic" },
    { language: "C/C++", proficiency: "basic" }
  ],
  spokenLanguages: [
    Language.Dutch,
    Language.English,
    Language.German,
    Language.French
  ],
  jobInfo: [
    { role: "Verkoopmedewerker", company: "Hubo", employmentDuration: "4 years" },
    { role: "Flex-saler", company: "Samsung", employmentDuration: "1 year" },
    { role: "Vakantiemedewerker", company: "CSU", employmentDuration: "5 years" }
  ],
  educationInfo: [
    { university: "NHL Stenden University of Applied Sciences", type: "Bachelor Information Technology (Software Engineering)", completed: false },
    { middleSchool: "Dr. Nassau College", type: "Hoger Algemeen voortgezet onderwijs (havo)", completed: true }
  ]
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