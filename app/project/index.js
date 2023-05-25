import React from 'react';
import ProjectDesign from './projectdesign';
import ProjectSlicing from './projectslicing';

export default function Project() {
  return (
    <div id="project" className="space-y-4">
      <ProjectSlicing />
      <ProjectDesign />
    </div>
  );
}
