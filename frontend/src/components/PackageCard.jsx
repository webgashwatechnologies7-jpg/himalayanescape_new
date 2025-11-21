import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, MapPin, Star, ArrowRight, ImageOff } from 'lucide-react';

const PackageCard = ({ package: pkg, onEnquiry }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleViewDetails = () => {
    navigate(`/package/${pkg.id}`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Image */}
      <div
        className="relative h-64 overflow-hidden cursor-pointer"
        onClick={handleViewDetails}
      >
        {!imageError ? (
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <ImageOff size={48} className="mx-auto mb-3 opacity-50" />
              <p className="font-bold text-lg">{pkg.name}</p>
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-teal-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          {pkg.price}
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-slate-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2">
            View Details
            <ArrowRight size={20} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors cursor-pointer"
          onClick={handleViewDetails}
        >
          {pkg.name}
        </h3>

        <div className="flex items-center gap-2 text-slate-600 mb-4">
          <Clock size={18} className="text-teal-600" />
          <span className="text-sm font-medium">{pkg.duration}</span>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          {pkg.description}
        </p>

        {/* Highlights */}
        {pkg.highlights && pkg.highlights.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">Highlights:</p>
            <div className="flex flex-wrap gap-2">
              {pkg.highlights.slice(0, 3).map((highlight, index) => (
                <span
                  key={index}
                  className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={handleViewDetails}
            className="flex-1 border-2 border-slate-900 text-slate-900 py-3 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            View Details
          </button>
          <button
            onClick={() => onEnquiry(pkg)}
            className="flex-1 bg-teal-600 text-white py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors"
          >
            Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
