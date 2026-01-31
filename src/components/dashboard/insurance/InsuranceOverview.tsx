"use client";

import React from 'react';

const InsuranceOverview = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Insurance Overview</h1>
      <table className="w-full border-collapse">
        <tbody>
          {/* Placeholder content around the fixed error snippet */}
          <tr>
            <td className="p-3">Policy Type</td>
            <td className="p-3">Coverage</td>
            <td className="p-3">Premium</td>
          </tr>
          <tr className="bg-emerald-100 font-bold">
            <td className="p-3" colSpan={2}>Total Monthly Cost</td>
            <td className="p-3 text-emerald-700">₹30,000–₹45,000/year</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InsuranceOverview;