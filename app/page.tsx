"use client";
import { useEffect, useRef, useState } from "react";


const risottoSteps = [
  ["Warm the stock","Pour the vegetable stock into a saucepan and bring it to a gentle simmer. Keep it warm over low heat.",300],
  ["Soften the aromatics","Heat olive oil in a wide pan. Add the onion with a pinch of salt and cook until soft and translucent.",300],
  ["Toast the rice","Add garlic and arborio rice. Stir until the edges of the grains look translucent and the pan smells nutty.",120],
  ["Add stock gradually","Add one ladle of warm stock. Stir gently until nearly absorbed, then repeat until creamy with a slight bite.",1080],
  ["Finish and rest","Fold through the pumpkin, parmesan and butter. Turn off the heat, cover and rest before seasoning.",120],
  ["Serve","Spoon into warm bowls. Finish with sage, parmesan, black pepper and a drizzle of olive oil.",0],
] as const;
const recipes=[
 {id:"risotto",title:"Roasted pumpkin risotto",tag:"AUTUMN · DINNER",intro:"Silky, golden and deeply comforting. Follow along one calm step at a time.",facts:"⏱ 45 min　♨ Easy　◉ Serves 4",symbol:"⌁",steps:risottoSteps,ingredients:["1.2 L vegetable stock","2 tbsp olive oil","1 brown onion, finely diced","2 garlic cloves, minced","300 g arborio rice","400 g roasted pumpkin","60 g parmesan, grated","40 g unsalted butter","Sage leaves, to finish"]},
 {id:"pasta",title:"One-pan tomato pasta",tag:"WEEKNIGHT · DINNER",intro:"A bright, savoury pasta that comes together in one pan with very little washing up.",facts:"⏱ 25 min　♨ Easy　◉ Serves 4",symbol:"≈",steps:[
  ["Prepare the base","Add olive oil, sliced garlic and chilli flakes to a wide pan over medium heat.",120],
  ["Build the sauce","Add crushed tomatoes, water and a generous pinch of salt. Bring to a lively simmer.",300],
  ["Cook the pasta","Add spaghetti to the pan. Turn it often as it softens so every strand cooks evenly in the sauce.",720],
  ["Finish","Stir through basil and parmesan. Add a splash of water if the sauce needs loosening.",60],
  ["Serve","Twirl into bowls and finish with black pepper, parmesan and olive oil.",0]
 ] as const,ingredients:["3 tbsp olive oil","3 garlic cloves, sliced","½ tsp chilli flakes","800 g crushed tomatoes","500 ml water","350 g spaghetti","1 bunch basil","60 g parmesan","Salt and black pepper"]},
 {id:"chicken",title:"Lemon herb tray chicken",tag:"FAMILY · DINNER",intro:"Golden chicken, crisp potatoes and lemony pan juices, cooked together on one tray.",facts:"⏱ 55 min　♨ Easy　◉ Serves 4",symbol:"⌇",steps:[
  ["Heat the oven","Preheat the oven to 210°C conventional or 190°C fan-forced.",0],
  ["Season the tray","Toss potatoes, onion, lemon, garlic and herbs with olive oil, salt and pepper on a large tray.",180],
  ["Add the chicken","Nestle the chicken thighs skin-side up among the vegetables. Rub the skin with oil and season well.",120],
  ["Roast","Roast until the potatoes are tender and the chicken skin is deeply golden.",2400],
  ["Rest","Rest the chicken on the tray so the juices settle. Check it is cooked through before serving.",300],
  ["Serve","Spoon the lemony tray juices over the chicken and serve with the roasted vegetables.",0]
 ] as const,ingredients:["8 chicken thighs, bone-in","800 g baby potatoes, halved","1 red onion, cut into wedges","2 lemons","6 garlic cloves","2 tbsp olive oil","Rosemary and thyme","Salt and black pepper"]},
 {id:"paella",title:"Chicken and chorizo paella",tag:"SPANISH-INSPIRED · DINNER",intro:"Golden saffron rice, smoky chorizo and tender chicken, finished with lemon and a crisp base.",facts:"⏱ 50 min　♨ Easy　◉ Serves 4",symbol:"✺",steps:[
  ["Prepare the pan","Warm the chicken stock in a saucepan over low heat. Crush the saffron between your fingers and stir it into the warm stock.",180],
  ["Brown the chicken","Heat olive oil in a wide paella pan or large shallow frying pan. Season the chicken, then brown it well on both sides. Transfer it to a plate.",480],
  ["Cook the chorizo","Add the chorizo to the same pan and cook until lightly crisp and its paprika-red oil has been released.",180],
  ["Soften the vegetables","Add the onion and capsicum. Cook until softened, then add the garlic and smoked paprika and stir until fragrant.",360],
  ["Toast the rice","Stir in the tomatoes and rice. Cook briefly, coating every grain in the smoky pan juices.",120],
  ["Add the stock","Return the chicken to the pan. Pour in the saffron stock, spread everything evenly and bring to a gentle simmer. From this point, do not stir the rice.",120],
  ["Cook the paella","Simmer uncovered over medium-low heat until the rice is nearly tender and most of the stock has been absorbed. Rotate the pan occasionally for even cooking, without stirring.",1080],
  ["Add peas and crisp the base","Scatter over the peas. Cook until the rice is tender. For a crisp socarrat, raise the heat for the final minute and listen for a gentle crackle—stop if it smells burnt.",180],
  ["Rest","Remove from the heat, cover loosely with a clean tea towel or foil and let the paella rest so the grains settle.",480],
  ["Serve","Finish with parsley and lemon wedges. Take the whole pan to the table and serve from the centre outwards.",0]
 ] as const,ingredients:["2 tbsp olive oil","600 g boneless chicken thighs, cut into pieces","200 g Spanish-style chorizo, sliced","1 brown onion, finely diced","1 red capsicum, sliced","3 garlic cloves, minced","1 tsp smoked paprika","¼ tsp saffron threads","300 g bomba or medium-grain rice","750 ml chicken stock","200 g crushed tomatoes","150 g frozen peas","1 lemon, cut into wedges","Parsley, to finish","Salt and black pepper"]},
 {id:"satay",title:"Satay chicken with peanut sauce",tag:"SATAY · DINNER",intro:"Tender golden chicken coated in a creamy, savoury peanut and coconut sauce with a bright squeeze of lime.",facts:"⏱ 40 min　♨ Easy　◉ Serves 4",symbol:"◇",steps:[
  ["Marinate the chicken","Combine the chicken with soy sauce, curry powder and brown sugar. Toss well and leave to absorb the flavours while you prepare the sauce.",600],
  ["Mix the satay sauce","Whisk the peanut butter, coconut milk, lime juice and red curry paste until smooth. Add a splash of warm water if it is very thick.",180],
  ["Cook the rice","Rinse the jasmine rice, then cook it according to the packet directions. Keep it covered and warm for serving.",900],
  ["Brown the chicken","Heat the oil in a large frying pan over medium-high heat. Cook the chicken in a single layer, working in batches if needed, until deeply golden.",480],
  ["Simmer the sauce","Lower the heat and pour in the satay sauce. Stir to lift the browned flavour from the pan and bring it to a gentle simmer.",180],
  ["Finish the chicken","Simmer until the sauce is glossy and the chicken is completely cooked through. Loosen with a little water if the sauce becomes too thick.",420],
  ["Serve","Spoon the rice into bowls, add the satay chicken and finish with cucumber, coriander, crushed peanuts and lime wedges.",0]
 ] as const,ingredients:["600 g boneless chicken thighs, cut into pieces","2 tbsp soy sauce","2 tsp curry powder","1 tbsp brown sugar","1 tbsp neutral oil","120 g smooth peanut butter","400 ml coconut milk","1 tbsp lime juice","1 tsp red curry paste","300 g jasmine rice","1 cucumber, sliced","40 g roasted peanuts, crushed","Coriander and lime wedges, to serve"]},
 {id:"green-curry",title:"Thai green chicken curry",tag:"THAI-INSPIRED · DINNER",intro:"Fragrant, creamy and gently fiery, with tender chicken, green vegetables, basil and lime.",facts:"⏱ 35 min　♨ Easy　◉ Serves 4",symbol:"❧",steps:[
  ["Prepare the rice","Rinse the jasmine rice and cook it according to the packet directions. Keep it covered while you make the curry.",900],
  ["Fry the curry paste","Heat the oil in a deep frying pan or saucepan. Add the green curry paste and cook until fragrant, stirring so it does not catch.",120],
  ["Add the coconut milk","Stir in a few spoonfuls of coconut milk until glossy, then gradually add the remainder and the chicken stock.",180],
  ["Cook the chicken","Add the chicken and bring the curry to a gentle simmer. Cook until the pieces are nearly cooked through.",600],
  ["Add the vegetables","Add the eggplant, green beans and bamboo shoots. Simmer until the vegetables are tender and the chicken is completely cooked through.",480],
  ["Balance the curry","Stir in the fish sauce, brown sugar and lime juice. Taste for a balance of salty, sweet, sour and spicy, adjusting gently if needed.",120],
  ["Finish with basil","Turn off the heat and fold through the Thai basil so it wilts without losing its fragrance.",60],
  ["Serve","Spoon the curry alongside jasmine rice and finish with basil leaves and lime wedges.",0]
 ] as const,ingredients:["600 g boneless chicken thighs, thinly sliced","1 tbsp neutral oil","3 tbsp Thai green curry paste","400 ml coconut milk","250 ml chicken stock","300 g Thai or regular eggplant, cut into pieces","150 g green beans, trimmed","225 g bamboo shoots, drained","1 tbsp fish sauce","1 tbsp brown sugar","1 tbsp lime juice","1 bunch Thai basil","300 g jasmine rice","Lime wedges, to serve"]},
 {id:"butter-chicken",title:"Creamy butter chicken",tag:"INDIAN-INSPIRED · DINNER",intro:"Spiced, tender chicken in a velvety tomato, butter and cream sauce made for scooping up with rice or naan.",facts:"⏱ 60 min　♨ Easy　◉ Serves 4",symbol:"●",steps:[
  ["Marinate the chicken","Mix the yoghurt, lemon juice, garam masala, cumin and turmeric. Coat the chicken thoroughly and leave it to marinate.",1800],
  ["Cook the rice","Rinse the basmati rice and cook it according to the packet directions. Keep it covered and warm.",900],
  ["Brown the chicken","Melt half the butter in a large frying pan over medium-high heat. Brown the chicken in batches, then transfer it to a plate; it will finish cooking in the sauce.",480],
  ["Soften the aromatics","Lower the heat and add the remaining butter. Cook the onion until soft, then stir in the garlic and ginger until fragrant.",480],
  ["Build the sauce","Add the tomato passata and a pinch of salt. Simmer gently until the sauce darkens slightly and no longer tastes raw.",600],
  ["Finish the chicken","Return the chicken and its juices to the pan. Simmer gently until the chicken is completely cooked through and tender.",600],
  ["Add the cream","Lower the heat and stir through the cream and brown sugar. Warm gently without boiling hard, then taste and adjust the seasoning.",180],
  ["Serve","Spoon the butter chicken over basmati rice and finish with coriander. Serve with warm naan if you like.",0]
 ] as const,ingredients:["600 g boneless chicken thighs, cut into pieces","150 g plain yoghurt","1 tbsp lemon juice","2 tsp garam masala","1 tsp ground cumin","½ tsp ground turmeric","50 g unsalted butter","1 brown onion, finely diced","3 garlic cloves, minced","20 g fresh ginger, grated","500 g tomato passata","150 ml thickened cream","1 tsp brown sugar","300 g basmati rice","Coriander and naan, to serve","Salt, to taste"]},
 {id:"carbonara",title:"Classic spaghetti carbonara",tag:"ROMAN-INSPIRED · DINNER",intro:"Silky pasta with crisp pancetta, eggs, cheese and black pepper—creamy without adding cream.",facts:"⏱ 25 min　♨ Easy　◉ Serves 4",symbol:"◎",steps:[
  ["Boil the water","Bring a large pot of water to the boil. Salt it a little less than usual because the pancetta and cheese are already salty.",300],
  ["Mix the egg sauce","Whisk the eggs and extra yolks with the finely grated pecorino, parmesan and plenty of black pepper until thick and smooth.",180],
  ["Crisp the pancetta","Cook the pancetta in a wide frying pan over medium heat until golden and crisp. Turn off the heat but keep the rendered fat in the pan.",480],
  ["Cook the spaghetti","Boil the spaghetti until just al dente. Before draining, scoop out a generous mug of the starchy cooking water.",600],
  ["Combine off the heat","Add the hot drained spaghetti to the pancetta pan and toss. Let it cool for about 30 seconds so the eggs will become silky rather than scrambling.",30],
  ["Create the sauce","With the pan off the heat, add the egg mixture and toss vigorously. Add warm pasta water a splash at a time until the sauce is glossy and coats every strand.",120],
  ["Serve immediately","Divide between warm bowls straight away. Finish with more cheese and freshly cracked black pepper.",0]
 ] as const,ingredients:["400 g spaghetti","180 g pancetta or guanciale, diced","2 large eggs","2 egg yolks","70 g pecorino romano, finely grated","30 g parmesan, finely grated","Black pepper, generously ground","Salt, for the pasta water"]},
 {id:"fried-rice",title:"Golden egg fried rice",tag:"QUICK · DINNER",intro:"A fast, savoury fried rice with fluffy egg, crisp vegetables and deeply toasted grains.",facts:"⏱ 20 min　♨ Easy　◉ Serves 4",symbol:"✦",steps:[
  ["Prepare the rice","Break up the cold cooked rice with your fingers or a fork so there are no large clumps. Have every ingredient ready before heating the wok.",120],
  ["Season the sauce","Mix the soy sauce, sesame oil and white pepper in a small bowl. Keep it beside the stove.",60],
  ["Scramble the eggs","Heat half the neutral oil in a wok or large frying pan over high heat. Add the beaten eggs, scramble until softly set, then transfer to a plate.",120],
  ["Cook the vegetables","Add the remaining oil, carrot and the white parts of the spring onions. Stir-fry until the carrot begins to soften, then add the peas.",240],
  ["Fry the rice","Add the cold rice and spread it across the hot pan. Toss and press out any clumps until the grains are hot, separate and beginning to toast.",360],
  ["Season and combine","Pour the sauce around the hot edge of the pan. Return the egg and toss everything together until evenly seasoned and piping hot.",120],
  ["Finish","Fold through the green parts of the spring onions. Taste and add a little more soy sauce only if needed.",60],
  ["Serve","Spoon into bowls immediately and finish with extra spring onion, chilli crisp or toasted sesame seeds if you like.",0]
 ] as const,ingredients:["600 g cold cooked jasmine rice","4 large eggs, lightly beaten","2 tbsp neutral oil","1 carrot, finely diced","150 g frozen peas","4 spring onions, sliced and separated","2 tbsp soy sauce","1 tsp sesame oil","¼ tsp ground white pepper","Chilli crisp or sesame seeds, to serve"]},
 {id:"chilli",title:"Slow-simmered chilli con carne",tag:"COMFORT · DINNER",intro:"Deeply savoury beef, tomatoes and kidney beans with warm spices and just enough chilli heat.",facts:"⏱ 60 min　♨ Easy　◉ Serves 4",symbol:"♨",steps:[
  ["Soften the vegetables","Heat the oil in a heavy saucepan. Add the onion and capsicum with a pinch of salt and cook until soft and lightly golden.",480],
  ["Add the aromatics","Stir in the garlic, cumin, smoked paprika, oregano and chilli powder. Cook until fragrant, taking care not to burn the spices.",60],
  ["Brown the beef","Increase the heat and add the beef mince. Break it into small pieces and cook until browned rather than grey.",600],
  ["Cook the tomato paste","Stir in the tomato paste and cook until it darkens slightly and coats the beef.",120],
  ["Build the chilli","Add the diced tomatoes, beef stock and kidney beans. Stir well, scrape the base of the pan and bring everything to a simmer.",180],
  ["Simmer slowly","Lower the heat and simmer uncovered, stirring occasionally, until thick, rich and glossy. Add a splash of water if it reduces too quickly.",1800],
  ["Cook the rice","While the chilli simmers, rinse and cook the rice according to the packet directions. Keep it covered and warm.",900],
  ["Balance the flavour","Stir in the dark chocolate if using. Taste and adjust the salt, chilli and acidity; a tiny pinch of sugar can soften sharp tomatoes.",120],
  ["Serve","Spoon over rice and finish with sour cream, grated cheese, coriander and lime wedges.",0]
 ] as const,ingredients:["2 tbsp olive oil","1 brown onion, finely diced","1 red capsicum, diced","3 garlic cloves, minced","500 g beef mince","2 tbsp tomato paste","2 tsp ground cumin","2 tsp smoked paprika","1 tsp dried oregano","½ tsp chilli powder","400 g diced tomatoes","400 g kidney beans, drained","250 ml beef stock","15 g dark chocolate, optional","300 g long-grain rice","Sour cream, cheese, coriander and lime, to serve","Salt, to taste"]},
 {id:"roast-chicken",title:"Classic roast chicken and vegetables",tag:"SUNDAY · ROAST",intro:"Crisp golden skin, juicy meat and herb-scented vegetables, with a proper rest before carving.",facts:"⏱ 1 hr 45 min　♨ Easy　◉ Serves 4",symbol:"◉",steps:[
  ["Heat the oven","Preheat the oven to 220°C conventional or 200°C fan-forced. Take the chicken from the fridge while the oven heats.",0],
  ["Prepare the chicken","Pat the chicken dry inside and out. Season the cavity, then add the lemon halves, garlic and herbs.",180],
  ["Butter and season","Rub the softened butter all over the skin. Season generously with salt and black pepper, including around the legs and wings.",180],
  ["Prepare the vegetables","Toss the potatoes, carrots and onion with olive oil, salt and pepper in a roasting tray. Set the chicken breast-side up on top.",300],
  ["Begin roasting","Roast at the high temperature until the skin begins to colour and crisp.",1200],
  ["Finish roasting","Reduce the oven to 190°C conventional or 170°C fan-forced. Continue roasting until deeply golden and cooked through, turning the vegetables once.",3600],
  ["Check for doneness","Check the thickest part of the thigh without touching bone. It should reach 75°C, and the juices should run clear. If needed, roast longer and check again.",0],
  ["Rest the chicken","Transfer the chicken to a board, cover loosely with foil and rest before carving. Return the vegetables to the oven if they need extra colour.",900],
  ["Make quick pan juices","Skim excess fat from the roasting tray. Add the chicken stock and scrape up the browned flavour, then simmer briefly until slightly reduced.",300],
  ["Carve and serve","Carve the rested chicken and serve with the roast vegetables and warm pan juices.",0]
 ] as const,ingredients:["Whole chicken, about 1.6–1.8 kg","60 g unsalted butter, softened","1 lemon, halved","1 garlic bulb, halved","Rosemary and thyme","800 g potatoes, cut into chunks","4 carrots, cut into chunks","2 brown onions, cut into wedges","2 tbsp olive oil","250 ml chicken stock","Salt and black pepper"]},
 {id:"slow-chicken",title:"Slow-cooker honey garlic chicken",tag:"SLOW COOKER · CHICKEN",intro:"Tender chicken in a sticky, savoury honey, soy, garlic and ginger sauce that practically cooks itself.",facts:"⏱ 5 hr 25 min　♨ Easy　◉ Serves 4",symbol:"⌁",steps:[
  ["Prepare the slow cooker","Place the sliced onion across the base of the slow cooker. Trim excess fat from the thawed chicken and arrange it over the onion.",180],
  ["Mix the sauce","Whisk together the honey, soy sauce, chicken stock, tomato paste, vinegar, garlic and ginger until smooth.",180],
  ["Start cooking","Pour the sauce over the chicken and turn the pieces once to coat. Fit the lid securely.",60],
  ["Slow cook","Cook on LOW until the chicken is very tender and completely cooked through. Avoid lifting the lid during cooking, as this releases heat.",18000],
  ["Shred the chicken","Transfer the chicken to a board and shred or slice it. Skim excess fat from the sauce if needed.",180],
  ["Thicken the sauce","Mix the cornflour and cold water into a smooth slurry. Stir it into the slow cooker, switch to HIGH and cook uncovered until glossy and thickened.",600],
  ["Finish and serve","Return the chicken to the sauce. Serve over rice with steamed greens, spring onion and sesame seeds.",0]
 ] as const,ingredients:["800 g boneless chicken thighs, thawed","1 brown onion, sliced","80 ml honey","80 ml soy sauce","100 ml chicken stock","1 tbsp tomato paste","1 tbsp rice vinegar","4 garlic cloves, minced","20 g fresh ginger, grated","2 tbsp cornflour","2 tbsp cold water","Spring onion and sesame seeds, to serve","Cooked rice and steamed greens, to serve"]},
 {id:"slow-beef",title:"Slow-cooker beef and red wine stew",tag:"SLOW COOKER · BEEF",intro:"Fall-apart beef, mushrooms and vegetables in a deeply savoury red-wine gravy made for cold evenings.",facts:"⏱ 8 hr 35 min　♨ Easy　◉ Serves 4",symbol:"◆",steps:[
  ["Season the beef","Pat the beef dry, season it well and toss it with the flour until lightly coated.",180],
  ["Brown in batches","Heat half the oil in a large frying pan. Brown the beef in batches so it develops a dark crust, transferring each batch to the slow cooker.",600],
  ["Soften the vegetables","Add the remaining oil, onion, carrots and celery to the pan. Cook until starting to colour, then add the garlic and tomato paste.",480],
  ["Deglaze the pan","Pour in the red wine and scrape up every browned bit. Simmer briefly, then tip the vegetables and wine into the slow cooker.",240],
  ["Add the braising liquid","Add the beef stock, mushrooms, thyme and bay leaves. Stir gently and fit the lid.",120],
  ["Slow cook","Cook on LOW until the beef is fork-tender and the vegetables are soft. Keep the lid closed during cooking.",28800],
  ["Finish the gravy","Remove the bay leaves. If the gravy is thin, switch to HIGH and cook uncovered; if it is too thick, add a splash of stock. Taste and season.",600],
  ["Serve","Spoon into bowls with mashed potato, buttered noodles or crusty bread, and finish with parsley.",0]
 ] as const,ingredients:["1 kg beef chuck, cut into large pieces","3 tbsp plain flour","2 tbsp olive oil","1 brown onion, diced","3 carrots, cut into chunks","2 celery stalks, sliced","3 garlic cloves, minced","2 tbsp tomato paste","300 ml dry red wine","400 ml beef stock","250 g mushrooms, halved","4 thyme sprigs","2 bay leaves","Parsley, to serve","Mashed potato or crusty bread, to serve","Salt and black pepper"]},
 {id:"slow-lamb",title:"Slow-cooker Moroccan lamb tagine",tag:"SLOW COOKER · LAMB",intro:"Meltingly tender lamb with warm spices, chickpeas and apricots in a fragrant sweet-savoury sauce.",facts:"⏱ 7 hr 35 min　♨ Easy　◉ Serves 4",symbol:"✧",steps:[
  ["Coat the lamb","Pat the lamb dry and toss it with cumin, coriander, paprika, cinnamon, salt and black pepper.",180],
  ["Brown the lamb","Heat the oil in a large frying pan and brown the lamb in batches. Transfer each batch to the slow cooker.",600],
  ["Cook the aromatics","Add the onion to the pan and cook until soft. Stir in the garlic and ginger until fragrant.",420],
  ["Build the sauce","Add the tomatoes and stock to the pan, scraping up the browned flavour. Pour everything over the lamb.",180],
  ["Add the tagine ingredients","Stir in the chickpeas, dried apricots and honey. Fit the lid.",120],
  ["Slow cook","Cook on LOW until the lamb is very tender and the sauce is rich. Avoid opening the lid during cooking.",25200],
  ["Prepare the couscous","Put the couscous in a heatproof bowl and prepare it according to the packet directions. Fluff with a fork.",600],
  ["Balance the tagine","Taste the sauce and adjust the salt, sweetness and lemon. If it needs thickening, cook on HIGH uncovered for a few minutes.",300],
  ["Serve","Spoon the lamb tagine over couscous and finish with toasted almonds, coriander and lemon wedges.",0]
 ] as const,ingredients:["900 g boneless lamb shoulder, cut into large pieces","2 tbsp olive oil","1 brown onion, diced","3 garlic cloves, minced","20 g fresh ginger, grated","2 tsp ground cumin","2 tsp ground coriander","1 tsp smoked paprika","½ tsp ground cinnamon","400 g diced tomatoes","300 ml chicken stock","400 g chickpeas, drained","120 g dried apricots, halved","1 tbsp honey","300 g couscous","40 g toasted almonds","Coriander and lemon, to serve","Salt and black pepper"]}
] as const;
const fmt=(n:number)=>`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`;

type ServingSize = 2 | 4 | 6;

const fractionValues: Record<string, number> = {
  "¼": .25,
  "⅓": 1 / 3,
  "½": .5,
  "⅔": 2 / 3,
  "¾": .75,
  "⅛": .125,
  "⅜": .375,
  "⅝": .625,
  "⅞": .875,
};

const formatQuantity = (value: number) => {
  const rounded = Math.round(value * 100) / 100;
  const whole = Math.floor(rounded);
  const remainder = rounded - whole;
  const fractions: Array<[number, string]> = [
    [.125, "⅛"], [.25, "¼"], [1 / 3, "⅓"], [.375, "⅜"],
    [.5, "½"], [.625, "⅝"], [2 / 3, "⅔"], [.75, "¾"], [.875, "⅞"],
  ];
  const match = fractions.find(([number]) => Math.abs(remainder - number) < .025);

  if (match) return `${whole || ""}${match[1]}`;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
};

const scaleIngredient = (ingredient: string, servings: ServingSize) => {
  const match = ingredient.match(/^(\d+(?:\.\d+)?|[¼⅓½⅔¾⅛⅜⅝⅞])\s+(.+)$/);
  if (!match) return ingredient;

  const baseQuantity = fractionValues[match[1]] ?? Number(match[1]);
  return `${formatQuantity(baseQuantity * servings / 4)} ${match[2]}`;
};

const servingFacts = (facts: string, servings: ServingSize) =>
  facts.replace(/Serves\s+\d+/, `Serves ${servings}`);

export default function Home(){
  const [recipeId,setRecipeId]=useState("risotto"),[showLibrary,setShowLibrary]=useState(true);
  const [servings,setServings]=useState<ServingSize>(4);
  const recipe=recipes.find(r=>r.id===recipeId)??recipes[0],steps=recipe.steps;
  const ingredients=recipe.ingredients.map(x=>scaleIngredient(x,servings));
  const [step,setStep]=useState(0),[seconds,setSeconds]=useState(risottoSteps[0][2] as number);
  const [running,setRunning]=useState(false),[tab,setTab]=useState<"ingredients"|"cook">("cook");
  const [checked,setChecked]=useState<number[]>([]);
  const audioContextRef=useRef<AudioContext|null>(null);
  const unlockTimerSound=()=>{
    const AudioContextConstructor=window.AudioContext||(window as unknown as {webkitAudioContext:typeof AudioContext}).webkitAudioContext;
    if(!AudioContextConstructor)return null;
    const context=audioContextRef.current??new AudioContextConstructor();
    audioContextRef.current=context;
    if(context.state==="suspended")void context.resume();
    return context;
  };
  const playTimerChime=()=>{
    const context=audioContextRef.current;
    if(!context)return;
    void context.resume().then(()=>{
      const start=context.currentTime;
      [523.25,659.25,783.99].forEach((frequency,index)=>{
        const oscillator=context.createOscillator(),gain=context.createGain();
        const noteStart=start+index*.22;
        oscillator.type="sine";
        oscillator.frequency.setValueAtTime(frequency,noteStart);
        gain.gain.setValueAtTime(.0001,noteStart);
        gain.gain.exponentialRampToValueAtTime(.18,noteStart+.025);
        gain.gain.exponentialRampToValueAtTime(.0001,noteStart+.42);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(noteStart);
        oscillator.stop(noteStart+.44);
      });
    });
  };
  useEffect(()=>{const raw=localStorage.getItem("nebari-cook");if(raw)try{const x=JSON.parse(raw);setRecipeId(x.recipeId||"risotto");setStep(x.step||0);setSeconds(x.seconds||300);setChecked(x.checked||[]);if([2,4,6].includes(x.servings))setServings(x.servings)}catch{};if("serviceWorker" in navigator)navigator.serviceWorker.register("/sw.js")},[]);
  useEffect(()=>localStorage.setItem("nebari-cook",JSON.stringify({recipeId,step,seconds,checked,servings})),[recipeId,step,seconds,checked,servings]);
  useEffect(()=>{if(!running||seconds===0)return;const id=setInterval(()=>setSeconds(v=>Math.max(0,v-1)),1000);return()=>clearInterval(id)},[running,seconds]);
  useEffect(()=>{if(seconds===0&&running){setRunning(false);playTimerChime()}},[seconds,running]);
  const move=(n:number)=>{setStep(n);setSeconds(steps[n][2]);setRunning(false)};
  const choose=(id:string)=>{const next=recipes.find(r=>r.id===id)??recipes[0];setRecipeId(id);setStep(0);setSeconds(next.steps[0][2]);setChecked([]);setRunning(false);setTab("ingredients");setShowLibrary(false);window.scrollTo({top:0,behavior:"smooth"})};
  const share=async()=>{const data={title:`Kitchen Nebari — ${recipe.title}`,text:`Cook ${recipe.title} with me, one step at a time.`,url:window.location.href};if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(window.location.href);alert("Recipe link copied")}};
  return <main>
    <header><button className="brand" onClick={()=>setShowLibrary(true)}><b>N</b><span>KITCHEN<small>NEBARI</small></span></button><div className="header-actions"><div className="servings-picker" aria-label="Preferred serving size"><span>Serves</span>{([2,4,6] as ServingSize[]).map(size=><button key={size} className={servings===size?"selected":""} aria-pressed={servings===size} onClick={()=>setServings(size)}>{size}</button>)}</div><button onClick={()=>setShowLibrary(true)}>All recipes</button><button onClick={share}>↗ Share</button></div></header>
    {showLibrary&&<section className="library"><div className="library-head"><p className="eyebrow">YOUR COOKBOOK</p><h2>What shall we cook?</h2><p>Choose a recipe for guided instructions and a timer at every important step.</p></div><div className="recipe-cards">{recipes.map((r,i)=><button key={r.id} onClick={()=>choose(r.id)}><span className={`card-art art-${i}`}>{r.symbol}</span><small>{r.tag}</small><h3>{r.title}</h3><p>{servingFacts(r.facts,servings)}</p><b>Cook this recipe　→</b></button>)}</div></section>}
    {!showLibrary&&<><section className="hero" id="top"><div><p className="eyebrow">{recipe.tag}</p><h1>{recipe.title}</h1><p className="intro">{recipe.intro}</p><p className="facts">{servingFacts(recipe.facts,servings)}</p></div><div className="art"><i>{recipe.symbol}</i></div></section>
    <nav><button className={tab==="ingredients"?"active":""} onClick={()=>setTab("ingredients")}>Ingredients　{checked.length}/{ingredients.length}</button><button className={tab==="cook"?"active":""} onClick={()=>setTab("cook")}>Cook mode　{step+1}/{steps.length}</button></nav>
    {tab==="ingredients"?<section className="ingredients"><div><p className="eyebrow">BEFORE YOU BEGIN</p><h2>Gather everything</h2><p>Tap each item as you set it out. Your progress is saved on this device.</p></div><div className="list">{ingredients.map((x,i)=><label className={checked.includes(i)?"done":""} key={x}><input type="checkbox" checked={checked.includes(i)} onChange={()=>setChecked(v=>v.includes(i)?v.filter(n=>n!==i):[...v,i])}/>{x}</label>)}</div><button className="primary start" onClick={()=>setTab("cook")}>Start cooking　→</button></section>:
    <section className="cook"><div className="progress"><span>STEP {step+1} OF {steps.length}</span><b>{Math.round((step+1)/steps.length*100)}% COMPLETE</b><i><u style={{width:`${(step+1)/steps.length*100}%`}}/></i></div>
      <div className="grid"><article><em>{String(step+1).padStart(2,"0")}</em><p className="eyebrow">NOW COOKING</p><h2>{steps[step][0]}</h2><p className="instruction">{steps[step][1]}</p><aside><b>COOK'S NOTE</b> Keep the heat steady and trust your senses as well as the clock.</aside></article>
      <div className="timer"><small>{seconds===0&&steps[step][2]?"TIMER FINISHED":"STEP TIMER"}</small>{steps[step][2]?<><strong aria-live="polite">{fmt(seconds)}</strong><div><button className="gold" onClick={()=>{if(seconds===0)setSeconds(steps[step][2]);if(!running)unlockTimerSound();setRunning(!running)}}>{running?"Ⅱ Pause":"▶ Start timer"}</button><button onClick={()=>setSeconds(v=>v+60)}>+ 1 min</button></div><button className="reset" onClick={()=>{setSeconds(steps[step][2]);setRunning(false)}}>Reset timer</button></>:<strong className="ready">Ready to eat</strong>}</div></div>
      <div className="next"><button disabled={!step} onClick={()=>move(step-1)}>← Previous</button><button className="primary" disabled={step===steps.length-1} onClick={()=>move(step+1)}>{step===steps.length-1?"Recipe complete":"Next step　→"}</button></div>
    </section>}</>}
    <footer>KITCHEN NEBARI <p>Cook with confidence. One step at a time.</p></footer>
  </main>
}
