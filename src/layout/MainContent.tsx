type mainContentProps = {
  selectedProject: string;
};

export default function MainContent({ selectedProject }: mainContentProps) {
  return <div>{selectedProject}</div>;
}
