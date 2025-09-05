export default function DoesNotExist({ blok }) {
  if (process.env.NODE_ENV === "development") {
    return (
      <div className="bg-red-50 border-red-600 border-dashed border-2 p-4 rounded-md">
        <p className="text-red-600">
          The component <strong>{blok.component}</strong> does not exist.
          <br />
          <br />
          <strong>
            Please add the component to the <code>components</code> object in{" "}
            <code className="text-blue-600">lib/storyblok.js</code>
          </strong>
        </p>
      </div>
    );
  }
  return null;
}
