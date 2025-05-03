
const Stats = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-locum-600">10,000+</p>
            <p className="text-gray-500">Registered Nurses</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-healthcare-600">1,000+</p>
            <p className="text-gray-500">Healthcare Facilities</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-locum-600">50,000+</p>
            <p className="text-gray-500">Shifts Filled</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-healthcare-600">48</p>
            <p className="text-gray-500">States Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
