export default function shouldThisProjectCardBeRendered(
  currentProject: string,
  selectedProject: string,
) {
  if (selectedProject === "All Projects") {
    return true;
  } else {
    return currentProject === selectedProject ? true : false;
  }
}
