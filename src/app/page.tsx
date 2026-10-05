"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { api } from "../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);

  
  return (
    <div className="flex flex-col gap-2 p-4">
      <Button onClick={() => createProject({ name: "New Project" })}>
        Create Project
      </Button>

       {projects?.map((project)=>(
        <div className="flex  border rounded p-2 flex-col" key={project._id}>
          <p>{project.name}</p>
          <p>owner id :  {project.ownerId}  </p>
        </div>
       ))}
    </div>
  );
}
  