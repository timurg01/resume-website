function toggleSkill(skillId) {
  const skillExample = document.getElementById(skillId);
  const skillTag = event.target;

  // Close all other skills in the same category
  const parent = skillTag.parentElement;
  const allExamples = parent.querySelectorAll(".skill-example");
  const allTags = parent.querySelectorAll(".skill-tag");

  allExamples.forEach((example) => {
    if (example.id !== skillId) {
      example.classList.remove("active");
    }
  });

  allTags.forEach((tag) => {
    if (tag !== skillTag) {
      tag.classList.remove("active");
    }
  });

  // Toggle the clicked skill
  skillExample.classList.toggle("active");
  skillTag.classList.toggle("active");
}
