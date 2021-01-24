

export default function ProjectCard({ title, description, href, icon }) {
  return (
    <a
      className="mb-4 hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
        {icon == 'girlscript' && (
          <div className="h-8 w-8 ml-2 mr-4">
                      <span className="sr-only">Girlscript Boiler Plate App</span>
                      <img src="./logo_for_boilerplate.png"/>
          </div>
        )}
        {icon == 'posture' && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Posture fix</span>
            <img src="./posture.jpg"/>
          </div>
        )}
        {icon == 'certificate' && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Certificate Generator</span>
            <img src="./certificate.svg"/>
          </div>
        )}
        <div>
          <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}