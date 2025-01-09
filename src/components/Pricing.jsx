import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Pricing() {
  return (
    <section id='pricing'>
      <div className='flex items-center gap-4 mb-6'>
        <div className='border-b border-primary w-14'></div>
        <p className='font-outfit text-primary text-xs font-semibold tracking-widest'>
          PRICING
        </p>
      </div>
      <div className='flex gap-10 w-full text-lg flex-col lg:flex-row'>
        {/* One */}
        <div className='w-full'>
          <div className='flex items-center justify-between px-6  bg-white'>
            <div className='p-4'>
              <h2 className='text-2xl font-bold font-playfairDisplay tracking-wide'>
                Basic Plan
              </h2>
              <p>₹1600/sq.ft (Incl GST)</p>
            </div>
            <div className='top-4 right-4'>
              <p className='bg-red-600 font-semibold px-4 py-1 rounded-full uppercase text-xs text-white'>
                Popular
              </p>
            </div>
          </div>
          <hr className='border-gray-300' />
          <div className='w-full bg-white shadow-md p-5'>
            <Accordion type='single' collapsible className='w-full'>
              {/* Design & Drawings */}
              <AccordionItem value='item-1' className=''>
                <AccordionTrigger className=''>
                  Design & Drawings
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Floor plan design tailored to the client’s requirements.
                    </li>
                    <li>Two options for 3D elevation provided.</li>
                    <li>
                      Design in compliance with IS Code and Soil Test Report.
                    </li>
                    <li>Furniture Layout and Schedule of Openings.</li>
                    <li>Comprehensive working drawings for all works.</li>
                    <li>MEP Designs (Electrical and Plumbing Drawings).</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Flooring & Tiles */}
              <AccordionItem value='item-2'>
                <AccordionTrigger>Flooring & Tiles</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Living, Dining: Vitrified tiles up to ₹60/sq.ft.</li>
                    <li>
                      Kitchen, Bedrooms & Common Areas: Vitrified tiles up to
                      ₹50/sq.ft.
                    </li>
                    <li>Staircase: Granite up to ₹70/sq.ft.</li>
                    <li>
                      Balcony, Setback & Parking: Antiskid tiles up to
                      ₹45/sq.ft.
                    </li>
                    <li>
                      Bathroom Walls: Tiles up to ₹45/sq.ft (7 feet height).
                    </li>
                    <li>Bathroom Floor: Antiskid tiles up to ₹45/sq.ft.</li>
                    <li>
                      Kitchen Dado: 2 feet height above countertop – ₹50/sq.ft.
                    </li>
                    <li>Kitchen Counter Slab: Granite up to ₹70/sq.ft.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Fittings */}
              <AccordionItem value='item-3'>
                <AccordionTrigger>Fittings</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Kitchen sink with accessories (ISI Mark) up to ₹4,000.
                    </li>
                    <li>Kitchen sink faucet (ISI Mark) up to ₹1,300.</li>
                    <li>
                      CP & Sanitary Fittings (ISI Mark) up to ₹20,000 per
                      toilet.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Water Proofing */}
              <AccordionItem value='item-4'>
                <AccordionTrigger>Water Proofing</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Waterproofing for terrace slab, washrooms, and balconies
                      using Fosroc/Dr. Fixit Brushbond or equivalent brands.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Civil Construction */}
              <AccordionItem value='item-5'>
                <AccordionTrigger>Civil Construction</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Floor Heights: 10' from finished floor level.</li>
                    <li>Steel: Client-chosen brand (₹60,000/MT).</li>
                    <li>Cement: JSW or Penna (₹350/bag).</li>
                    <li>RCC Framed Structure: M-20/M-25 grade concrete.</li>
                    <li>Foundation: Isolated footings in regular soil.</li>
                    <li>Plastering: Internal (15mm), External (12mm + 8mm).</li>
                    <li>
                      Chicken Mesh: Used at key junctions and conduit chases.
                    </li>
                    <li>
                      Blockwork Masonry: Standard concrete blocks with plaster.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Electrical */}
              <AccordionItem value='item-6'>
                <AccordionTrigger>Electrical</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Switches & Boards: Anchor Roma or equivalent.</li>
                    <li>UPS Provision: Included.</li>
                    <li>CCTV: 2 points provided.</li>
                    <li>
                      Electrical wiring: Finolex/Polycab fire-proof copper
                      wires.
                    </li>
                    <li>AC Provision: For all bedrooms.</li>
                    <li>Car Charging Point: Provided in parking area.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Plumbing */}
              <AccordionItem value='item-7'>
                <AccordionTrigger>Plumbing</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>CPVC & PVC Pipes: Ashirvad, Astral, or equivalent.</li>
                    <li>Overhead Tank: 1,000 liters (Sintex or equivalent).</li>
                    <li>Water Supply System: Internal and external.</li>
                    <li>Rainwater Harvesting Facility: Included.</li>
                    <li>Separate Sewage & Drainage Lines: Installed.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Fabrication */}
              <AccordionItem value='item-8'>
                <AccordionTrigger>Fabrication</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>MS Gate: Up to Rs. 1200 per Rft.</li>
                    <li>
                      External Staircase & Balcony Railing: SS Railing up to Rs.
                      680 per Rft.
                    </li>
                    <li>
                      Internal Staircase: SS railing with glass up to Rs. 850
                      per Rft.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Doors & Windows */}
              <AccordionItem value='item-9'>
                <AccordionTrigger>Doors & Windows</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Main Door: Teak wood (₹25,000 per door).</li>
                    <li>Internal Doors: Sal wood (₹7,000 per door).</li>
                    <li>
                      Bathroom Doors: Frame and shutter (₹5,000 per door).
                    </li>
                    <li>UPVC Windows: ₹450/sq.ft with MS grill.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Painting */}
              <AccordionItem value='item-10'>
                <AccordionTrigger>Painting</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Internal Walls & Ceiling: 2 coat putty + 1 coat primer + 2
                      coat emulsion.
                    </li>
                    <li>
                      External Walls: 1 coat primer + ACE weatherproof paint.
                    </li>
                    <li>
                      Compound Wall: Solid block walls, plastered, and painted.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Elevation */}
              <AccordionItem value='item-11'>
                <AccordionTrigger>Elevation</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Aesthetic elevation design included (0.25% on BUA).</li>
                    <li>3D design options provided for refinement.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Terms & Conditions */}
              <AccordionItem value='item-12' className='border-0'>
                <AccordionTrigger>Terms & Conditions</AccordionTrigger>
                <AccordionContent>
                  <p>
                    All applicable taxes included. Floor plan and elevation must
                    be finalized within 30 days. Additional charges apply for
                    specific requirements or deviations.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Two */}
        <div className='w-full'>
          <div className='flex items-center justify-between px-6 bg-white'>
            <div className='p-4'>
              <h2 className='text-2xl font-bold font-playfairDisplay tracking-wide'>
                Standard Plan
              </h2>
              <p>₹1800/sq.ft (Incl GST)</p>
            </div>
            <div className='top-4 right-4'>
              <p className='bg-red-600 font-semibold px-4 py-1 rounded-full uppercase text-xs text-white'>
                Recommended
              </p>
            </div>
          </div>
          <hr className='border-gray-300' />
          <div className='w-full bg-white shadow-md p-5'>
            <Accordion type='single' collapsible className='w-full'>
              {/* Design and Drawings */}
              <AccordionItem value='item-1'>
                <AccordionTrigger>Design & Drawings</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Floor plan design will be tailored to the client’s
                      requirements.
                    </li>
                    <li>Three options for 3D elevation will be provided.</li>
                    <li>
                      Design in compliance with IS Code and Soil Test Report.
                    </li>
                    <li>
                      Isometric View, Furniture Layout, and Schedule of Openings
                      – Comprehensive working drawings for all works.
                    </li>
                    <li>MEP Designs (Electrical and Plumbing Drawings).</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Flooring and Tiles */}
              <AccordionItem value='item-2'>
                <AccordionTrigger>Flooring & Tiles</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Living, Dining: Vitrified tiles of choice up to Rs 120 per
                      sqft.
                    </li>
                    <li>
                      Kitchen, Bedrooms & Others: Vitrified tiles of choice up
                      to Rs. 70 per sqft.
                    </li>
                    <li>Staircase: Granite or tiles up to Rs. 100 per sqft.</li>
                    <li>
                      Balcony, Setback & Parking: Antiskid tiles up to Rs. 50
                      per sqft.
                    </li>
                    <li>
                      Bathroom Walls: Tiles up to Rs. 60 per sqft, up to 7 ft
                      height.
                    </li>
                    <li>
                      Bathroom Floor: Antiskid tiles up to Rs. 55 per sqft.
                    </li>
                    <li>
                      Kitchen Dado: Tiles up to Rs. 60 per sqft, 2 feet height
                      above countertop.
                    </li>
                    <li>
                      Kitchen Counter Slab: Granite up to Rs. 120 per sqft.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Fittings */}
              <AccordionItem value='item-3'>
                <AccordionTrigger>Fittings</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Kitchen sink with accessories – SS (ISI Mark) Products Up
                      to Rs. 8,000/-.
                    </li>
                    <li>Kitchen Sink faucet – ISI Mark up to Rs. 2,000/-.</li>
                    <li>
                      CP & Sanitary Fittings – ISI Mark Products up to Rs.
                      35,000/- Per Toilet.
                    </li>
                    <li>
                      Utility Sink & accessories – Make Kaff or equivalent up to
                      Rs 6,000/-.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Water Proofing */}
              <AccordionItem value='item-4'>
                <AccordionTrigger>Water Proofing</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Waterproofing in terrace slab, all washrooms, and
                      balconies using Fosroc/Dr Fixit or equivalent brands.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Civil Construction */}
              <AccordionItem value='item-5'>
                <AccordionTrigger>Civil Construction</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Floor Heights: Each floor will be 10’6″ from finished
                      floor level to finished floor level.
                    </li>
                    <li>Steel: Kamadhenu or Buwalka – Fe550D.</li>
                    <li>Cement: Birla Shakthi or Dalmia.</li>
                    <li>
                      RCC Framed Structure: Constructed with M-20/M-25 grade
                      concrete using 20mm and 40mm aggregates.
                    </li>
                    <li>
                      Foundation: Isolated footings in regular soil with a
                      bearing capacity of 180kN/m² and above, up to a depth of 5
                      feet.
                    </li>
                    <li>
                      Additional charges for specialized foundation designs or
                      additional excavation depth beyond 5 feet.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Electrical */}
              <AccordionItem value='item-6'>
                <AccordionTrigger>Electrical</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Switches & Switch Boards: Anchor Roma or equivalent.
                    </li>
                    <li>UPS Provision: Included.</li>
                    <li>
                      CCTV: Provision included, with 2 points in the front.
                    </li>
                    <li>
                      Light and power points provided as per design and client
                      requirements.
                    </li>
                    <li>Fire-Proof Copper Wire: Finolex or Polycab.</li>
                    <li>
                      Electric Car Charging Point: Provided in the parking area.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Plumbing */}
              <AccordionItem value='item-7'>
                <AccordionTrigger>Plumbing</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      CPVC & PVC Pipes: Ashirvad, Astral, or equivalent brands.
                    </li>
                    <li>
                      Overhead Tank (OHT): 2,000 liters, Sintex or equivalent.
                    </li>
                    <li>
                      Rainwater Harvesting Facility: Groundwater recharge
                      system.
                    </li>
                    <li>Separate Sewage & Drainage Lines: Installed.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Fabrication */}
              <AccordionItem value='item-8'>
                <AccordionTrigger>Fabrication</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>MS Gate: Up to Rs. 1750 per Rft.</li>
                    <li>
                      External Staircase & Balcony Railing: SS Railing up to Rs.
                      680 per Rft.
                    </li>
                    <li>
                      Internal Staircase: SS railing with glass up to Rs. 850
                      per Rft.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Doors and Windows */}
              <AccordionItem value='item-9'>
                <AccordionTrigger>Doors & Windows</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Main Door: Teak wood frame and shutter including hardware
                      – Rs. 40,000 per door.
                    </li>
                    <li>
                      Internal Door: Sal wood frame and flush shutter – Rs.
                      10,000 per door.
                    </li>
                    <li>
                      UPVC Windows: 5mm clear glass with MS grills – Rs. 550 per
                      sqft.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Painting */}
              <AccordionItem value='item-10'>
                <AccordionTrigger>Painting</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Internal Wall & Ceiling: 2 coats of wall putty + 1 coat of
                      primer + 2 coats of premium emulsion (Asian brand).
                    </li>
                    <li>
                      External Walls: 1 coat of primer + ACE weatherproof paint
                      (Asian brand).
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Compound Wall */}
              <AccordionItem value='item-13'>
                <AccordionTrigger>Compound Wall</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Solid block walls, 4 inches thick, designed to complement
                      the elevation.
                    </li>
                    <li>
                      Includes excavation, foundation, PCC, size stone masonry
                      with DPC course above SSM.
                    </li>
                    <li>Height of Compound Wall: 5 feet from plinth level.</li>
                    <li>
                      Finish: Compound wall will be plastered and painted.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Elevation */}
              <AccordionItem value='item-12'>
                <AccordionTrigger>Elevation</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Aesthetic Design: Includes an aesthetically pleasing
                      elevation design with a budget of 0.50% on BUA.
                    </li>
                    <li>
                      Design Options: A 3D elevation is provided for the client
                      to choose from and refine.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Structural Warranty */}
              <AccordionItem value='item-11'>
                <AccordionTrigger>Structural Warranty</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Construction Guarantee: 2 Years.</li>
                    <li>Structural & Waterproofing Warranty: 10 Years.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              {/* Terms and Conditions */}
              <AccordionItem value='item-14' className='border-0'>
                <AccordionTrigger>Terms & Conditions</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>The above cost includes all applicable taxes.</li>
                    <li>
                      The floor plan and elevation must be finalized within 30
                      days from the date of releasing the first-floor plan
                      proposal by the architect.
                    </li>
                    <li>
                      Anti-termite treatment will adhere to standard procedures.
                    </li>
                    <li>
                      Approval costs for power and water are borne by the
                      client.
                    </li>
                    <li>
                      Road cutting charges for connecting electricity and sewage
                      lines are not included and will be charged additionally.
                    </li>
                    <li>
                      Costs for purchasing or removing earth for
                      excavation/backfilling purposes will be charged as
                      actuals.
                    </li>
                    <li>
                      Liaison assistance with authorities is provided, but fees
                      are borne by the client.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Three */}
        <div className='w-full'>
          <div className='flex items-center justify-between px-6 bg-white'>
            <div className='p-4'>
              <h2 className='text-2xl font-bold font-playfairDisplay tracking-wide'>
                Premium Plan
              </h2>
              <p>₹2000/sq.ft (Incl GST)</p>
            </div>
            <div className='top-4 right-4'>
              <p className='bg-red-600 font-semibold px-4 py-1 rounded-full uppercase text-xs text-white'>
                Exclusive
              </p>
            </div>
          </div>
          <hr className='border-gray-300' />

          <div className='w-full bg-white shadow-md p-5'>
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-1'>
                <AccordionTrigger>Design & Drawing</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Floor plan design tailored to client's requirements.
                    </li>
                    <li>Three options for 3D elevation provided.</li>
                    <li>
                      Design in compliance with IS Code and Soil Test Report.
                    </li>
                    <li>
                      Isometric View, Furniture Layout, and Schedule of Openings
                      – Comprehensive working drawings.
                    </li>
                    <li>MEP Designs (Electrical and Plumbing Drawings).</li>
                    <li>3D Walkthrough provided post-agreement signing.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-2'>
                <AccordionTrigger>Flooring & Tiles</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Living/Dining: Vitrified tiles up to Rs 340/sqft</li>
                    <li>
                      Kitchen/Bedrooms/Common: Vitrified tiles up to Rs 120/sqft
                    </li>
                    <li>Master Bedroom: Wooden flooring up to Rs 175/sqft</li>
                    <li>Staircase: Granite/tiles up to Rs 240/sqft</li>
                    <li>
                      Balcony/Setback/Parking: Antiskid tiles up to Rs 120/sqft
                    </li>
                    <li>
                      Bathroom Walls: Tiles up to Rs 120/sqft (full height)
                    </li>
                    <li>Bathroom Floor: Antiskid tiles up to Rs 120/sqft</li>
                    <li>
                      Kitchen Dado: Tiles up to Rs 120/sqft (2ft above counter,
                      full height near chimney if needed)
                    </li>
                    <li>Kitchen Counter: Granite up to Rs 240/sqft</li>
                    <li>Epoxy Grouting: Bathrooms and balconies</li>
                    <li>Terrace Cooling Tiles: Rs 60/sqft</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-3'>
                <AccordionTrigger>Fittings</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Kitchen Sink (SS, ISI): Up to Rs 20,000</li>
                    <li>Kitchen Faucet (ISI): Up to Rs 4,000</li>
                    <li>
                      CP & Sanitary Fittings (ISI): Up to Rs 80,000 per toilet
                    </li>
                    <li>
                      Utility Sink: Kaff/Franke/Futura or equivalent up to Rs
                      15,000
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-4'>
                <AccordionTrigger>Water Proofing</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Waterproofing: Terrace, bathrooms, and balconies
                      (Fosroc/Dr Fixit Brushbond or equivalent)
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-5'>
                <AccordionTrigger>Civil Construction</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Floor Height: 11'6"</li>
                    <li>Steel: TATA Fe550D</li>
                    <li>Cement: Ultratech/Birla Super</li>
                    <li>RCC: M-25 concrete (20mm & 40mm aggregates)</li>
                    <li>
                      Foundation: Isolated footings (180kN/m², up to 5ft depth -
                      additional charges beyond)
                    </li>
                    <li>
                      Plastering: Internal (1:5, 15mm), External (1:5,
                      12mm+8mm), Ceiling (1:4)
                    </li>
                    <li>
                      Chicken Mesh: Beam/column/wall junctions, electrical
                      chases
                    </li>
                    <li>Plinth: 1'6" above ground</li>
                    <li>
                      Blockwork: Solid concrete (4" internal, 8" external - APCO
                      or equivalent)
                    </li>
                    <li>
                      M-sand: Double washed for masonry, P-sand for plastering
                    </li>
                    <li>Lintels: Over openings (6" bearing)</li>
                    <li>UG Sump: 9" brick, waterproofed, 12,000 liters</li>
                    <li>Entry ramp (based on site)</li>
                    <li>Neighbor protection (tarpaulin)</li>
                    <li>Gas line provision</li>
                    <li>Sill level band</li>
                    <li>Damp proof course</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-6'>
                <AccordionTrigger>Electrical</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Switches/Boards: Havells/Legrand</li>
                    <li>UPS Provision</li>
                    <li>CCTV Provision (2 front points)</li>
                    <li>Points: As per design/client</li>
                    <li>Geyser Points: All bathrooms</li>
                    <li>AC Provision: All bedrooms, main living area</li>
                    <li>Conduits: Concealed</li>
                    <li>Wiring: Fire-proof copper (Finolex/Polycab)</li>
                    <li>External Electrification</li>
                    <li>Main DB & MCB: ABB/IndoAsian/Siemens or equivalent</li>
                    <li>Electric Car Charging Point: Parking area</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-7'>
                <AccordionTrigger>Plumbing</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Pipes: CPVC & PVC (Ashirvad/Astral or equivalent)</li>
                    <li>OHT: 2,000 liters (Sintex or equivalent)</li>
                    <li>Water Supply: Internal & external</li>
                    <li>Sewage: External, with inspection chambers</li>
                    <li>Solar & Geyser Provision: All toilets</li>
                    <li>Rainwater Harvesting</li>
                    <li>GI chamber covers</li>
                    <li>Separate sewage & drainage lines</li>
                    <li>Hot/cold water inlet: Kitchen sink</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-8'>
                <AccordionTrigger>Fabrication</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>MS Gate: Up to Rs 2550/Rft</li>
                    <li>External Stair/Balcony Railing: SS up to Rs 880/Rft</li>
                    <li>Internal Staircase: SS with glass up to Rs 1550/Rft</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-9'>
                <AccordionTrigger>Doors & Windows</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Openings: Max 25% of built-up area</li>
                    <li>
                      Main Door: Teak (Rs 1,00,000 for 1 house, Rs 25,000 for
                      others)
                    </li>
                    <li>Puja Door: Teak (Rs 50,000, if applicable)</li>
                    <li>
                      Internal Doors: Sal wood frame, flush shutter (Rs 25,000)
                    </li>
                    <li>Bathroom Doors: (Rs 20,000)</li>
                    <li>
                      Windows: Red Sal frames, MS rods, Honne shutters with
                      glass
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-10'>
                <AccordionTrigger>Painting</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Internal: 2 putty + 1 primer + 2 Royal emulsion (Asian)
                    </li>
                    <li>
                      External: 1 primer + Ultima weatherproof (Asian/Berger)
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-11'>
                <AccordionTrigger>Compound Wall (If Charged)</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>4" solid block</li>
                    <li>
                      Includes excavation, foundation, PCC, stone masonry, DPC
                    </li>
                    <li>5ft height from plinth</li>
                    <li>Plastered and painted</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-12'>
                <AccordionTrigger>Elevation</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Aesthetic Design: The proposal includes an aesthetically
                      pleasing elevation design with budget of 1.5% on BUA.{' '}
                    </li>
                    <li>
                      Design Options: A 3D elevation is provided for the client
                      to choose from and further refine.{' '}
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-13'>
                <AccordionTrigger>Home Automation</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>Provision included</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-14'>
                <AccordionTrigger>Structural Warranty</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>
                      Construction guarantee 2 Year ; Structural & Waterproofing
                      Warranty – 10 Years{' '}
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-15' className='border-0'>
                <AccordionTrigger>Terms & Conditions</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc ml-4'>
                    <li>The above cost includes all applicable taxes.</li>
                    <li>
                      The floor plan and elevation must be finalized within 30
                      days from the date of releasing the first-floor plan
                      proposal by the architect.
                    </li>
                    <li>
                      SSM below the plinth is not included; if required, it will
                      be charged based on actual costs.
                    </li>
                    <li>
                      Anti-termite treatment will adhere to standard procedures.
                    </li>
                    <li>
                      Steel & Cement price will be considered as per agreement
                      date; if there is a major fluctuation exceeding 5% of the
                      average market price at the time of purchasing, the
                      difference shall be charged in consultation with the
                      client.
                    </li>
                    <li>
                      Sewer line connection to the main drain line is included
                      up to 10 feet from the building.
                    </li>
                    <li>
                      The client must provide water and electricity for the
                      work. Rates are based on natural earth excavation.
                      Additional charges will apply for concrete structures,
                      stones, rock slush, or any other obstacles encountered
                      during excavation.
                    </li>
                    <li>
                      The cost assumes that the site and road are at the same
                      level.
                    </li>
                    <li>
                      This package does not include equipment, machinery, or
                      fixtures such as sump pumps, solar panels, tanks, geysers,
                      or bulbs.
                    </li>
                    <li>
                      The client will bear the approval costs for power and
                      water. Road cutting charges for connecting electricity and
                      sewage lines are not included and will be charged
                      additionally.
                    </li>
                    <li>
                      Costs for purchasing new earth or removing existing earth
                      for excavation/backfilling purposes will be charged based
                      on actual costs.
                    </li>
                    <li>
                      Liaison assistance with BBMP/BDA/BMRDA and similar
                      authorities will be provided by the company, with fees to
                      be borne by the client.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <hr className='my-20 border-gray-300' />
      {/* <hr className='my-20 text-hrColor' /> */}
    </section>
  )
}
