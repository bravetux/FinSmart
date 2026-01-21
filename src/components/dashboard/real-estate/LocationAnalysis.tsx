import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, TrendingUp, Building, CheckCircle, AlertTriangle } from "lucide-react";

const LocationAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-3">Location Analysis & Selection</h1>
        <p className="text-lg opacity-90">
          Location is the single most important factor in real estate investing
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            The Golden Rule: Location, Location, Location
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-600">
            A great property in an average location will underperform compared to an average property in a great location. 
            Location determines:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">Capital Appreciation</h3>
              <p className="text-sm text-slate-600">
                Prime locations appreciate 2-3x faster than peripheral areas
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Rental Demand</h3>
              <p className="text-sm text-slate-600">
                Good locations have consistent tenant demand and minimal vacancy
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">Liquidity</h3>
              <p className="text-sm text-slate-600">
                Properties in sought-after locations sell faster at better prices
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Key Location Factors to Evaluate
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">1. Connectivity & Transportation</h3>
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Essential Checks:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>✓ Distance to major roads/highways (within 2-3 km)</li>
                    <li>✓ Metro station within 1 km (adds 10-15% premium)</li>
                    <li>✓ Bus stops and local transportation</li>
                    <li>✓ Distance to airport/railway station</li>
                    <li>✓ Traffic congestion patterns</li>
                    <li>✓ Future metro/infrastructure plans</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Impact on Value:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Metro connectivity: +15-20% value</li>
                    <li>• Expressway access: +10-15% value</li>
                    <li>• Poor connectivity: -20-30% value</li>
                    <li>• Upcoming infra: +25-50% in 3-5 years</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">2. Social Infrastructure</h3>
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Schools & Education:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>✓ Reputed schools within 2-3 km</li>
                    <li>✓ Play schools/daycares nearby</li>
                    <li>✓ Colleges/universities in vicinity</li>
                    <li>• Adds 10-15% to rental demand</li>
                    <li>• Attracts families (stable tenants)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Healthcare:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>✓ Multi-specialty hospital within 5 km</li>
                    <li>✓ Clinics and pharmacies nearby</li>
                    <li>✓ Emergency services accessibility</li>
                    <li>• Critical for senior living</li>
                    <li>• Adds 5-8% to value</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">3. Commercial & Employment Hubs</h3>
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">For Residential:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>✓ IT parks within 5-10 km radius</li>
                    <li>✓ Corporate offices and business districts</li>
                    <li>✓ Industrial areas (for worker housing)</li>
                    <li>✓ MNC presence in the area</li>
                    <li>• High employment = high rental demand</li>
                    <li>• Ensures consistent occupancy</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">For Commercial:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>✓ CBD (Central Business District) location</li>
                    <li>✓ Proximity to similar businesses</li>
                    <li>✓ High footfall areas for retail</li>
                    <li>✓ Adequate parking facilities</li>
                    <li>• Location is 70% of commercial success</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">4. Amenities & Lifestyle</h3>
              <div className="grid md:grid-cols-3 gap-3 mt-3">
                <div>
                  <h4 className="font-medium text-sm mb-2">Shopping & Retail:</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Shopping malls (within 3-5 km)</li>
                    <li>• Supermarkets/grocery stores</li>
                    <li>• Banks and ATMs</li>
                    <li>• Restaurants and cafes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Recreation:</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Parks and green spaces</li>
                    <li>• Gyms and sports facilities</li>
                    <li>• Cinema halls</li>
                    <li>• Entertainment zones</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Safety:</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Police station proximity</li>
                    <li>• Gated community security</li>
                    <li>• Street lighting</li>
                    <li>• Low crime rates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">5. Neighborhood Quality</h3>
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Positive Indicators:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>✓ Well-maintained roads and infrastructure</li>
                    <li>✓ Clean and organized surroundings</li>
                    <li>✓ Upcoming developments</li>
                    <li>✓ Reputed builders in the area</li>
                    <li>✓ Stable property prices</li>
                    <li>✓ Mix of owners and tenants</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Red Flags:</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>✗ Pollution sources (factories, landfills)</li>
                    <li>✗ Flood-prone areas</li>
                    <li>✗ Poor drainage and sewage</li>
                    <li>✗ Too many "For Sale" boards</li>
                    <li>✗ Declining neighborhood</li>
                    <li>✗ Legal disputes in the area</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Growth Potential Indicators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-green-600">High Growth Potential:</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ <strong>Government Projects:</strong> Metro, highway, airport extensions</li>
                <li>✓ <strong>IT/Corporate Expansion:</strong> New tech parks, SEZs</li>
                <li>✓ <strong>Infrastructure Development:</strong> Upcoming malls, hospitals</li>
                <li>✓ <strong>Smart City Projects:</strong> Government focus areas</li>
                <li>✓ <strong>Emerging Micro-markets:</strong> Next to developed areas</li>
                <li>✓ <strong>Educational Hubs:</strong> New universities, schools</li>
                <li>✓ <strong>Demographic Shift:</strong> Youth influx, professionals moving in</li>
              </ul>
              <div className="p-3 bg-green-50 rounded text-sm">
                <strong>Expected Appreciation:</strong> 15-25% annually in high-growth areas
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-red-600">Low Growth/Risk Areas:</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✗ <strong>Over-supplied Market:</strong> Too many unsold inventories</li>
                <li>✗ <strong>Industrial Decline:</strong> Factories closing down</li>
                <li>✗ <strong>Poor Governance:</strong> Corruption, poor maintenance</li>
                <li>✗ <strong>Environmental Issues:</strong> Pollution, water scarcity</li>
                <li>✗ <strong>Legal Complications:</strong> Land acquisition disputes</li>
                <li>✗ <strong>Isolated Location:</strong> Far from main city, poor connectivity</li>
                <li>✗ <strong>Socio-economic Decline:</strong> Population exodus</li>
              </ul>
              <div className="p-3 bg-red-50 rounded text-sm">
                <strong>Risk:</strong> Stagnant or negative growth, poor liquidity
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5" />
            Location Tier Classification
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">Tier 1: Prime Locations (Established Areas)</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-medium mb-2">Characteristics:</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Fully developed infrastructure</li>
                    <li>• High demand, limited supply</li>
                    <li>• Premium pricing</li>
                    <li>• Excellent connectivity</li>
                    <li>• All amenities available</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Investment Profile:</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Entry: Very high (₹80L-3Cr+)</li>
                    <li>• Appreciation: 6-10% annually</li>
                    <li>• Rental Yield: 2-3%</li>
                    <li>• Liquidity: Excellent</li>
                    <li>• Risk: Very Low</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                <strong>Example:</strong> South Mumbai, South Delhi, Whitefield (Bangalore), Banjara Hills (Hyderabad)
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Tier 2: Developing Locations (Growth Areas)</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-medium mb-2">Characteristics:</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Rapidly developing</li>
                    <li>• Good connectivity improving</li>
                    <li>• Mix of old and new projects</li>
                    <li>• Employment hubs nearby</li>
                    <li>• Growing amenities</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Investment Profile:</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Entry: Moderate (₹40L-1Cr)</li>
                    <li>• Appreciation: 10-15% annually</li>
                    <li>• Rental Yield: 3-4%</li>
                    <li>• Liquidity: Good</li>
                    <li>• Risk: Moderate</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                <strong>Example:</strong> Navi Mumbai, Noida Extension, Electronic City (Bangalore), Gachibowli (Hyderabad)
              </p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-700 mb-2">Tier 3: Emerging Locations (Peripheral Areas)</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-medium mb-2">Characteristics:</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Early stage development</li>
                    <li>• Infrastructure under construction</li>
                    <li>• Lower current amenities</li>
                    <li>• Future growth potential</li>
                    <li>• Government projects planned</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Investment Profile:</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Entry: Low (₹25L-60L)</li>
                    <li>• Appreciation: 15-25% (if develops)</li>
                    <li>• Rental Yield: 4-5%</li>
                    <li>• Liquidity: Low-Moderate</li>
                    <li>• Risk: High</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                <strong>Example:</strong> Neral (Mumbai), Greater Noida West, Devanahalli (Bangalore)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Location Selection Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-3">Step-by-Step Location Analysis:</h3>
              <ol className="space-y-2 text-sm text-slate-700">
                <li><strong>1. Define Your Goal:</strong> Primary residence, rental income, or appreciation?</li>
                <li><strong>2. Research Micro-markets:</strong> Identify 3-5 potential areas matching your budget</li>
                <li><strong>3. Visit Multiple Times:</strong> Different times of day, weekday vs weekend</li>
                <li><strong>4. Talk to Locals:</strong> Existing residents, shopkeepers, security guards</li>
                <li><strong>5. Check Online Reviews:</strong> Google Maps reviews, housing forums</li>
                <li><strong>6. Verify Infrastructure:</strong> Physically check connectivity, amenities</li>
                <li><strong>7. Research Future Plans:</strong> Municipal development plans, master plans</li>
                <li><strong>8. Compare Prices:</strong> Check rates in adjacent areas for benchmark</li>
                <li><strong>9. Consult Local Brokers:</strong> Get market insights (but verify independently)</li>
                <li><strong>10. Trust Your Gut:</strong> Would you live there? Would others want to?</li>
              </ol>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Golden Questions to Ask:</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Why are people moving to this area?</li>
                <li>• What will make this location more valuable in 5-10 years?</li>
                <li>• If I needed to sell in 2-3 years, would I find buyers easily?</li>
                <li>• What's the worst-case scenario for this location?</li>
                <li>• Am I buying because of actual value or just developer marketing?</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationAnalysis;
