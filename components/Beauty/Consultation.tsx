import Image from "next/image";
import LayoutCon from "../LayoutCon";

const Consultation = () => {
    return (
        <section className="py-20 bg-bgaliceblue">
            <LayoutCon>
                <div className="flex">
                    <div className="flex-1">
                        <h2 className="text-4xl pt-4 font-bold">
                            How online consultation
                        </h2>
                        <p className="text-xl">
                            works with our platform and why you should consider
                            us:
                        </p>
                        <ol>
                            <li className="mt-6">
                                <h3 className="text-xl font-bold before:content-[''] before:inline-block before:w-[18px] before:h-[18px] before:bg-ico-ch-1 before:bg-no-repeat before:bg-cover before:mr-4">
                                    1. Search
                                </h3>
                                <p>
                                    Search our website and ask us if you are not
                                    sure.
                                </p>
                            </li>
                            <li className="mt-6">
                                <h3 className="text-xl font-bold before:content-[''] before:inline-block before:w-[18px] before:h-[18px] before:bg-ico-ch-6 before:bg-no-repeat before:bg-cover before:mr-4">
                                    2. Choose the right clinic/doctor
                                </h3>
                                <p>
                                    Search our website and ask us if you are not
                                    sure.
                                </p>
                            </li>
                            <li className="mt-6">
                                <h3 className="text-xl font-bold before:content-[''] before:inline-block before:w-[18px] before:h-[18px] before:bg-ico-ch-7 before:bg-no-repeat before:bg-cover before:mr-4">
                                    3. Pay the nominal amount
                                </h3>
                                <p>
                                    Choose the right clinic/doctor and book for
                                    an online consultation for your available
                                    chosen date. Provide as much information on
                                    your situation and condition as possible for
                                    us to better serve you.
                                </p>
                            </li>
                            <li className="mt-6">
                                <h3 className="text-xl font-bold before:content-[''] before:inline-block before:w-[18px] before:h-[18px] before:bg-ico-ch-8 before:bg-no-repeat before:bg-cover before:mr-4">
                                    4. Receive online consultation
                                </h3>
                                <p>
                                    Receive online consultation and get a
                                    customized advice structured just for you.
                                </p>
                            </li>
                        </ol>
                    </div>
                    <div className="relative flex-1 ml-40 rounded-[1rem] overflow-hidden shadow-[0_50px_100px_0px_rgba(59,67,092,0.2)]">
                        <Image
                            src="/images/beauty/consultation.jpg"
                            alt=""
                            layout="fill"
                            width={475}
                            height={700}
                            quality={100}
                        />
                    </div>
                </div>
                <p className="pt-4 mt-16 border-t border-[#49505740]">
                    There are many benefits of using our online consultations
                    for a number of issues or concerns you may have. First of
                    all, there is the convenience of having your medical and
                    non-medical (such as cosmetic surgery) questions answered
                    through our consultation platform from the comfort of your
                    home or office. Also, you will save a lot of time no longer
                    having to physically go to consult with many healthcare
                    providers and compare prices, a process that will require a
                    lot of time and effort spent. Using our consultation
                    platform, you can easily obtain a fully customized invoice
                    directly from the best hospital after your consultation,
                    which saves your precious time and money. In addition to the
                    convenience and money saved from online consultations,
                    CloudHospital constantly strives to offer our clients full
                    transparency in the entire process. For example, in the
                    beauty sector, there is a lack of comparable transparency
                    that might help a client choose the right clinic and doctor.
                    However, with our help in the process, our clients can rest
                    assured they are getting full transparency in learning about
                    the options, what is possible, time required, costs, etc.
                    More importantly, our clients can rely on us to help them
                    compare the available options and cut through the medical
                    industry jargon into simpler normal everyday language terms
                    to enable them to best choose which path take.
                </p>
                <button
                    type="button"
                    className="block m-auto align-center text-primary after:content-[''] after:inline-block after:w-[30px] after:h-[30px] after:bg-contain after:align-middle after:bg-ico-blue-arrow after:rotate-[-0deg]"
                >
                    See Less
                </button>
            </LayoutCon>
        </section>
    );
};

export default Consultation;
