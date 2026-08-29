import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "am";

const en = {
  siteTitle: "Pior Export Import PLC",
  siteDescription:
    "Premium Ethiopian Wollega coffee, natural Afar iodised salt, and trusted medical supplies — supplied to exporters and international markets.",
  brandShort: "Pior",
  home: "Home",
  about: "About",
  products: "Products",
  contact: "Contact",
  getInTouch: "Get in Touch",
  quickLinks: "Quick Links",
  toggleMenu: "Toggle menu",
  languageLabel: "Language",
  english: "English",
  amharic: "Amharic",
  logoAlt: "Pior",
  notFoundTitle: "Page not found",
  notFoundText: "The page you're looking for doesn't exist or has been moved.",
  goHome: "Go home",
  loadErrorTitle: "This page didn't load",
  loadErrorText: "Something went wrong on our end. You can try refreshing or head back home.",
  tryAgain: "Try again",
  heroAlt: "Ethiopian highlands with coffee and salt landscapes",
  heroEyebrow: "Pior Export Import PLC",
  heroTitle: "Supplying Ethiopia’s Finest Coffee and Natural Salt",
  heroText:
    "Empowering farmers and supplying premium Wollega coffee and Afar salt to the whole sale market.",
  viewProducts: "View Products",
  contactUs: "Contact Us",
  whatWeStandFor: "What we stand for",
  coreValues: "Our Core Values",
  coreValuesText:
    "The principles that shape how we work, grow, and build trusted connections across every market.",
  reliability: "Reliability",
  reliabilityText:
    "We strive to be a dependable partner by delivering consistently and managing our commercial and supply-chain responsibilities with care.",
  integrity: "Integrity",
  integrityText:
    "We believe long-term business relationships are built on honesty, professionalism, accountability, and responsible conduct.",
  quality: "Quality",
  qualityText:
    "We seek quality throughout our sourcing, handling, trading, and distribution activities, with standards appropriate to each sector in which we operate.",
  efficiency: "Efficiency",
  efficiencyText:
    "We continuously work to improve our supply chains, logistics, inventory management, and operational processes.",
  partnership: "Partnership",
  partnershipText:
    "We value long-term relationships with suppliers, customers, and business partners and believe that sustainable growth is built through mutual success.",
  adaptability: "Adaptability",
  adaptabilityText:
    "Our multi-sector experience allows us to respond to changing markets and explore new opportunities while building on the capabilities we have already developed.",
  responsibleGrowth: "Responsible Growth",
  responsibleGrowthText:
    "We pursue expansion with careful planning, disciplined operations, and a focus on creating sustainable commercial value.",
  discoverProducts: "Discover Our Premium Products",
  discoverProductsText:
    "Explore our special aroma commercial coffee, natural Afar salt, and medical imports.",
  viewAllProducts: "View All Products",
  learnMore: "Learn more",
  coffeeTitle: "Wollega Coffee",
  coffeeDescription: "100% Arabica, hand-sorted green beans from Qelem Wollega collection centres.",
  coffeeAlt: "Premium Wollega coffee beans in a burlap sack",
  saltTitle: "Afar Natural Salt",
  saltDescription:
    "Natural iodised salt from the Afar region, rich in minerals and free from artificial additives.",
  saltAlt: "Natural Afar salt mounds at sunset",
  medicalTitle: "Medical Supplies",
  medicalDescription:
    "Trusted importer of medicines and medical devices for clinics, hospitals, and healthcare partners.",
  medicalAlt: "Medical devices and healthcare supplies",
  whyPartner: "Why Partner With Pior?",
  whyPartnerText:
    "From highland coffee farms to Afar salt flats and trusted medical manufacturers, we manage every link in the supply chain with integrity and precision.",
  directSourcing: "Direct Sourcing",
  directSourcingText: "We work with coffee collection centres and salt producers across Ethiopia.",
  qualityAssured: "Quality Assured",
  qualityAssuredText: "Every batch is inspected for consistency, purity, and export readiness.",
  globalReach: "Global Reach",
  globalReachText:
    "We serve exporters, distributors, and international buyers with reliable logistics.",
  coffeeImageAlt: "Premium Ethiopian coffee beans",
  readyToSource: "Ready to Source Premium Ethiopian Products?",
  readyToSourceText:
    "Get in touch with our team to discuss export quantities, specifications, and delivery options.",
  exploreProducts: "Explore Products",
  aboutTitle: "About Pior Export Import PLC",
  aboutSubtitle: "Our History, Mission & Vision",
  ourHistory: "Our History",
  heritageTitle: "Built on Ethiopian Heritage",
  heritageText:
    "From a focused trading company to a growing multi-sector enterprise, every step has strengthened the way PIOR connects products, people, and markets.",
  beganYear: "2013 E.C. / July 2021 G.C.",
  beganTitle: "Where it began",
  beganText:
    "PIOR Export Import PLC began its journey as a multi-sector commercial enterprise within Ethiopia's trading environment.",
  growingExperience: "Growing experience",
  foundationTitle: "Building the foundation",
  foundationText:
    "We developed practical experience across coffee export supply chains, edible salt wholesale trade, logistics, and commercial distribution.",
  todayBeyond: "Today and beyond",
  expandingTitle: "Expanding with purpose",
  expandingText:
    "Our strong foundation in supply-chain execution, financial discipline, operations, and relationships now supports pharmaceutical importation and wholesale distribution.",
  whatGuidesUs: "What guides us",
  purposeTitle: "Purpose with a pulse.",
  purposeText: "Choose a pillar to see the principles behind every shipment and relationship.",
  ourMission: "Our Mission",
  missionTab: "Mission",
  missionTitle: "Connecting markets with purpose",
  missionText:
    "PIOR's mission is to connect markets through reliable trade, responsible sourcing, efficient supply chains, and long-term commercial partnerships.",
  missionPoints: "Reliable trade|Responsible sourcing|Efficient supply chains",
  missionDetail:
    "We seek to create value across coffee export, salt wholesale, and our growing pharmaceutical activities. As we grow, we remain centered on responsible business, sustainable value creation, and trusted connections between suppliers, businesses, and markets.",
  visionTab: "Vision",
  visionLabel: "Where we are going",
  visionTitle: "A trusted global name",
  visionText:
    "PIOR's vision is to become a trusted and diversified Ethiopian commercial enterprise, recognized for reliable trade, responsible supply chains, strong partnerships, and sustainable growth.",
  visionPoints: "Coffee export|Salt wholesale|Pharmaceuticals",
  visionDetail:
    "By developing our people, partnerships, infrastructure, and supply-chain capabilities, we connect Ethiopian and international markets.",
  ourDirection: "Our direction",
  alwaysForward: "Always moving forward",
  people: "People",
  partnerships: "Partnerships",
  markets: "Markets",
  moreProducts: "Want to learn more about our products?",
  moreProductsText:
    "Discover the full range of Wollega coffee, Afar salt, and medical supplies we offer to our customers.",
  productsTitle: "Our Products",
  productsSubtitle: "Premium Ethiopian exports and trusted medical imports",
  highLandCoffee: "High Land Commercial Coffee",
  wollegaOrigin: "Wollega Origin Coffee",
  wollegaText:
    "We supply premium Ethiopian coffee sourced from the Wollega region, known for its distinctive rich flavor, full body, and exceptional quality. Our coffee is carefully selected and processed to preserve its authentic Ethiopian character.",
  wollegaAlt: "Wollega coffee beans",
  wollegaFeatures:
    "Direct from coffee collection centres in Qelem Wollega|100% Arabica and hand-sorted|Available as green beans for export|Rich flavor, full body, and complex notes",
  naturalSalt: "Natural Salt",
  afarSaltTitle: "Natural Iodised Afar Salt",
  afarSaltText:
    "Our natural iodised salt is sourced from the Afar region, an area renowned for traditional salt harvesting methods that date back centuries. The salt is carefully hand-harvested and processed to maintain its purity and natural mineral composition.",
  afarSaltAlt: "Natural Afar salt mounds in Ethiopia",
  afarFeatures:
    "Sourced from the Afar region, Ethiopia|Rich in essential minerals|Free from artificial additives|Unique texture and flavor profile",
  productionStorage: "Production & Storage",
  producer: "Producer",
  producerValue: "Sino Salt PLC and other manufacturers",
  warehouse: "Warehouse",
  warehouseValue: "Sheger City, Burayu, Ashewa Meda, Block 8, Shade No. 238",
  medicalSupplies: "Medical Supplies",
  medicineTitle: "Medicine & Medical Device Imports",
  medicineText:
    "We import quality-assured medicines from qualified international suppliers and distribute them reliably to healthcare providers, pharmacies, and wholesalers across Ethiopia",
  medicalAltFull: "Medical devices and healthcare supplies",
  medicalFeatures:
    "Trusted medical device sourcing|Compliant import procedures|Reliable supply for clinics and hospitals|Focus on quality and patient safety",
  bulkTitle: "Interested in bulk supply or export orders?",
  bulkText:
    "Contact us for product specifications, quantities, pricing, and shipping arrangements.",
  requestQuote: "Request a Quote",
  contactTitle: "Contact Us",
  contactSubtitle: "We’d love to hear from you. Reach out for supply and export orders.",
  getInTouchTitle: "Get in Touch",
  getInTouchText:
    "Our team is ready to answer all your questions and provide the information you need. Contact us via email, phone, or visit our office.",
  email: "Email",
  mobile: "Mobile",
  landline: "Landline",
  officeLocation: "Office Location",
  officeAddress: "Kazanches, Elilly International Hotel Second Floor, Addis Ababa, Ethiopia",
  sendInquiry: "Send an Inquiry",
  inquiryText: "Fill out the form below and we will respond as soon as possible.",
  coffeeSalt: "Coffee & salt",
  medicalInquiry: "Medical supplies",
  inquiryPartnership: "Partnership",
  name: "Name",
  yourName: "Your name",
  emailPlaceholder: "you@example.com",
  subject: "Subject",
  productInquiry: "Product inquiry",
  message: "Message",
  messagePlaceholder: "Tell us about your requirements...",
  sendMessage: "Send Message",
  sending: "Sending...",
  sentSuccess: "Thank you. Your inquiry has been sent successfully.",
  sendError: "We could not send your inquiry. Please try again.",
  findUs: "Find Us",
  mapAddress: "Kazanches, Elilly International Hotel, Second Floor, Addis Ababa, Ethiopia",
  openMaps: "Open in Google Maps",
  mapTitle: "Pior Export Import PLC office location — Elilly International Hotel, Addis Ababa",
  officeHours: "Office Hours",
  weekdayHours: "Monday — Friday: 8:30 AM – 5:30 PM (EAT)",
  weekendHours: "Saturday: 9:00 AM – 1:00 PM (EAT) | Sunday: Closed",
  footerText:
    "Supplying Ethiopia’s finest Wollega coffee, natural Afar salt, and quality medical products to the world.",
  contact: "Contact",
  rights: "All rights reserved.",
} as const;

const amOverrides = {
  whyPartner: "ለምን ከፒዮር ጋር አጋር ይሆናሉ?",
  whyPartnerText:
    "ከደጋማ የቡና እርሻዎች እስከ የአፋር ጨው ሜዳዎች እና የታመኑ የህክምና አምራቾች ድረስ፣ በአቅርቦት ሰንሰለቱ ያለውን እያንዳንዱን አገናኝ በታማኝነት እና በትክክለኛነት እንመራለን።",
  directSourcing: "ቀጥተኛ ምንጭ አቅርቦት",
  directSourcingText: "በመላው ኢትዮጵያ ከቡና ማሰባሰቢያ ማዕከላት እና ከጨው አምራቾች ጋር እንሰራለን።",
  qualityAssured: "የተረጋገጠ ጥራት",
  qualityAssuredText: "እያንዳንዱ ምርት ለቋሚነት፣ ለንጽህና እና ለኤክስፖርት ዝግጁነት ይመረመራል።",
  globalReach: "ዓለም አቀፍ ተደራሽነት",
  globalReachText: "ለኤክስፖርተሮች፣ ለአከፋፋዮች እና ለዓለም አቀፍ ገዢዎች ታማኝ ሎጂስቲክስ እናቀርባለን።",
  coffeeImageAlt: "ምርጥ የኢትዮጵያ የቡና ፍሬዎች",
  readyToSource: "ምርጥ የኢትዮጵያ ምርቶችን ለማግኘት ዝግጁ ነዎት?",
  readyToSourceText: "ስለ ኤክስፖርት መጠን፣ ዝርዝሮች እና የማድረስ አማራጮች ከቡድናችን ጋር ይነጋገሩ።",
  exploreProducts: "ምርቶችን ይመርምሩ",
  aboutTitle: "ስለ ፒዮር ኤክስፖርት ኢምፖርት",
  aboutSubtitle: "ታሪካችን፣ ተልዕኮአችን እና ራዕያችን",
  ourHistory: "ታሪካችን",
  heritageTitle: "በኢትዮጵያዊ ቅርስ ላይ የተገነባ",
  heritageText:
    "ከትንሽ የንግድ ድርጅት ወደ እያደገ ያለ የብዙ ዘርፍ ድርጅት፣ እያንዳንዱ እርምጃ ምርቶችን፣ ሰዎችን እና ገበያዎችን የምናገናኝበትን መንገድ አጠናክሯል።",
  beganYear: "2013 ዓ.ም. / ጁላይ 2021 ዓ.ም.",
  beganTitle: "መነሻው",
  beganText: "ፒዮር ኤክስፖርት ኢምፖርት በኢትዮጵያ የንግድ አካባቢ ውስጥ እንደ ብዙ ዘርፍ የንግድ ድርጅት ጉዞውን ጀመረ።",
  growingExperience: "የተጠናከረ ልምድ",
  foundationTitle: "መሠረቱን መገንባት",
  foundationText: "በቡና ኤክስፖርት አቅርቦት፣ በምግብ ጨው ጅምላ ንግድ፣ በሎጂስቲክስ እና በስርጭት ተግባራዊ ልምድ አዳበርን።",
  todayBeyond: "ዛሬ እና ወደፊት",
  expandingTitle: "በዓላማ ማስፋፋት",
  expandingText:
    "በአቅርቦት ሰንሰለት፣ በገንዘብ አስተዳደር፣ በስራ አመራር እና በግንኙነት የገነባነው መሠረት የመድሃኒት ማስገባትን እና ጅምላ ስርጭትን ይደግፋል።",
  whatGuidesUs: "የሚመሩን እሴቶች",
  purposeTitle: "ዓላማ ያለው ጉዞ",
  purposeText: "ከእያንዳንዱ ጭነት እና ግንኙነት ጀርባ ያሉትን መርሆች ለማየት አንዱን እሴት ይምረጡ።",
  ourMission: "ተልዕኮአችን",
  missionTab: "ተልዕኮ",
  missionTitle: "ገበያዎችን በዓላማ ማገናኘት",
  missionText:
    "የፒዮር ተልዕኮ ገበያዎችን በታማኝ ንግድ፣ በኃላፊነት ያለው ምንጭ አቅርቦት፣ በቀልጣፋ አቅርቦት ሰንሰለት እና በረጅም ጊዜ አጋርነት ማገናኘት ነው።",
  missionPoints: "ታማኝ ንግድ|ኃላፊነት ያለው ምንጭ አቅርቦት|ቀልጣፋ አቅርቦት ሰንሰለት",
  missionDetail: "በቡና ኤክስፖርት፣ በጨው ጅምላ ንግድ እና በሚያድገው የመድሃኒት ስራችን ዋጋ ለመፍጠር እንጥራለን።",
  visionTab: "ራዕይ",
  visionLabel: "የምንሄድበት አቅጣጫ",
  visionTitle: "የታመነ ዓለም አቀፍ ስም",
  visionText:
    "የፒዮር ራዕይ በታማኝ ንግድ፣ በኃላፊነት ያለው አቅርቦት፣ በጠንካራ አጋርነት እና በዘላቂ እድገት የሚታወቅ የታመነ የኢትዮጵያ የንግድ ድርጅት መሆን ነው።",
  visionPoints: "የቡና ኤክስፖርት|የጨው ጅምላ ንግድ|መድሃኒቶች",
  visionDetail:
    "ሰዎቻችንን፣ አጋርነታችንን፣ መሠረተ ልማታችንን እና የአቅርቦት አቅማችንን በማዳበር የኢትዮጵያን እና የዓለም አቀፍ ገበያዎችን እናገናኛለን።",
  ourDirection: "አቅጣጫችን",
  alwaysForward: "ሁሌም ወደፊት",
  people: "ሰዎች",
  partnerships: "አጋርነቶች",
  markets: "ገበያዎች",
  moreProducts: "ስለ ምርቶቻችን ተጨማሪ ማወቅ ይፈልጋሉ?",
  moreProductsText: "ለደንበኞቻችን የምናቀርበውን የወለጋ ቡና፣ የአፋር ጨው እና የህክምና እቃዎች ሙሉ ክልል ይመልከቱ።",
  productsTitle: "ምርቶቻችን",
  productsSubtitle: "ምርጥ የኢትዮጵያ ኤክስፖርቶች እና የታመኑ የህክምና እቃዎች",
  highLandCoffee: "የደጋ የንግድ ቡና",
  wollegaOrigin: "የወለጋ መነሻ ቡና",
  wollegaText: "ከወለጋ ክልል የሚመነጭ ምርጥ የኢትዮጵያ ቡናን እናቀርባለን።",
  wollegaAlt: "የወለጋ የቡና ፍሬዎች",
  wollegaFeatures:
    "በቀጥታ ከቀለም ወለጋ ማሰባሰቢያ ማዕከላት|100% አረቢካ እና በእጅ የተመረጠ|ለኤክስፖርት እንደ አረንጓዴ ፍሬ|የበለጸገ ጣዕም እና ሙሉ አካል",
  naturalSalt: "የተፈጥሮ ጨው",
  afarSaltTitle: "የተፈጥሮ አዮዳይዝድ የአፋር ጨው",
  afarSaltText: "የተፈጥሮ አዮዳይዝድ ጨዋችን ከአፋር ክልል የሚመነጭ ሲሆን በባህላዊ የጨው አሰባሰብ ዘዴዎች ይመረታል።",
  afarSaltAlt: "የተፈጥሮ የአፋር ጨው ክምር",
  afarFeatures: "ከአፋር ክልል የተገኘ|አስፈላጊ ማዕድናት የበለጸገ|ከሰው ሰራሽ ተጨማሪዎች ነፃ|ልዩ ገጽታ እና ጣዕም",
  productionStorage: "ምርት እና ማከማቻ",
  producer: "አምራች",
  producerValue: "ሲኖ ሳልት ኃ.የተ.የግ. እና ሌሎች አምራቾች",
  warehouse: "መጋዘን",
  warehouseValue: "ሸገር ከተማ፣ ቡራዩ፣ አሸዋ ሜዳ፣ ብሎክ 8፣ ሼድ ቁጥር 238",
  medicalSupplies: "የህክምና እቃዎች",
  medicineTitle: "የመድሃኒት እና የህክምና መሳሪያ ማስገባት",
  medicineText:
    "ጥራት ያላቸውን መድሃኒቶች ከብቁ ዓለም አቀፍ አቅራቢዎች በማስገባት ለጤና ተቋማት፣ ለፋርማሲዎች እና ለጅምላ ነጋዴዎች እናሰራጫለን።",
  medicalAltFull: "የህክምና መሳሪያዎችና እቃዎች",
  medicalFeatures:
    "የታመነ የህክምና መሳሪያ ምንጭ|የተሟሉ የማስገባት ሂደቶች|ለክሊኒኮችና ሆስፒታሎች ታማኝ አቅርቦት|በጥራትና በታካሚ ደህንነት ላይ ትኩረት",
  bulkTitle: "የጅምላ አቅርቦት ወይም የኤክስፖርት ትዕዛዝ ይፈልጋሉ?",
  bulkText: "ስለ ምርት ዝርዝሮች፣ መጠኖች፣ ዋጋ እና የመላኪያ ዝግጅቶች ያግኙን።",
  requestQuote: "ዋጋ ይጠይቁ",
  contactTitle: "ያግኙን",
  contactSubtitle: "ከእርስዎ መስማት እንወዳለን። ስለ አቅርቦት እና ኤክስፖርት ትዕዛዞች ያነጋግሩን።",
  getInTouchTitle: "ያግኙን",
  getInTouchText: "ቡድናችን ጥያቄዎችዎን ሁሉ ለመመለስ ዝግጁ ነው። በኢሜይል፣ በስልክ ያግኙን ወይም ቢሮአችንን ይጎብኙ።",
  email: "ኢሜይል",
  mobile: "ሞባይል",
  landline: "የቢሮ ስልክ",
  officeLocation: "የቢሮ አድራሻ",
  officeAddress: "ቃዛንቺስ፣ ኤሊሊ ኢንተርናሽናል ሆቴል ሁለተኛ ፎቅ፣ አዲስ አበባ፣ ኢትዮጵያ",
  sendInquiry: "ጥያቄ ይላኩ",
  inquiryText: "ከታች ያለውን ቅጽ ይሙሉ፤ በተቻለ ፍጥነት እንመልስልዎታለን።",
  coffeeSalt: "ቡና እና ጨው",
  medicalInquiry: "የህክምና እቃዎች",
  inquiryPartnership: "አጋርነት",
  name: "ስም",
  yourName: "ስምዎ",
  emailPlaceholder: "you@example.com",
  subject: "ርዕስ",
  productInquiry: "የምርት ጥያቄ",
  message: "መልዕክት",
  messagePlaceholder: "ስለ ፍላጎትዎ ይንገሩን...",
  sendMessage: "መልዕክት ይላኩ",
  sending: "በመላክ ላይ...",
  sentSuccess: "እናመሰግናለን። ጥያቄዎ በተሳካ ሁኔታ ተልኳል።",
  sendError: "ጥያቄዎን መላክ አልተቻለም። እባክዎ እንደገና ይሞክሩ።",
  findUs: "ያግኙን",
  mapAddress: "ቃዛንቺስ፣ ኤሊሊ ኢንተርናሽናል ሆቴል፣ ሁለተኛ ፎቅ፣ አዲስ አበባ፣ ኢትዮጵያ",
  openMaps: "በጎግል ካርታ ይክፈቱ",
  mapTitle: "የፒዮር ቢሮ አድራሻ — ኤሊሊ ኢንተርናሽናል ሆቴል፣ አዲስ አበባ",
  officeHours: "የቢሮ ሰዓት",
  weekdayHours: "ሰኞ — አርብ፦ 8:30 ጥዋት – 5:30 ማታ (EAT)",
  weekendHours: "ቅዳሜ፦ 9:00 ጥዋት – 1:00 ከሰዓት (EAT) | እሁድ፦ ዝግ ነው።",
  footerText: "የኢትዮጵያን ምርጥ የወለጋ ቡና፣ የአፋር የተፈጥሮ ጨው እና ጥራት ያላቸው የህክምና ምርቶችን ለዓለም እናቀርባለን።",
  rights: "መብቶች በሙሉ የተጠበቁ ናቸው።",
} as const;

type TranslationKey = keyof typeof en;
const am: Record<TranslationKey, string> = {
  ...en,
  ...amOverrides,
  siteTitle: "ፒዮር ኤክስፖርት ኢምፖርት ኃ.የተ.የግ.",
  siteDescription: "ከፍተኛ ጥራት ያለው የኢትዮጵያ ወለጋ ቡና፣ የአፋር የተፈጥሮ አዮዳይዝድ ጨው እና የህክምና እቃዎች።",
  brandShort: "ፒዮር",
  home: "መነሻ",
  about: "ስለ እኛ",
  products: "ምርቶች",
  contact: "ያግኙን",
  getInTouch: "ያግኙን",
  quickLinks: "ፈጣን አገናኞች",
  toggleMenu: "ምናሌን ክፈት/ዝጋ",
  languageLabel: "ቋንቋ",
  english: "እንግሊዝኛ",
  amharic: "አማርኛ",
  logoAlt: "ፒዮር",
  notFoundTitle: "ገጹ አልተገኘም",
  notFoundText: "የሚፈልጉት ገጽ የለም ወይም ተንቀሳቅሷል።",
  goHome: "ወደ መነሻ ይሂዱ",
  loadErrorTitle: "ይህ ገጽ አልተከፈተም",
  loadErrorText: "በእኛ በኩል ችግር ተፈጥሯል። እንደገና ይሞክሩ ወይም ወደ መነሻ ይመለሱ።",
  tryAgain: "እንደገና ይሞክሩ",
  heroEyebrow: "ፒዮር ኤክስፖርት ኢምፖርት",
  heroTitle: "የኢትዮጵያን ምርጥ ቡና እና የተፈጥሮ ጨው እናቀርባለን",
  heroText: "አርሶ አደሮችን በማብቃት የወለጋ ቡናን እና የአፋር ጨውን ለጅምላ ገበያ እናቀርባለን።",
  viewProducts: "ምርቶችን ይመልከቱ",
  contactUs: "ያግኙን",
  whatWeStandFor: "የምንመራባቸው መርሆች",
  coreValues: "ዋና እሴቶቻችን",
  coreValuesText: "በሁሉም ገበያዎች የምንሰራበትን፣ የምናድግበትን እና የምንገነባቸውን የታመኑ ግንኙነቶች የሚመሩ መርሆች።",
  reliability: "ተዓማኒነት",
  reliabilityText: "በቋሚነት በማቅረብ እና የንግድና የአቅርቦት ሰንሰለት ኃላፊነቶቻችንን በጥንቃቄ በመወጣት የታመነ አጋር ለመሆን እንጥራለን።",
  integrity: "ታማኝነት",
  integrityText: "ዘላቂ የንግድ ግንኙነቶች በታማኝነት፣ በሙያዊነት፣ በተጠያቂነት እና በኃላፊነት ላይ ይገነባሉ ብለን እናምናለን።",
  quality: "ጥራት",
  qualityText: "በምንጭ አቅርቦት፣ በአያያዝ፣ በንግድ እና በስርጭት ሂደቶቻችን ሁሉ ጥራትን እንከተላለን።",
  efficiency: "ቅልጥፍና",
  efficiencyText: "የአቅርቦት ሰንሰለቶቻችንን፣ ሎጂስቲክስን፣ የእቃ አስተዳደርን እና የስራ ሂደቶችን ለማሻሻል በቀጣይነት እንሰራለን።",
  partnership: "አጋርነት",
  partnershipText: "ከአቅራቢዎች፣ ከደንበኞች እና ከንግድ አጋሮች ጋር ዘላቂ ግንኙነትን እንመለከታለን።",
  adaptability: "መላመድ",
  adaptabilityText: "የብዙ ዘርፍ ልምዳችን ለተለዋዋጭ ገበያዎች ምላሽ እንድንሰጥ እና አዳዲስ እድሎችን እንድንመረምር ያስችለናል።",
  responsibleGrowth: "ኃላፊነት ያለው እድገት",
  responsibleGrowthText: "በጥንቃቄ እቅድ፣ በተደራጀ አሰራር እና ዘላቂ የንግድ ዋጋ ላይ በማተኮር እንሰፋለን።",
  discoverProducts: "ምርጥ ምርቶቻችንን ያግኙ",
  discoverProductsText: "ልዩ ጣዕም ያለውን የንግድ ቡና፣ የአፋር የተፈጥሮ ጨው እና የህክምና ምርቶችን ይመልከቱ።",
  viewAllProducts: "ሁሉንም ምርቶች ይመልከቱ",
  learnMore: "ተጨማሪ ይወቁ",
  coffeeTitle: "የወለጋ ቡና",
  coffeeDescription: "100% አረቢካ፣ በእጅ የተመረጠ አረንጓዴ ቡና ከቀለም ወለጋ ማሰባሰቢያ ማዕከላት።",
  saltTitle: "የአፋር የተፈጥሮ ጨው",
  saltDescription: "ከማዕድናት የበለጸገ እና ከሰው ሰራሽ ተጨማሪዎች ነፃ የተፈጥሮ አዮዳይዝድ ጨው።",
  medicalTitle: "የህክምና እቃዎች",
  medicalDescription: "ለክሊኒኮች፣ ለሆስፒታሎች እና ለጤና አጋሮች የሚቀርቡ የታመኑ መድሃኒቶችና የህክምና መሳሪያዎች።",
  coffeeAlt: "በከረጢት ውስጥ ያሉ ምርጥ የወለጋ የቡና ፍሬዎች",
  saltAlt: "በፀሐይ መጥለቂያ የሚታዩ የአፋር ጨው ክምር",
  medicalAlt: "የህክምና መሳሪያዎችና እቃዎች",
} as const;

export const translations = { en, am };

export function getTranslation(language: Language, key: TranslationKey): string {
  return translations[language][key];
}

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    if (typeof window !== "undefined") window.localStorage.setItem("pior-language", nextLanguage);
  };
  useEffect(() => {
    const saved = window.localStorage.getItem("pior-language");
    if (saved === "en" || saved === "am") setLanguageState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  return createElement(
    LanguageContext.Provider,
    { value: { language, setLanguage, t: (key) => getTranslation(language, key) } },
    children,
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
