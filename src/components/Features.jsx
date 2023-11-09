const Features = () => {
  return (
    <div  className="w-full p-6 m-auto bg-white rounded-md shadow-md ">
      <h1 className="text-3xl font-semibold text-center text-blue-600 ">
        Our Special Features !!!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-1 my-20">
        {/* Feature Card 1: Assignment Creation */}
        <div className="p-6 rounded-lg shadow-lg bg-blue-500 text-white">
          <h2 className="text-2xl font-bold mb-2">Assignment Creation</h2>
          <p className="text-gray-300">
            Easily create and customize assignments for your courses. Define
            assignment details, deadlines, and requirements with our
            user-friendly interface.
          </p>
        </div>

        {/* Feature Card 2: Submission Management */}
        <div className="p-6 rounded-lg shadow-lg bg-blue-500 text-white">
          <h2 className="text-2xl font-bold mb-2">Submission Management</h2>
          <p className="text-gray-300">
            Streamline the process of collecting and managing student
            submissions. Organize assignments, track deadlines, and provide
            feedback all in one place.
          </p>
        </div>

        {/* Feature Card 3: Grading and Feedback */}
        <div className="p-6 rounded-lg shadow-lg bg-blue-500 text-white">
          <h2 className="text-2xl font-bold mb-2">Grading and Feedback</h2>
          <p className="text-gray-300">
            Effortlessly grade assignments and provide constructive feedback.
            Enhance the learning experience with detailed comments and grades
            for each submission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
