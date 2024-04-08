document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.getElementById("projects");

  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      imageUrl: "project1.jpg",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      imageUrl: "project2.jpg",
      link: "#",
    },
    // Add more projects as needed
  ];

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    const image = document.createElement("img");
    image.src = project.imageUrl;
    image.alt = project.title;

    const title = document.createElement("h2");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = "View Project";

    projectDiv.appendChild(image);
    projectDiv.appendChild(title);
    projectDiv.appendChild(description);
    projectDiv.appendChild(link);

    projectsContainer.appendChild(projectDiv);
  });
});
