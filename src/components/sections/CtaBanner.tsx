"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, Mic, Phone, Sparkles } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "@/components/ui-pro/Reveal";
import { submitContact } from "@/server-fns/contact";

const contactDetails = {
  emails: ["sales@wallacecroft.com", "alvisnjenga@wallacecroft.com", "ndemofrank@wallacecroft.com"],
  phones: [
    ["Kenya", "+254 114 470441"],
    ["Kenya", "+254 710 372157"],
  ],
} as const;
const nairobiImages = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/KICC_Nairobi.jpg?width=1200",
    title: "KICC, Nairobi",
    meta: "Kenyatta International Convention Centre",
    credit: "Photo: Antony Trivet / Wikimedia Commons",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Britam_tower.jpg?width=1200",
    title: "Britam Tower, Nairobi",
    meta: "Upper Hill commercial tower",
    credit: "Photo: Wikimedia Commons",
  },
];
const countryDialOptions = [
  ["KE", "Kenya", "+254"],
  ["AF", "Afghanistan", "+93"],
  ["AL", "Albania", "+355"],
  ["DZ", "Algeria", "+213"],
  ["AS", "American Samoa", "+1-684"],
  ["AD", "Andorra", "+376"],
  ["AO", "Angola", "+244"],
  ["AI", "Anguilla", "+1-264"],
  ["AG", "Antigua and Barbuda", "+1-268"],
  ["AR", "Argentina", "+54"],
  ["AM", "Armenia", "+374"],
  ["AW", "Aruba", "+297"],
  ["AU", "Australia", "+61"],
  ["AT", "Austria", "+43"],
  ["AZ", "Azerbaijan", "+994"],
  ["BS", "Bahamas", "+1-242"],
  ["BH", "Bahrain", "+973"],
  ["BD", "Bangladesh", "+880"],
  ["BB", "Barbados", "+1-246"],
  ["BY", "Belarus", "+375"],
  ["BE", "Belgium", "+32"],
  ["BZ", "Belize", "+501"],
  ["BJ", "Benin", "+229"],
  ["BM", "Bermuda", "+1-441"],
  ["BT", "Bhutan", "+975"],
  ["BO", "Bolivia", "+591"],
  ["BA", "Bosnia and Herzegovina", "+387"],
  ["BW", "Botswana", "+267"],
  ["BR", "Brazil", "+55"],
  ["VG", "British Virgin Islands", "+1-284"],
  ["BN", "Brunei", "+673"],
  ["BG", "Bulgaria", "+359"],
  ["BF", "Burkina Faso", "+226"],
  ["BI", "Burundi", "+257"],
  ["KH", "Cambodia", "+855"],
  ["CM", "Cameroon", "+237"],
  ["CA", "Canada", "+1"],
  ["CV", "Cape Verde", "+238"],
  ["KY", "Cayman Islands", "+1-345"],
  ["CF", "Central African Republic", "+236"],
  ["TD", "Chad", "+235"],
  ["CL", "Chile", "+56"],
  ["CN", "China", "+86"],
  ["CO", "Colombia", "+57"],
  ["KM", "Comoros", "+269"],
  ["CG", "Congo", "+242"],
  ["CD", "Congo, Democratic Republic", "+243"],
  ["CK", "Cook Islands", "+682"],
  ["CR", "Costa Rica", "+506"],
  ["CI", "Cote d'Ivoire", "+225"],
  ["HR", "Croatia", "+385"],
  ["CU", "Cuba", "+53"],
  ["CW", "Curacao", "+599"],
  ["CY", "Cyprus", "+357"],
  ["CZ", "Czech Republic", "+420"],
  ["DK", "Denmark", "+45"],
  ["DJ", "Djibouti", "+253"],
  ["DM", "Dominica", "+1-767"],
  ["DO", "Dominican Republic", "+1-809"],
  ["EC", "Ecuador", "+593"],
  ["EG", "Egypt", "+20"],
  ["SV", "El Salvador", "+503"],
  ["GQ", "Equatorial Guinea", "+240"],
  ["ER", "Eritrea", "+291"],
  ["EE", "Estonia", "+372"],
  ["SZ", "Eswatini", "+268"],
  ["ET", "Ethiopia", "+251"],
  ["FK", "Falkland Islands", "+500"],
  ["FO", "Faroe Islands", "+298"],
  ["FJ", "Fiji", "+679"],
  ["FI", "Finland", "+358"],
  ["FR", "France", "+33"],
  ["GF", "French Guiana", "+594"],
  ["PF", "French Polynesia", "+689"],
  ["GA", "Gabon", "+241"],
  ["GM", "Gambia", "+220"],
  ["GE", "Georgia", "+995"],
  ["DE", "Germany", "+49"],
  ["GH", "Ghana", "+233"],
  ["GI", "Gibraltar", "+350"],
  ["GR", "Greece", "+30"],
  ["GL", "Greenland", "+299"],
  ["GD", "Grenada", "+1-473"],
  ["GP", "Guadeloupe", "+590"],
  ["GU", "Guam", "+1-671"],
  ["GT", "Guatemala", "+502"],
  ["GN", "Guinea", "+224"],
  ["GW", "Guinea-Bissau", "+245"],
  ["GY", "Guyana", "+592"],
  ["HT", "Haiti", "+509"],
  ["HN", "Honduras", "+504"],
  ["HK", "Hong Kong", "+852"],
  ["HU", "Hungary", "+36"],
  ["IS", "Iceland", "+354"],
  ["IN", "India", "+91"],
  ["ID", "Indonesia", "+62"],
  ["IR", "Iran", "+98"],
  ["IQ", "Iraq", "+964"],
  ["IE", "Ireland", "+353"],
  ["IL", "Israel", "+972"],
  ["IT", "Italy", "+39"],
  ["JM", "Jamaica", "+1-876"],
  ["JP", "Japan", "+81"],
  ["JO", "Jordan", "+962"],
  ["KZ", "Kazakhstan", "+7"],
  ["KI", "Kiribati", "+686"],
  ["XK", "Kosovo", "+383"],
  ["KW", "Kuwait", "+965"],
  ["KG", "Kyrgyzstan", "+996"],
  ["LA", "Laos", "+856"],
  ["LV", "Latvia", "+371"],
  ["LB", "Lebanon", "+961"],
  ["LS", "Lesotho", "+266"],
  ["LR", "Liberia", "+231"],
  ["LY", "Libya", "+218"],
  ["LI", "Liechtenstein", "+423"],
  ["LT", "Lithuania", "+370"],
  ["LU", "Luxembourg", "+352"],
  ["MO", "Macau", "+853"],
  ["MG", "Madagascar", "+261"],
  ["MW", "Malawi", "+265"],
  ["MY", "Malaysia", "+60"],
  ["MV", "Maldives", "+960"],
  ["ML", "Mali", "+223"],
  ["MT", "Malta", "+356"],
  ["MH", "Marshall Islands", "+692"],
  ["MQ", "Martinique", "+596"],
  ["MR", "Mauritania", "+222"],
  ["MU", "Mauritius", "+230"],
  ["YT", "Mayotte", "+262"],
  ["MX", "Mexico", "+52"],
  ["FM", "Micronesia", "+691"],
  ["MD", "Moldova", "+373"],
  ["MC", "Monaco", "+377"],
  ["MN", "Mongolia", "+976"],
  ["ME", "Montenegro", "+382"],
  ["MS", "Montserrat", "+1-664"],
  ["MA", "Morocco", "+212"],
  ["MZ", "Mozambique", "+258"],
  ["MM", "Myanmar", "+95"],
  ["NA", "Namibia", "+264"],
  ["NR", "Nauru", "+674"],
  ["NP", "Nepal", "+977"],
  ["NL", "Netherlands", "+31"],
  ["NC", "New Caledonia", "+687"],
  ["NZ", "New Zealand", "+64"],
  ["NI", "Nicaragua", "+505"],
  ["NE", "Niger", "+227"],
  ["NG", "Nigeria", "+234"],
  ["NU", "Niue", "+683"],
  ["KP", "North Korea", "+850"],
  ["MK", "North Macedonia", "+389"],
  ["MP", "Northern Mariana Islands", "+1-670"],
  ["NO", "Norway", "+47"],
  ["OM", "Oman", "+968"],
  ["PK", "Pakistan", "+92"],
  ["PW", "Palau", "+680"],
  ["PS", "Palestine", "+970"],
  ["PA", "Panama", "+507"],
  ["PG", "Papua New Guinea", "+675"],
  ["PY", "Paraguay", "+595"],
  ["PE", "Peru", "+51"],
  ["PH", "Philippines", "+63"],
  ["PL", "Poland", "+48"],
  ["PT", "Portugal", "+351"],
  ["PR", "Puerto Rico", "+1-787"],
  ["QA", "Qatar", "+974"],
  ["RE", "Reunion", "+262"],
  ["RO", "Romania", "+40"],
  ["RU", "Russia", "+7"],
  ["RW", "Rwanda", "+250"],
  ["WS", "Samoa", "+685"],
  ["SM", "San Marino", "+378"],
  ["ST", "Sao Tome and Principe", "+239"],
  ["SA", "Saudi Arabia", "+966"],
  ["SN", "Senegal", "+221"],
  ["RS", "Serbia", "+381"],
  ["SC", "Seychelles", "+248"],
  ["SL", "Sierra Leone", "+232"],
  ["SG", "Singapore", "+65"],
  ["SX", "Sint Maarten", "+1-721"],
  ["SK", "Slovakia", "+421"],
  ["SI", "Slovenia", "+386"],
  ["SB", "Solomon Islands", "+677"],
  ["SO", "Somalia", "+252"],
  ["ZA", "South Africa", "+27"],
  ["KR", "South Korea", "+82"],
  ["SS", "South Sudan", "+211"],
  ["ES", "Spain", "+34"],
  ["LK", "Sri Lanka", "+94"],
  ["BL", "Saint Barthelemy", "+590"],
  ["SH", "Saint Helena", "+290"],
  ["KN", "Saint Kitts and Nevis", "+1-869"],
  ["LC", "Saint Lucia", "+1-758"],
  ["MF", "Saint Martin", "+590"],
  ["PM", "Saint Pierre and Miquelon", "+508"],
  ["VC", "Saint Vincent and the Grenadines", "+1-784"],
  ["SD", "Sudan", "+249"],
  ["SR", "Suriname", "+597"],
  ["SE", "Sweden", "+46"],
  ["CH", "Switzerland", "+41"],
  ["SY", "Syria", "+963"],
  ["TW", "Taiwan", "+886"],
  ["TJ", "Tajikistan", "+992"],
  ["TZ", "Tanzania", "+255"],
  ["TH", "Thailand", "+66"],
  ["TL", "Timor-Leste", "+670"],
  ["TG", "Togo", "+228"],
  ["TK", "Tokelau", "+690"],
  ["TO", "Tonga", "+676"],
  ["TT", "Trinidad and Tobago", "+1-868"],
  ["TN", "Tunisia", "+216"],
  ["TR", "Turkey", "+90"],
  ["TM", "Turkmenistan", "+993"],
  ["TC", "Turks and Caicos Islands", "+1-649"],
  ["TV", "Tuvalu", "+688"],
  ["UG", "Uganda", "+256"],
  ["UA", "Ukraine", "+380"],
  ["AE", "United Arab Emirates", "+971"],
  ["GB", "United Kingdom", "+44"],
  ["US", "United States", "+1"],
  ["UY", "Uruguay", "+598"],
  ["UZ", "Uzbekistan", "+998"],
  ["VU", "Vanuatu", "+678"],
  ["VA", "Vatican City", "+379"],
  ["VE", "Venezuela", "+58"],
  ["VN", "Vietnam", "+84"],
  ["VI", "U.S. Virgin Islands", "+1-340"],
  ["WF", "Wallis and Futuna", "+681"],
  ["YE", "Yemen", "+967"],
  ["ZM", "Zambia", "+260"],
  ["ZW", "Zimbabwe", "+263"],
] as const;
const briefFileAccept = ".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.txt";
const briefFileTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/png",
  "image/jpeg",
  "text/plain",
]);
const briefFileTypeByExtension: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  txt: "text/plain",
};
const maxBriefFileSize = 5 * 1024 * 1024;

function countryFlagUrl(code: string) {
  return `https://flagcdn.com/24x18/${code.toLowerCase()}.png`;
}

function fileExtension(fileName: string) {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

function fileType(file: File) {
  return file.type || briefFileTypeByExtension[fileExtension(file.name)] || "";
}

function encodeBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 32_768;
  let binary = "";

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return btoa(binary);
}

async function readBriefAttachment(file: File) {
  const type = fileType(file);

  if (!briefFileTypes.has(type)) {
    return { ok: false as const, message: "Upload a PDF, Word, Excel, PNG, JPEG, or TXT file." };
  }

  if (file.size <= 0 || file.size > maxBriefFileSize) {
    return { ok: false as const, message: "File must be less than 5 MB." };
  }

  return {
    ok: true as const,
    attachment: {
      name: file.name,
      type,
      size: file.size,
      content: encodeBase64(await file.arrayBuffer()),
    },
  };
}

type CtaBannerProps = {
  showLocationMedia?: boolean;
};

export function CtaBanner({ showLocationMedia = false }: CtaBannerProps) {
  const [selectedCountry, setSelectedCountry] = useState("KE");
  const [selectedBriefFile, setSelectedBriefFile] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [submitMessage, setSubmitMessage] = useState("");
  const submitContactForm = useServerFn(submitContact);
  const selectedDial = countryDialOptions.find(([code]) => code === selectedCountry)?.[2] ?? "+254";
  const source = showLocationMedia ? "contact-page" : "contact-section";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const briefFile = formData.get("briefFile");

    setSubmitState("submitting");
    setSubmitMessage("");

    try {
      const attachment =
        briefFile instanceof File && briefFile.size > 0
          ? await readBriefAttachment(briefFile)
          : undefined;

      if (attachment && !attachment.ok) {
        setSubmitState("error");
        setSubmitMessage(attachment.message);
        return;
      }

      const result = await submitContactForm({
        data: {
          firstName: String(formData.get("firstName") ?? ""),
          lastName: String(formData.get("lastName") ?? ""),
          email: String(formData.get("email") ?? ""),
          phone: `${selectedDial} ${String(formData.get("phone") ?? "")}`.trim(),
          country: selectedCountry,
          company: String(formData.get("company") ?? ""),
          role: String(formData.get("role") ?? ""),
          message: String(formData.get("message") ?? ""),
          source,
          consentContact: formData.get("consentContact") === "on",
          consentMarketing: formData.get("consentMarketing") === "on",
          consentPrivacy: formData.get("consentPrivacy") === "on",
          attachment: attachment?.attachment,
        },
      });

      if (!result.ok) {
        setSubmitState("error");
        setSubmitMessage(result.message ?? "Please check the form and try again.");
        return;
      }

      form.reset();
      setSelectedCountry("KE");
      setSelectedBriefFile("");
      setSubmitState("success");
      setSubmitMessage("Thanks. We received your message and will reply soon.");
    } catch {
      setSubmitState("error");
      setSubmitMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section py-16 text-navy lg:py-20">
      <div className="container-pro">
        {showLocationMedia ? <ContactNairobiMap /> : null}
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <div>
              <div className="text-[10px] font-normal uppercase tracking-[0.18em] text-orange">
                Contact Us
              </div>
              <h2 className="mt-5 max-w-xl font-display text-[2rem] font-normal leading-[1.08] sm:text-[3rem]">
                Let's build what is next.
              </h2>
              <p className="mt-5 max-w-md text-[0.86rem] leading-6 text-navy/68">
                Share the goal. We will reply with a clear first move for scalable digital solutions
                that create lasting impact.
              </p>

              <div className="contact-direct mt-8" aria-label="Direct Wallace Croft contacts">
                <div className="contact-direct__icon" aria-hidden>
                  <Mail className="h-4 w-4" />
                </div>
                <div className="contact-direct__list">
                  {contactDetails.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`}>
                      {email}
                    </a>
                  ))}
                </div>
                <div className="contact-direct__icon" aria-hidden>
                  <Phone className="h-4 w-4" />
                </div>
                <div className="contact-direct__list contact-direct__list--phones">
                  {contactDetails.phones.map(([country, phone]) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`}>
                      <span>{country}</span>
                      <strong>{phone}</strong>
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-avatar mt-10" aria-hidden>
                <div className="contact-avatar__rings" />
                <div className="contact-avatar__body">
                  <div className="contact-avatar__head">
                    <span className="contact-avatar__eye contact-avatar__eye--left" />
                    <span className="contact-avatar__eye contact-avatar__eye--right" />
                    <span className="contact-avatar__mouth" />
                  </div>
                  <div className="contact-avatar__badge">
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>
                <div className="contact-avatar__note contact-avatar__note--one">
                  <Mic className="h-3.5 w-3.5" />
                  Live intake
                </div>
                <div className="contact-avatar__note contact-avatar__note--two">24h reply</div>
              </div>
            </div>
          </Reveal>

          <Reveal i={1}>
            <form className="contact-form" method="post" onSubmit={handleSubmit}>
              <div className="contact-form__grid">
                <label>
                  <span>First Name*</span>
                  <input name="firstName" type="text" required />
                </label>
                <label>
                  <span>Last Name*</span>
                  <input name="lastName" type="text" required />
                </label>
                <label>
                  <span>Email Address*</span>
                  <input name="email" type="email" required />
                </label>
                <label>
                  <span>Phone*</span>
                  <div className="contact-form__phone">
                    <div className="contact-form__country-select">
                      <img
                        className="contact-form__country-flag"
                        src={countryFlagUrl(selectedCountry)}
                        alt=""
                        loading="lazy"
                        aria-hidden
                      />
                      <select
                        value={selectedCountry}
                        onChange={(event) => setSelectedCountry(event.target.value)}
                        aria-label="Country"
                      >
                        {countryDialOptions.map(([code, name]) => (
                          <option key={code} value={code}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <span className="contact-form__dial-code">{selectedDial}</span>
                    <input name="phone" type="tel" aria-label="Phone number" required />
                  </div>
                </label>
                <label>
                  <span>Company Name*</span>
                  <input name="company" type="text" required />
                </label>
                <label>
                  <span>Role*</span>
                  <input name="role" type="text" required />
                </label>
              </div>
              <label className="contact-form__message">
                <span>Give Description*</span>
                <textarea name="message" rows={3} required />
              </label>
              <div className="contact-form__upload">
                <input
                  type="file"
                  id="contact-brief-file"
                  name="briefFile"
                  accept={briefFileAccept}
                  onChange={(event) =>
                    setSelectedBriefFile(event.currentTarget.files?.[0]?.name ?? "")
                  }
                />
                <label htmlFor="contact-brief-file">Choose File</label>
                <span>
                  {selectedBriefFile
                    ? `Selected: ${selectedBriefFile}`
                    : "PDF, Word, Excel, PNG, JPEG, and TXT files with less than 5 MB file size are supported."}
                </span>
              </div>
              <div className="contact-form__checks">
                <label>
                  <input name="consentContact" type="checkbox" />
                  <span>
                    By submitting you acknowledge that your information will be handled with care
                    and may be used to respond to your inquiry.
                  </span>
                </label>
                <label>
                  <input name="consentMarketing" type="checkbox" />
                  <span>
                    By submitting you authorize Wallace Croft to contact you about services, project
                    needs, and related updates.
                  </span>
                </label>
                <label>
                  <input name="consentPrivacy" type="checkbox" />
                  <span>
                    By submitting I agree to the <a href="/privacy-policy">Privacy Policy</a>.
                  </span>
                </label>
              </div>
              {submitMessage ? (
                <p
                  className={`contact-form__status ${submitState === "error" ? "contact-form__status--error" : "contact-form__status--success"}`}
                  role="status"
                  aria-live="polite"
                >
                  {submitMessage}
                </p>
              ) : null}
              <button
                type="submit"
                className="group contact-form__submit"
                disabled={submitState === "submitting"}
              >
                {submitState === "submitting" ? (
                  <>
                    <span className="submit-spinner" aria-hidden />
                    Submitting
                  </>
                ) : (
                  <>
                    Submit <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
        {showLocationMedia ? <ContactNairobiGallery /> : null}
      </div>
    </section>
  );
}

function ContactNairobiMap() {
  return (
    <Reveal className="contact-presence contact-presence--lead">
      <div
        className="contact-presence__map"
        aria-label="Wallace Croft location map showing Nairobi, Kenya"
      >
        <img
          className="contact-presence__world-map"
          src="/world-map-kenya.svg"
          alt="World map with Kenya highlighted orange and Nairobi marked"
        />
      </div>
    </Reveal>
  );
}

function ContactNairobiGallery() {
  return (
    <Reveal i={2} className="contact-presence">
      <div className="contact-presence__gallery">
        {nairobiImages.map((image) => (
          <figure className="contact-presence-card" key={image.title}>
            <img src={image.src} alt={image.title} loading="lazy" />
            <figcaption>
              <strong>{image.title}</strong>
              <span>{image.meta}</span>
              <small>{image.credit}</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </Reveal>
  );
}
