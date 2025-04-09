
export const Template = () => {
    return(
        <>
            <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 font-sans">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">KATHLEEN DAVIS</h1>
                    <h2 className="text-xl font-semibold text-gray-600">Product Manager</h2>
                </div>

                {/* Summary */}
                <p className="text-sm mb-6 text-center px-12">
                    Strategic product manager and Lean Six Sigma Green Belt on a mission to create innovative products that drive business growth and solve customer problems. Seeking to leverage six years of product management experience for Nordstrom Inc. Strong communicator and collaborator dedicated to improving customer satisfaction.
                </p>

                {/* Contact Info */}
                <div className="flex justify-between text-sm mb-8">
                    <div>
                    <div>(123) 456-7890</div>
                    <div>email@example.com</div>
                    <div>Minneapolis, MN 12345</div>
                    </div>
                    <div className="text-right">
                    <div>LinkedIn | Portfolio</div>
                    </div>
                </div>

                {/* Key Skills */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4 border-b-2 border-gray-300 pb-2">KEY SKILLS</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>- Competitive analysis</div>
                    <div>- Market research and analysis</div>
                    <div>- Product roadmap development</div>
                    <div>- Product strategy and design</div>
                    <div>- Team collaboration</div>
                    <div>- User testing</div>
                    </div>
                </div>

                {/* Professional Experience */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4 border-b-2 border-gray-300 pb-2">PROFESSIONAL EXPERIENCE</h3>
                    
                    <div className="mb-6">
                    <div className="flex justify-between text-sm font-semibold mb-2">
                        <div>Product Manager | Walgreens, Deerfield, IL</div>
                        <div>September 2019 – present</div>
                    </div>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Manage product lifecycle from concept to launch in alignment with market needs</li>
                        <li>Improve over-the-counter product profitability by 10% through product pricing optimization and negotiation with suppliers</li>
                        <li>Collaborate with the support team to prioritize product updates based on customer needs, resulting in a 30% increase in customer satisfaction scores</li>
                    </ul>
                    </div>

                    <div>
                    <div className="flex justify-between text-sm font-semibold mb-2">
                        <div>Associate Product Manager | Ultra Beauty, Inc., Bolingbrook, IL</div>
                        <div>August 2017 – September 2019</div>
                    </div>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Led market research and competitive analysis for a new skincare line, resulting in a 15% increase in market share within the first eight months of launch</li>
                        <li>Conducted surveys and focus groups with target audience to identify key product features and messaging</li>
                        <li>Managed a budget of $300,000 for market research to identify emerging beauty trends</li>
                    </ul>
                    </div>
                </div>

                {/* Education & Certifications */}
                <div className="grid grid-cols-2 gap-8">
                    <div>
                    <h3 className="text-lg font-bold mb-4 border-b-2 border-gray-300 pb-2">EDUCATION</h3>
                    <div className="text-sm">
                        <div className="font-semibold">Bachelor of Science (B.S.) Business</div>
                        <div>UNIVERSITY OF ILLINOIS CHICAGO, Chicago, IL</div>
                        <div>September 2013 – June 2017</div>
                    </div>
                    </div>

                    <div>
                    <h3 className="text-lg font-bold mb-4 border-b-2 border-gray-300 pb-2">CERTIFICATIONS</h3>
                    <div className="text-sm space-y-2">
                        <div>
                        <div className="font-semibold">Lean Six Sigma Green Belt</div>
                        <div>Purdue University, 2019</div>
                        </div>
                        <div>
                        <div className="font-semibold">Certified Product Manager</div>
                        <div>University of California San Diego, 2018</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}