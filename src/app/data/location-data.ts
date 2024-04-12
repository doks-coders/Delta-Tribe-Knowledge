import { ContentItem } from "../models/display-content";

let data:ContentItem []= [
{
  name: "Urhobo",
  imageUrl:"assets/urhobo.jpg",
  basicInformation: `The Ughelli and Agbon Kingdoms are the oldest kingdoms in Urhoboland. The Ughelli and Agbon Kingdoms can be traced to about the 14th century.[5] Ughelli oral tradition has it that the great ancestor and founding father of Ughelli (Ughene) is the second son of Oghwoghwa, a prince from Benin Kingdom.[6] The Okpe Kingdom is also one of the twenty four kingdoms in Urhobo land.[4] The Kingdom has been in existence since before the arrival of the Portuguese in the 15th century. The Okpe Kingdom was established formally in the 17th century.[7] The Okpe people are known to have migrated to found the present day Sapele and the Orodje of Okpe still exercises authority over the land of Sapele.[8]
  Urhobo territory consists of evergreen forests with many oil palm trees. The territory is covered by a network of streams, whose volume and flow are directly affected by the seasons. The wet season is traditionally from April to October, while the dry season ranges from November to March.`,
  location: `he Urhobo people live in a territory bounded by latitudes 6° and 5°, 15° North and Longitudes 5°, 40° and 6°, 25° East[clarification needed] in the Delta and Bayelsa States of Nigeria. Their neighbors are the Isoko to the southeast, the Itsekiri and Ijaw to the west, the Bini to the north, the Ijaw to the south and the Ukwuani people to the northeast.[4]`,
  language: "Urhobo Language",
  population: "The ethnic population is approximately 1.2 million"
},
{
  name: "Anioma",
  imageUrl:"assets/anioma.jpg",
  basicInformation: `Anioma people can be found in present day Delta State, Nigeria. They encompass the communities which span across the 9 northeastern Local Government Areas of Delta State. They occupy the Delta North Senatorial District, which consists of the Enuani (Oshimili/ Aniocha), and Ukwuani/ Ndokwa and Ika geographical and linguistic zones of Delta State.
  Anioma means "Good Land"and it is an acronym derived from the Local Government in Delta North district namely Aniocha, Ndokwa, Ika and Oshimili, however "MA" is added to give the acronym meaning and wholeness.`,
  location: `The Anioma are located on the floodplains and hills of the West Basin of Niger River within the present Delta state of Nigeria, it encompasses a land mass of about 6,300 km2 [citation needed]. Politically, Anioma is often referred to as Delta North, as against the other peoples known as the Delta South and Delta Central in the same state. Anioma is bounded on the East by Anambra State, south-east by Imo and Rivers States, south Bayelsa State, south-west by Isoko, west by Urhobo people, north-west by Edo State and north by Kogi State. Anioma may therefore be regarded as highly contiguous to very many neighbours ethnic groups`,
  language: `Anioma people speak Igbo language with different dialects. These dialects include the Enuani dialect spoken in Ibusa, Ogwashi-Uku, Asaba, parts of Igbodo, Illah, Issele, Idumuje, Onicha etc.), the Ika dialect (Agbor, Umunede, Owa etc.) with heavy influence from the Bini language. Ukwuani-Aboh dialect of the Ukwuani-Aboh-Ndoni cluster mostly spoken by the peoples of Ndokwa.`,
  population: "An ancient and industrious nation, Anioma is estimated to have a total population of approximately 1.8 million people."
},
{
    name:"Isoko",
    imageUrl:"assets/isoko.jpg",
    basicInformation:`Isoko people are an ethnolinguistic group who inhabit the Isoko region of Delta State and Bayelsa State, Nigeria.[2] They are people of southern Nigeria, near the northwestern Niger delta.[3] Delta State and Bayelsa State are part of the 36 states of the Federal Republic of Nigeria.
    The Isoko culture is related to several cultures in the Niger-Delta - namely, Urhobo, Ijaw and Anioma.[1] Urhobo are related in language and culture, leading to the invaders erroneously labelling the Urhobo and Isoko cultural groups as Sobo.[4] This name was strongly rejected by both tribes.[6][7]
    The Isoko ethnic group consist of nineteen clans ,namely: Uzere, Ozoro, Erowha, Owhe, Iyede, Okpe, Emede, Igbide, Emevor, Ofagbe, Ellu, Oyede, Umeh, Irri, Aviara, Olomoro, Enwhe, Okpolo and Oleh.[8]`,
    location:"They inhabit the Isoko region of Delta State and Bayelsa State, Nigeria",
    language:`The Isokos speak the Isoko language, a language of the Kwa branch of the Niger-Congo family[4] which is also very linguistically similar to the Urhobo language, Epie-Atissa language, Engenni language`,
    population:"The ethnic population is approximately 1.3 million"
},
{
    name:"Uvwie",
    imageUrl:"assets/uvwie.jpg",
    basicInformation:`The introduction of British colonialism in the late nineteenth century made Uvwie to become part of modern-day Nigeria which was created by the amalgamation of the Protectorates of Northern and Southern Nigeria in 1914. Since then foreign cultural pins like changes in the system of governance, dress codes, diets, Uvwie traditional architecture, economic activities and language have been inserted in the traditional culture. In response, the Uvwie traditional culture has strived to be assertive, on the one hand, and accepted to be an undercurrent, on the other hand.

    Uvwie was a clan until 1954 when it became a Kingdom with the introduction of monarchy and Johnson Ejuvwiekoko Edjekohwo Eruohwo was crowned as Eruphwo II, the Ovie of Uvwie Kingdom on 1 December 1954. Political reforms have also made Uvwie a Local Government in the Delta State of Nigeria. Uvwie is being governed by the government of Delta State, the Uvwie Local Government, and the Uvwie Monarchy which is responsible for the traditional governance of the Uvwie Kingdom subject to the constitution of Nigeria and other laws.[7]`,
    location:`Uvwie is bounded by Okpe to the North, Udu to the South, Warri South to the West, Ughelli North to the East and Ughelli South to the South Eastern axis.`,
    language:"The metropolitan area is known nationwide for its unique form of Pidgin, the Warri Pidgin[6]    ",
    population:"The population is approximately 258,700"
},
{
    name:"Itsekiri",
    imageUrl:"assets/itsekiri.jpeg",
    basicInformation:`The Itsekiri (also called the Isekiri, iJekri, Itsekri, Ishekiri, or Itsekhiri) are one of the Yoruboid subgroup of Nigeria's Niger Delta area, They speak a Yoruboid language and can be found in Delta State.[2] The Itsekiris presently number 2.7 million people and live mainly in the Warri South, Warri North and Warri South West local government districts of Delta State on the Atlantic coast of Nigeria. Significant communities of Itsekiris can be found in parts of Edo and Ondo states and in various other Nigerian cities including Lagos, Benin City, Port Harcourt and Abuja. Many people of Itsekiri descent also reside in the United Kingdom, the United States and Canada. The Itsekiris are closely related to the Yoruba of South Western Nigeria and also close to the Okpe people and Edo peoples.[3] The Itsekiris traditionally refer to their land as the Kingdom of Warri or 'Iwere' as its proper name – which is geographically contiguous to the area covered by the three Warri local government districts. The area is a key centre of Nigeria's crude oil and natural gas production and petroleum refining and the main town Warri (a multi-ethnic metropolis) forms the industrial and commercial nucleus of the Delta State region.[4]
    `,
    location:" They live mainly in the Warri South, Warri North and Warri South West local government districts of Delta State on the Atlantic coast of Nigeria",
    language:"Itsekiri Language",
    population:"The ethnic population is approximately 2.7 million"
},
{
    name:"Ika",
    imageUrl:"assets/ika.jpg",
    basicInformation:`The Ika people are an Ethnic group that is found primarily in Areas of Delta State, Nigeria. These people can be found in Ika South and Ika North East Local Government Areas of Delta State, and in Igbanke and Ekpon areas of Orhiomwon, Uhunmwonde, and Igueben Local Government Areas, respectively, of Edo State.
    They speak the Ika language Onu IKA Nigeria is the mouthpiece of IKA nation `,
    location:"These people can be found in Ika South and Ika North East Local Government Areas of Delta State, and in Igbanke and Ekpon areas of Orhiomwon, Uhunmwonde, and Igueben Local Government Areas, respectively, of Edo State",
    language:"Ika language",
    population:"600,000"
},
{
    name:"Ijaw",
    imageUrl:"assets/Ijaw.jpg",
    basicInformation:
    `
    The Izon People have lived in the Niger Delta region since before the fifth millennium BCE, and they were able to keep a separate identity because they lived where the agriculturally dependent Benue-Kwa groups were unable to penetrate. Some of the earliest archeological findings of Ijaw tribes have been dated to as far back as the early 800s BCE.[15] The timeline that the archaeological excavations provide offers about 3,000 years of evidence of Ijaw history and presence in the Niger Delta.
    
    There has been much argument about which tribe in Nigeria is the oldest. The Ijaws started inhabiting the Niger Delta region of what is now Nigeria as far back as 800 BCE,[16] thus making them one of the world's most ancient peoples.[16][17] They have existed as a distinct language and ethnic group for over 5,000 years.[18]
    
    Agadagba-bou, the first ancient Ijaw city-state, existed for more than 400 years,[16] lasting until 1050 CE. Due to internal conflict and violent weather patterns, this city-state was abandoned. Some of the descendants of this city-state created another in the 11th century called Isoma-bou, which lasted until the 16th century. This city-state, like the last, was founded in the Central Delta Wilberforce Island region. The Wilberforce Island region remains the most Ijaw-populated area of Nigeria.
    `,
    location:`The Ijaw people, otherwise known as the Ijo people,[2] are an ethnic group found in the Niger Delta in Nigeria, with significant population clusters[3] in Bayelsa, Delta, and Rivers.[4] They also occupy Edo, Ondo,[5] and small parts of Akwa Ibom.[6] Many are found as migrant fishermen in camps as far west as Sierra Leone and as far east as Gabon. They account for about 1.8% of the Nigerian population according to CIA Factbook.[1][7][8][9][10] The Ijaws are one of the most populous tribes inhabiting the Niger Delta region and the eighth largest[11] ethnic group in Nigeria.`,
    language:"Ijaw language",
    population:"4 million"
}


]

export default data;