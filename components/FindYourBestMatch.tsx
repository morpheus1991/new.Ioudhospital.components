import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

type Data = {
  imgUrl: string;
  hospitalName: string;
  adress: string;
  specialties: string[];
  mark: string[];
  onlineConsultation: {
    service: boolean;
    fee?: string;
  };
};
type Datas = Data[];
const datas: Datas = [
  {
    imgUrl: "/images/",
    hospitalName: "Korea University Anam Hospital",
    adress:
      "Coronary heart disease (CHD), Rectal Cancer, Uterine Myoma, Peripheral artery disease, Coronary Angiography, Atrial septal defect (ASD), Poland syndrome, Colon Cancer, Uterine polyps, Liver diseases, Urethral cancer, Breast Cancer, Double Jaw Surgery, Kidney Transplant, Spinal tumor, Breast cyst, Arrhythmia, Heart valve disease, Congenital craniofacial anomalies, Transaxillary robotic-assisted thyroid surgery, All-Well Medical Examination Male, Breast Disease, Cervical Carcinoma In Situ, Adrenal tumors, Gastrointestinal Disorders, Aortic Aneurysm, Breast Cancer, Ovarian tumor, Prostate cancer, Artificial joints (knee, hip), Scoliosis & Spinal Deformity, Ovarian cyst, Tongue cancer, Obesity metabolism (extreme obesity), Ileostomy repair, Hepatitis (A/B/C), Head and neck tumor, Pre-excitation syndrome (WPW), Cirrhosis, Laparoscopic Cholecystectomy, Aortic valve disease, Arrhythmia surgery, All-Well Medical Examination Female, Tachycardia",
    specialties: ["specialties1,specialties2"],
    mark: ["koiha", "koiha"],
    onlineConsultation: {
      service: true,
      fee: "100",
    },
  },

  {
    imgUrl: "/images/",
    hospitalName: "Korea University Anam Hospital",
    adress:
      "Coronary heart disease (CHD), Rectal Cancer, Uterine Myoma, Peripheral artery disease, Coronary Angiography, Atrial septal defect (ASD), Poland syndrome, Colon Cancer, Uterine polyps, Liver diseases, Urethral cancer, Breast Cancer, Double Jaw Surgery, Kidney Transplant, Spinal tumor, Breast cyst, Arrhythmia, Heart valve disease, Congenital craniofacial anomalies, Transaxillary robotic-assisted thyroid surgery, All-Well Medical Examination Male, Breast Disease, Cervical Carcinoma In Situ, Adrenal tumors, Gastrointestinal Disorders, Aortic Aneurysm, Breast Cancer, Ovarian tumor, Prostate cancer, Artificial joints (knee, hip), Scoliosis & Spinal Deformity, Ovarian cyst, Tongue cancer, Obesity metabolism (extreme obesity), Ileostomy repair, Hepatitis (A/B/C), Head and neck tumor, Pre-excitation syndrome (WPW), Cirrhosis, Laparoscopic Cholecystectomy, Aortic valve disease, Arrhythmia surgery, All-Well Medical Examination Female, Tachycardia",
    specialties: ["specialties1,specialties2"],
    mark: ["koiha"],
    onlineConsultation: {
      service: false,
    },
  },
  {
    imgUrl: "/images/",
    hospitalName: "Korea University Anam Hospital",
    adress:
      "Coronary heart disease (CHD), Rectal Cancer, Uterine Myoma, Peripheral artery disease, Coronary Angiography, Atrial septal defect (ASD), Poland syndrome, Colon Cancer, Uterine polyps, Liver diseases, Urethral cancer, Breast Cancer, Double Jaw Surgery, Kidney Transplant, Spinal tumor, Breast cyst, Arrhythmia, Heart valve disease, Congenital craniofacial anomalies, Transaxillary robotic-assisted thyroid surgery, All-Well Medical Examination Male, Breast Disease, Cervical Carcinoma In Situ, Adrenal tumors, Gastrointestinal Disorders, Aortic Aneurysm, Breast Cancer, Ovarian tumor, Prostate cancer, Artificial joints (knee, hip), Scoliosis & Spinal Deformity, Ovarian cyst, Tongue cancer, Obesity metabolism (extreme obesity), Ileostomy repair, Hepatitis (A/B/C), Head and neck tumor, Pre-excitation syndrome (WPW), Cirrhosis, Laparoscopic Cholecystectomy, Aortic valve disease, Arrhythmia surgery, All-Well Medical Examination Female, Tachycardia",
    specialties: [
      "specialties1",
      "specialties1",
      "specialties1",
      "specialties1",
    ],
    mark: ["koiha"],
    onlineConsultation: {
      service: true,
      fee: "100",
    },
  },

  {
    imgUrl: "/images/",
    hospitalName: "Korea University Anam Hospital",
    adress:
      "Coronary heart disease (CHD), Rectal Cancer, Uterine Myoma, Peripheral artery disease, Coronary Angiography, Atrial septal defect (ASD), Poland syndrome, Colon Cancer, Uterine polyps, Liver diseases, Urethral cancer, Breast Cancer, Double Jaw Surgery, Kidney Transplant, Spinal tumor, Breast cyst, Arrhythmia, Heart valve disease, Congenital craniofacial anomalies, Transaxillary robotic-assisted thyroid surgery, All-Well Medical Examination Male, Breast Disease, Cervical Carcinoma In Situ, Adrenal tumors, Gastrointestinal Disorders, Aortic Aneurysm, Breast Cancer, Ovarian tumor, Prostate cancer, Artificial joints (knee, hip), Scoliosis & Spinal Deformity, Ovarian cyst, Tongue cancer, Obesity metabolism (extreme obesity), Ileostomy repair, Hepatitis (A/B/C), Head and neck tumor, Pre-excitation syndrome (WPW), Cirrhosis, Laparoscopic Cholecystectomy, Aortic valve disease, Arrhythmia surgery, All-Well Medical Examination Female, Tachycardia",
    specialties: ["specialties1,specialties2"],
    mark: ["koiha", "koiha"],
    onlineConsultation: {
      service: false,
    },
  },
  {
    imgUrl: "/images/",
    hospitalName: "Korea University Anam Hospital",
    adress:
      "Coronary heart disease (CHD), Rectal Cancer, Uterine Myoma, Peripheral artery disease, Coronary Angiography, Atrial septal defect (ASD), Poland syndrome, Colon Cancer, Uterine polyps, Liver diseases, Urethral cancer, Breast Cancer, Double Jaw Surgery, Kidney Transplant, Spinal tumor, Breast cyst, Arrhythmia, Heart valve disease, Congenital craniofacial anomalies, Transaxillary robotic-assisted thyroid surgery, All-Well Medical Examination Male, Breast Disease, Cervical Carcinoma In Situ, Adrenal tumors, Gastrointestinal Disorders, Aortic Aneurysm, Breast Cancer, Ovarian tumor, Prostate cancer, Artificial joints (knee, hip), Scoliosis & Spinal Deformity, Ovarian cyst, Tongue cancer, Obesity metabolism (extreme obesity), Ileostomy repair, Hepatitis (A/B/C), Head and neck tumor, Pre-excitation syndrome (WPW), Cirrhosis, Laparoscopic Cholecystectomy, Aortic valve disease, Arrhythmia surgery, All-Well Medical Examination Female, Tachycardia",
    specialties: ["specialties1,specialties2"],
    mark: ["koiha"],
    onlineConsultation: {
      service: true,
      fee: "100",
    },
  },

  {
    imgUrl: "/images/",
    hospitalName: "Korea University Anam Hospital",
    adress:
      "Coronary heart disease (CHD), Rectal Cancer, Uterine Myoma, Peripheral artery disease, Coronary Angiography, Atrial septal defect (ASD), Poland syndrome, Colon Cancer, Uterine polyps, Liver diseases, Urethral cancer, Breast Cancer, Double Jaw Surgery, Kidney Transplant, Spinal tumor, Breast cyst, Arrhythmia, Heart valve disease, Congenital craniofacial anomalies, Transaxillary robotic-assisted thyroid surgery, All-Well Medical Examination Male, Breast Disease, Cervical Carcinoma In Situ, Adrenal tumors, Gastrointestinal Disorders, Aortic Aneurysm, Breast Cancer, Ovarian tumor, Prostate cancer, Artificial joints (knee, hip), Scoliosis & Spinal Deformity, Ovarian cyst, Tongue cancer, Obesity metabolism (extreme obesity), Ileostomy repair, Hepatitis (A/B/C), Head and neck tumor, Pre-excitation syndrome (WPW), Cirrhosis, Laparoscopic Cholecystectomy, Aortic valve disease, Arrhythmia surgery, All-Well Medical Examination Female, Tachycardia",
    specialties: ["specialties1,specialties2"],
    mark: ["koiha"],
    onlineConsultation: {
      service: false,
    },
  },
  {
    imgUrl: "/images/",
    hospitalName: "Korea University Anam Hospital",
    adress:
      "Coronary heart disease (CHD), Rectal Cancer, Uterine Myoma, Peripheral artery disease, Coronary Angiography, Atrial septal defect (ASD), Poland syndrome, Colon Cancer, Uterine polyps, Liver diseases, Urethral cancer, Breast Cancer, Double Jaw Surgery, Kidney Transplant, Spinal tumor, Breast cyst, Arrhythmia, Heart valve disease, Congenital craniofacial anomalies, Transaxillary robotic-assisted thyroid surgery, All-Well Medical Examination Male, Breast Disease, Cervical Carcinoma In Situ, Adrenal tumors, Gastrointestinal Disorders, Aortic Aneurysm, Breast Cancer, Ovarian tumor, Prostate cancer, Artificial joints (knee, hip), Scoliosis & Spinal Deformity, Ovarian cyst, Tongue cancer, Obesity metabolism (extreme obesity), Ileostomy repair, Hepatitis (A/B/C), Head and neck tumor, Pre-excitation syndrome (WPW), Cirrhosis, Laparoscopic Cholecystectomy, Aortic valve disease, Arrhythmia surgery, All-Well Medical Examination Female, Tachycardia",
    specialties: ["specialties1,specialties2"],
    mark: ["koiha"],
    onlineConsultation: {
      service: true,
      fee: "100",
    },
  },

  {
    imgUrl: "/images/",
    hospitalName: "Korea University Anam Hospital",
    adress:
      "Coronary heart disease (CHD), Rectal Cancer, Uterine Myoma, Peripheral artery disease, Coronary Angiography, Atrial septal defect (ASD), Poland syndrome, Colon Cancer, Uterine polyps, Liver diseases, Urethral cancer, Breast Cancer, Double Jaw Surgery, Kidney Transplant, Spinal tumor, Breast cyst, Arrhythmia, Heart valve disease, Congenital craniofacial anomalies, Transaxillary robotic-assisted thyroid surgery, All-Well Medical Examination Male, Breast Disease, Cervical Carcinoma In Situ, Adrenal tumors, Gastrointestinal Disorders, Aortic Aneurysm, Breast Cancer, Ovarian tumor, Prostate cancer, Artificial joints (knee, hip), Scoliosis & Spinal Deformity, Ovarian cyst, Tongue cancer, Obesity metabolism (extreme obesity), Ileostomy repair, Hepatitis (A/B/C), Head and neck tumor, Pre-excitation syndrome (WPW), Cirrhosis, Laparoscopic Cholecystectomy, Aortic valve disease, Arrhythmia surgery, All-Well Medical Examination Female, Tachycardia",
    specialties: ["specialties1,specialties2"],
    mark: ["koiha"],
    onlineConsultation: {
      service: false,
    },
  },
];
const FindYourBestMatch = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl md:text-34px font-bold">
          Find Your Best Match
        </h2>
        <p className="text-sm md:text-xl mt-2.5 max-w-2xl">
          <span className="inline">
            Using our smart selection system to sort through the world's top
            clinics and hospitals to provide you only with the best match
          </span>
        </p>
      </div>
      <div>
        <div className=" pt-20 mg:pb-20 -translate-y-20">
          <Swiper
            spaceBetween={14}
            slidesPerView={7}
            navigation={true}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              560: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              1480: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
              1920: {
                slidesPerView: 7,
                spaceBetween: 12,
              },
            }}
          >
            {datas.map((item, i) => (
              <div className="" key={i}>
                <SwiperSlide>
                  <div className="w-full bg-white flex flex-col mb-4 border rounded-3xl border-gray-200 overflow-hidden">
                    <Link href="/">
                      <div>
                        {/* 이미지 영역 */}
                        <div className="relative">
                          <div className="w-full h-[330px] overflow-hidden bg-red-500">
                            {/* <Image
                          src="/images/test-hospital.jpg"
                          width="346"
                          height="330"
                          className="w-full bg-slate-900"
                        ></Image> */}
                          </div>
                        </div>
                        {/* 텍스트 영역 */}
                        <div className="relative h-48 p-4 font-semibold rounded-b-2xl ">
                          <ul className="flex justify-end h-12 space-x-2">
                            {item.mark.length > 0
                              ? item.mark.map((mark) => (
                                  <li key={i} className="">
                                    <Image
                                      width="40"
                                      height="40"
                                      src={`/images/icon/logo_${mark}.jpeg`}
                                    ></Image>
                                  </li>
                                ))
                              : null}
                          </ul>
                          <strong className="text-lg">
                            {item.hospitalName}
                          </strong>
                          <p className="text-md font-bold flex items-center text-red-500">
                            <span className="w-5 h-5 bg-[url('/images/ic-b-address.png')] bg-[length:20px_20px] bg-[0px_center]"></span>
                            <span className="overflow-hidden w-full whitespace-nowrap text-ellipsis">
                              {item.adress}
                            </span>
                          </p>
                          <p className="text-md font-bold flex items-center text-blue-500">
                            <span className="w-5 h-5 bg-[url('/images/ic-b-specialty.png')] bg-[length:22px_16px] bg-[center_top_0.05rem] bg-no-repeat"></span>
                            <span className=" ">{item.specialties}</span>
                          </p>
                          {item.onlineConsultation.service ? (
                            <p className="mt-1">
                              <strong>
                                Fee: ${item.onlineConsultation.fee}
                                <span className="ml-2 text-xs  text-hospitalFeeSubtextGray">
                                  taxes and fees included
                                </span>
                              </strong>
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </Link>
                    <div className="flex justify-center space-x-2 p-4">
                      {item.onlineConsultation.service ? (
                        <button className="text-sm min-w-[calc(50%-6px)] w-full h-12 px-4 rounded-3xl bg-primary font-bold text-white">
                          Online Consultation
                        </button>
                      ) : null}
                      <button className="text-sm min-w-[calc(50%-6px)] w-full h-12 px-4 rounded-3xl border-primary text-primary font-bold border">
                        Ask a Question
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FindYourBestMatch;
