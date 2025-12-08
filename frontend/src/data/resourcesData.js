const PDF_PATH = "/assets/pdfs/";

const resourcesData = {
  categories: [
    {
      name: "Product",
      documents: [
        {
          id: "Endoscopic_Camera_System",
          name: "Endoscopic Camera System",
          description:
            "High-definition visualization platform designed to enhance clarity and precision in minimally invasive spine surgery.",
          thumbnail: `${PDF_PATH}Product/Equipment/Consoles/Endoscopic_Camera_System/User_Manual/thumbnail.png`,
          file: `${PDF_PATH}Product/Equipment/Consoles/Endoscopic_Camera_System/User_Manual/Endoscopic_Camera_System.pdf`,
          url: null,
          tags: ["brochure", "product", "camera"],
          date: "2025-04-30",

          relatedProductIds: ["endoscopic_camera_system"],
        },

        {
          id: "Fluid_Management_System",
          name: "Fluid Management System",
          description:
            "Integrated irrigation and suction console engineered for optimal pressure control and clear endoscopic visualization.",
          thumbnail: `${PDF_PATH}Product/Equipment/Consoles/Fluid_Management_System/User_Manual/thumbnail.png`,
          file: `${PDF_PATH}Product/Equipment/Consoles/Fluid_Management_System/User_Manual/Fluid_Management_System_User_Manual.pdf`,
          url: null,
          tags: ["brochure", "product", "fluid"],
          date: "2025-04-30",

          relatedProductIds: ["fluid_management_system"],
        },

        {
          id: "Radio_Frequency_Ablation_System",
          name: "Spinex 9000",
          description:
            "Advanced RF ablation console for precise soft tissue sculpting, cutting, and hemostasis in endoscopic spine surgery.",
          thumbnail: `${PDF_PATH}Product/Equipment/Consoles/Radio_Frequency_Ablation_System/User_Manual/thumbnail.jpg`,
          file: `${PDF_PATH}Product/Equipment/Consoles/Radio_Frequency_Ablation_System/User_Manual/Spinex_9000_User_Manual.pdf`,
          url: null,
          tags: ["brochure", "product", "radio"],
          date: "2025-04-30",

          relatedProductIds: ["radio_frequency_ablation_system"],
        },

        {
          id: "Bur_System",
          name: "Bur System",
          description:
            "High-speed spinal bur platform providing efficient bone removal and precision control during decompression procedures.",
          thumbnail: `${PDF_PATH}Product/Equipment/Consoles/Shaver_System/User_Manual/thumbnail.jpg`,
          file: `${PDF_PATH}Product/Equipment/Consoles/Shaver_System/User_Manual/Bur_System_User_Manual.pdf`,
          url: null,
          tags: ["brochure", "product", "shaver"],
          date: "2025-04-30",

          relatedProductIds: ["bur_system"],
        },

        {
          id: "Ultrasonic_Osteotomy_Surgical_System",
          name: "Ultrasonic Osteotomy Surgical System",
          description:
            "Ultrasonic bone-cutting technology offering controlled, vibration-based osteotomies with reduced trauma to surrounding tissues.",
          thumbnail: `${PDF_PATH}Product/Equipment/Consoles/Ultrasonic_Osteotomy_Surgical_System/thumbnail.png`,
          file: `${PDF_PATH}Product/Equipment/Consoles/Ultrasonic_Osteotomy_Surgical_System/Ultrasonic_Osteotomy_Surgical_System.pdf`,
          url: null,
          tags: ["brochure", "product", "osteotomy"],
          date: "2025-04-30",

          relatedProductIds: ["ultrasonic_osteotomy_system"],
        },

        {
          id: "Cervical_Disc_Prosthesis_AXIS_C",
          name: "Cervical Disc Prosthesis – AXIS-C",
          description:
            "Next-generation cervical disc prosthesis designed to preserve mobility and reduce adjacent-segment degeneration.",
          thumbnail: `${PDF_PATH}Product/Implants/AXIS_C/thumbnail.png`,
          file: `${PDF_PATH}Product/Implants/AXIS_C/axis_c.pdf`,
          url: null,
          tags: ["implant", "cervical", "arthroplasty", "prosthesis"],
          date: "2024-11-24",

          relatedProductIds: ["cervical_disc_prosthesis"],
        },

        {
          id: "Spine_Surgical_Instruments_SSI",
          name: "SSI – Spine Surgical Instruments",
          description:
            "Comprehensive set of high-precision spine surgical instruments engineered for reliability, ergonomics, and procedural efficiency.",
          thumbnail: `${PDF_PATH}Product/Instruments/SSI/thumbnail.png`,
          file: `${PDF_PATH}Product/Instruments/SSI/SSI.pdf`,
          url: null,
          tags: ["instruments", "open surgery", "set", "ssi"],
          date: "2025-01-01",

          relatedProductIds: ["ssi_spine_instruments"],
        },
      ],
    },

    {
      name: "Surgical Technique",
      documents: [
        {
          id: "Olympus_MIS",
          name: "Olympus MIS",
          description:
            "Minimally invasive surgical technique designed to optimize visualization and access for spinal decompression and stabilization.",
          thumbnail: `${PDF_PATH}Techniques/Olympus_MIS/thumbnail.png`,
          file: `${PDF_PATH}Techniques/Olympus_MIS/Olympus_MIS.pdf`,
          url: null,
          tags: ["technique", "MIS", "surgical"],
          date: "2025-04-30",

          relatedProductIds: ["olympus_mis_polyaxial_pedicle_screw_ex_system"],
        },
      ],
    },
  ],
};

export default resourcesData;
