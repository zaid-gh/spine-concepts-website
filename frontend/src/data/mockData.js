import descriptions from "./descriptions";

const IMAGE_PATH = "/assets/images/product/";

const mockData = {
  surgeryType: "Endoscopic",
  label: "Endoscopic Spine Surgery",
  categories: [
    {
      name: "Consoles",
      products: [
        {
          id: "radio_frequency_ablation_system",
          name: "Spinex 9000",
          description: descriptions.radioFrequencyAblationSystem,
          photos: [
            `${IMAGE_PATH}console/radiofrequency_ablation_system/web_DSC_4268-Edit.png`,
            `${IMAGE_PATH}console/radiofrequency_ablation_system/web_IMG_2756.png`,
          ],
        },

        {
          id: "endoscopic_camera_system",
          name: "Endoscopic Camera System",
          description: descriptions.endoscopicCameraSystem,
          photos: [
            `${IMAGE_PATH}console/arthroscopic_camera_system/web_IMG_2512.png`,
            `${IMAGE_PATH}console/arthroscopic_camera_system/web_IMG_2560.png`,
            `${IMAGE_PATH}console/arthroscopic_camera_system/web_IMG_2548.png`,
            `${IMAGE_PATH}console/arthroscopic_camera_system/web_IMG_2528_2.png`,
          ],
        },
        {
          id: "bur_system",
          name: "Bur System",
          description: descriptions.burSystem,
          photos: [
            `${IMAGE_PATH}console/shaver_system/web_DSC_4281-Edit.png`,
            `${IMAGE_PATH}console/shaver_system/web_BrochureTower.png`,
          ],
        },
        {
          id: "fluid_management_system",
          name: "Fluid Management System",
          description: descriptions.fluidManagementSystem,
          photos: [
            `${IMAGE_PATH}console/fluid_management_system/web_flowTower.png`,
            `${IMAGE_PATH}console/fluid_management_system/web_IMG_2890-Mejorado-NR.png`,
          ],
        },
      ],
    },
    {
      name: "Monitor",
      products: [
        {
          id: "uhd_surgical_monitor",
          name: "UHD Surgical Monitor",
          description: descriptions.uhdSurgicalMonitor,
          photos: [
            `${IMAGE_PATH}console/uhd_surgical_monitor/web_MonitorConcepts.png`,
          ],
        },
      ],
    },
    {
      name: "Disposable",
      products: [
        {
          id: "radio_frequency_ablation_probe",
          name: "Radio Frequency Ablation Probe",
          description: descriptions.radiofrequencyAblationProbe,
          photos: [
            `${IMAGE_PATH}disposable/radiofrequency_ablation_probe/web_disposable_arhtroblade.webp`,

            `${IMAGE_PATH}disposable/radiofrequency_ablation_probe/web_DSC_3765-Edit.webp`,
          ],
        },
        {
          id: "inflow_tube_system",
          name: "Inflow Tube System",
          description: descriptions.inflowTubeSystem,
          photos: [
            `${IMAGE_PATH}disposable/inflow_tube_system/web_DSC_4160-Edit.png`,
          ],
        },
        {
          id: "spinal_burs",
          name: "Spinal Burs",
          description: descriptions.spinalBurs,
          photos: [
            `${IMAGE_PATH}disposable/spinal_bur/spinal_bur_1.webp`,
            `${IMAGE_PATH}disposable/spinal_bur/spinal_bur_handle_1.webp`,
            `${IMAGE_PATH}disposable/spinal_bur/spinal_bur_handle_2.webp`,
            `${IMAGE_PATH}disposable/spinal_bur/spinal_bur_3.webp`,
          ],
        },
      ],
    },
    {
      name: "Implants",
      products: [
        {
          id: "olympus_mis_polyaxial_pedicle_screw_ex_system",
          name: "Olympus MIS Polyaxial Pedicle Screw EX System",
          description: descriptions.olympusMis,
          photos: [
            `${IMAGE_PATH}implants/olympus_mis/web_DSC_4382-Edit.png`,
            `${IMAGE_PATH}implants/olympus_mis/web_IMG_2978-Mejorado-NR.png`,
            `${IMAGE_PATH}implants/olympus_mis/web_IMG_2979-Mejorado-NR.png`,
            `${IMAGE_PATH}implants/olympus_mis/web_IMG_2983-Mejorado-NR.png`,
            `${IMAGE_PATH}implants/olympus_mis/web_DSC_4385-Edit.png`,
            `${IMAGE_PATH}implants/olympus_mis/web_IMG_3059-Mejorado-NR.png`,
            `${IMAGE_PATH}implants/olympus_mis/web_DSC_4388-Edit.webp`,
            `${IMAGE_PATH}implants/olympus_mis/web_DSC_4379-Edit.png`,
          ],
        },
        {
          id: "titan_endoscopic_cage",
          name: "Titan Endoscopic Cage",
          description: descriptions.titanEndoscopicCage,
          photos: [
            `${IMAGE_PATH}implants/titan_edoscopic_box/web_IMG_3079-Mejorado-NR.png`,
          ],
        },
        {
          id: "cervical_disc_prosthesis",
          name: "Cervical Disc Prosthesis",
          description: descriptions.cervicalDiscProsthesis,
          photos: [
            `${IMAGE_PATH}implants/cervical_disc_prosthesis/cdp_7.webp`,
            `${IMAGE_PATH}implants/cervical_disc_prosthesis/cdp_4.webp`,
            `${IMAGE_PATH}implants/cervical_disc_prosthesis/cdp_2.webp`,
            `${IMAGE_PATH}implants/cervical_disc_prosthesis/cdp_3.webp`,
            `${IMAGE_PATH}implants/cervical_disc_prosthesis/cdp_5.webp`,
            `${IMAGE_PATH}implants/cervical_disc_prosthesis/cdp_1.webp`,
            `${IMAGE_PATH}implants/cervical_disc_prosthesis/cdp_6.webp`,
          ],
        },
      ],
    },
  ],
};

export default mockData;
