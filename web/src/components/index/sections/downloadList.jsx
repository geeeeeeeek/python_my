'use client'
import { useState } from 'react';

// Sample download files data
const downloadFiles = [
  {
    id: 1,
    name: "Product Specification Guide.pdf",
    description: "Complete technical parameters, features and instructions to help you fully understand product performance.",
    fileSize: "2.4 MB",
    date: "2023-12-15"
  },
  {
    id: 2,
    name: "Product Price List.xlsx",
    description: "Latest product pricing information, including prices for different models and bulk purchase discount plans.",
    fileSize: "1.2 MB",
    date: "2024-01-20"
  },
  {
    id: 3,
    name: "Installation Guide.pdf",
    description: "Detailed product installation steps and precautions to ensure correct installation and use of the product.",
    fileSize: "3.5 MB",
    date: "2023-11-05"
  },
  {
    id: 4,
    name: "Quality Certification.pdf",
    description: "Product quality certifications and test reports proving the product meets international standards.",
    fileSize: "1.8 MB",
    date: "2023-10-18"
  },
  {
    id: 5,
    name: "Application Case Studies.pdf",
    description: "Real customer applications and success stories showcasing the product's value across various industries.",
    fileSize: "4.2 MB",
    date: "2024-02-10"
  }
];

export default function DownloadList() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* File list */}
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {downloadFiles.map((file) => (
              <li 
                key={file.id} 
                className="bg-gray-50 border border-gray-100 rounded-lg hover:shadow-md transition-all p-6"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  {/* File icon */}
                  <div className="flex-shrink-0 mr-4 mb-4 md:mb-0">
                    <svg 
                      className="h-12 w-12 text-mainColor3" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1} 
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                      />
                      {file.name.endsWith('.pdf') && (
                        <text x="12" y="16" fontSize="4" textAnchor="middle" fill="currentColor" className="uppercase font-bold">PDF</text>
                      )}
                      {file.name.endsWith('.xlsx') && (
                        <text x="12" y="16" fontSize="4" textAnchor="middle" fill="currentColor" className="uppercase font-bold">XLS</text>
                      )}
                    </svg>
                  </div>
                  
                  {/* File information */}
                  <div className="flex-1 min-w-0 mr-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{file.name}</h3>
                    <p className="text-gray-600 mb-2">{file.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">{file.fileSize}</span>
                      <span>Updated: {file.date}</span>
                    </div>
                  </div>
                  
                  {/* Download button */}
                  <div className="mt-4 md:mt-0">
                    <button
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mainColor3 hover:bg-mainColor3/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor3 transition-colors"
                    >
                      <svg 
                        className="-ml-1 mr-2 h-5 w-5" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}