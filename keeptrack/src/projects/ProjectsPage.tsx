import React from "react";
import { MOCK_PROJECTS } from "./MockProjects";

function ProjectsPage(){

    return(
         <>
             <h1>Avichai Doron Projects 1</h1>
            <pre>{JSON.stringify(MOCK_PROJECTS,null,'')}</pre>
         </>
   
         );
}
export default ProjectsPage;