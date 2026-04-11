import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 grid gap-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="text-gray-600 mt-2">Web Developer | Designer | Student</p>
      </motion.div>

      {/* About */}
      <Card className="rounded-2xl shadow">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-700">
            I am a passionate developer who loves building modern web applications.
            I enjoy learning new technologies and improving my skills every day.
          </p>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="rounded-2xl shadow">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-200 rounded-xl text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="rounded-2xl shadow">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2].map((project) => (
              <div key={project} className="p-4 border rounded-xl">
                <h3 className="font-semibold">Project {project}</h3>
                <p className="text-sm text-gray-600">
                  Short description of the project goes here.
                </p>
                <Button className="mt-3">View Project</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="rounded-2xl shadow">
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-600 mb-4">your.email@example.com</p>
          <Button>Get In Touch</Button>
        </CardContent>
      </Card>
    </div>
  );
}
