/**
 * The Human Design library's words, as approved in mock v29.
 *
 * GENERATED from HD-Library-Work/content/*.json (types, authority, centers,
 * definition, profiles, channels, gates, crosses, crosses-index). Those files are
 * the source; edit them there and regenerate rather than editing this by hand, so
 * the two never drift. The mock embeds exactly this text (checked 10/5: every
 * object byte-identical to its JSON file).
 *
 * Inline links use a tiny markdown form, [Centers](#centers), which md() in
 * engine.ts turns into cross-links.
 */

export interface TypeText { glance: string; summary: string; works: string; working: string; notworking: string }
export interface AuthText { glance: string; summary: string; feels: string; timing: string; mixups: string }
export interface CenterText { summary: string; defined: string; undefined: string; open: string }
export interface DefText { glance: string; summary: string; day: string; others: string }
export interface LineText { glance: string; summary: string; first: string; second: string }
export interface ProfileText { glance: string; summary: string; together: string }
export interface ChanText { glance: string; summary: string; does: string; working: string }
export interface GateText { name: string; glance: string; summary: string; brings: string }
export interface CrossText { glance: string; summary: string; theme: string; living?: string }
export interface CrossIndexEntry { sunGates: number[]; quads: number[][]; gates: number[] }

export const TYPETXT: Record<string, TypeText> = {
 "Generator": {
  "glance": "Steady, renewable energy. Works best answering what shows up.",
  "summary": "Generators have a colored-in Sacral, a steady source of life energy. Together with Manifesting Generators, they're about seven in ten people. Their strategy is to respond: to let life bring something, then notice the gut's yes or no. When the energy goes into work they love, the feeling is satisfaction.",
  "works": "The [Sacral](#centers) gives steady energy that renews with sleep, as long as it's spent on the right things. It answers in the moment, often with a sound before a thought.\n\nGenerators are built to master things over time, through doing them again and again.\n\nSome frustration is part of mastery too: the plateau before the next step.",
  "working": "This happens when their energy goes into things the gut said yes to. Things tend to come to them, instead of them chasing.\n\nIt shows up as satisfaction: a tired, good feeling at the end of the day.",
  "notworking": "This happens when they start things the mind chose, or say yes when the gut said no.\n\nIt shows up as frustration. The frustration isn't a flaw. It's a signal, pointing back to waiting for something to respond to."
 },
 "Manifesting Generator": {
  "glance": "The Generator's motor, with a faster, many-paths streak.",
  "summary": "Manifesting Generators have a colored-in Sacral linked to the Throat by a motor. They respond like Generators, then move fast, often doing many things at once. Skipping steps is natural for them. Letting people know what's coming keeps the road clear. The feeling when it's working is satisfaction, with a sense of peace.",
  "works": "The same steady [Sacral](#centers) energy as a Generator, wired to act quickly. Once the gut says yes, things can happen at speed.\n\nMany interests at once is normal, not a lack of focus.\n\nSkipping steps, then going back to fill them in, is part of how they learn.",
  "working": "This happens when they respond first, then move fast, and let the people affected know before changing course. Dropping what no longer fits, without guilt, is part of it.\n\nIt shows up as satisfaction, with a sense of peace.",
  "notworking": "This happens when they jump in without a gut yes, or move so fast that people around them are caught off guard.\n\nIt shows up as frustration, sometimes anger. The feeling is a signal, pointing back to responding first and letting people know."
 },
 "Projector": {
  "glance": "Built to see and guide other people's energy, not to outwork it.",
  "summary": "Projectors have no colored-in Sacral, and they're about one in five people. Their gift is seeing others clearly: how they work and what would help. Their strategy is to wait for recognition and invitation, for the big things in life especially. When their insight is asked for and lands, the feeling is success.",
  "works": "Projectors don't have steady work energy of their own. They take in and amplify other people's, which can feel like a lot, until it suddenly runs out.\n\nTheir energy goes furthest guiding, not grinding.",
  "working": "This happens when they're recognized and invited into work, relationships and big decisions, and get plenty of rest.\n\nIt shows up as success: their guidance is welcomed because someone asked.",
  "notworking": "This happens when they offer guidance nobody asked for, or wear themselves out keeping up with people who have steady work energy.\n\nIt shows up as bitterness. The bitterness is a signal, pointing back to waiting for the invitation."
 },
 "Manifestor": {
  "glance": "Starts things. Works best letting people know before moving.",
  "summary": "Manifestors have a motor connected to the Throat but no colored-in Sacral. They're fewer than one in ten people. They're built to start things, on their own impulse, without waiting. Their strategy is to inform: letting the people affected know before they act. When that happens, the feeling is peace.",
  "works": "A strong push to begin, often out of nowhere. They don't need permission, and they don't need anyone to respond first.\n\nTheir energy comes in bursts, followed by a stretch of rest.",
  "working": "This happens when they start what they feel moved to start, and the people affected hear about it first. Time to rest between bursts is part of it.\n\nIt shows up as peace: less pushback, more room to move.",
  "notworking": "This happens when they act without letting the people affected know, and meet pushback they didn't expect.\n\nIt shows up as anger. The anger is a signal, pointing back to informing first. Informing isn't asking permission. It simply clears the way."
 },
 "Reflector": {
  "glance": "No steady hubs of its own. Reflects the people and places around it.",
  "summary": "Reflectors have no colored-in centers. They're about one in a hundred people. They take in and reflect everyone around them, which makes them a clear mirror for the health of a group or place. For big decisions, their strategy is to wait about a month, a full Moon cycle. When life is going well, the feeling is surprise.",
  "works": "With nothing fixed, a Reflector samples everything around it. That can feel different from one day to the next.\n\nThe Moon's monthly cycle is the one steady rhythm. More under [Authority](#authority).",
  "working": "This happens when they're in the right place with the right people, and take their time over big decisions.\n\nIt shows up as surprise: life keeps delighting them.",
  "notworking": "This happens when they're in places or with people that don't suit them, or rush a big decision.\n\nIt shows up as disappointment, and the feeling of having become whatever the room was. The feeling is a signal, pointing back to a better setting, or more time."
 }
};

export const AUTHTXT: Record<string, AuthText> = {
 "Emotional": {
  "glance": "Clarity comes over time, once the emotional wave has settled.",
  "summary": "Emotional authority belongs to anyone whose Solar Plexus is colored in, about half of people. Feelings move in waves, so how you feel about a choice today may change tomorrow. The truth shows up as a calm, steady clarity after riding the wave. There's rarely truth in the heat of the moment.",
  "feels": "A yes can feel exciting one day and flat the next. Neither is the final answer.\n\nOver days, sometimes longer, a quieter feeling settles in. That steady feeling is the one to trust.",
  "timing": "Big choices tend to go better with time: sleeping on it, sometimes many times. Small ones need less.\n\nPeople around you may want a fast answer. \"I'll come back to you\" is a full answer.",
  "mixups": "Deciding at the top of a high or the bottom of a low. Both feel certain in the moment.\n\nWaiting for perfect calm. Clarity here is a steady sense, not the absence of all feeling."
 },
 "Sacral": {
  "glance": "A gut response in the moment: a sound before a thought.",
  "summary": "Sacral authority belongs to Generators and Manifesting Generators whose Solar Plexus isn't colored in. The body answers right away, often with a sound like \"uh-huh\" or \"unh-unh\". That gut response knows what you have energy for. It works best answering something in front of you, like a question someone asks. More under [Types](#types).",
  "feels": "A pull toward something, or a pulling back, felt in the belly. It often comes out as a sound before you've thought about it.\n\nIt's simple: yes or no, not maybe.",
  "timing": "It answers in the moment. If there's no clear response, it's usually a no for now.\n\nYes-or-no questions from someone you trust can help it speak.",
  "mixups": "Letting the mind argue the gut out of its answer.\n\nAsking it open questions like \"What now?\" It answers yes or no, to something real."
 },
 "Splenic": {
  "glance": "A quiet, instant knowing that speaks once.",
  "summary": "Splenic authority comes from a colored-in Spleen when the Solar Plexus and Sacral aren't. It's an instinct for what's safe and healthy, right now. It speaks once, quietly, and doesn't repeat. If you miss it, it doesn't argue. Trusting that first hit, even without a reason, is the practice.",
  "feels": "A quick sense: this is fine, or something's off. It can show up as a feeling in the body, a hunch or a sudden knowing.\n\nIt's quiet, so loud thoughts easily drown it out.",
  "timing": "Right now, in the moment. It's about this moment, not the future.\n\nIt can change from one moment to the next, because the situation has changed.",
  "mixups": "Waiting for it to say it again. It speaks once.\n\nAsking the mind to explain it first. The reason often makes sense later."
 },
 "Ego": {
  "glance": "What you really want, heard in what you say or do.",
  "summary": "Ego authority comes from a colored-in Heart that connects to the Throat or the G. It's about what you want, and what's in it for you. That isn't selfish. It's how your willpower knows what it can commit to. The answer often shows up in what you hear yourself say, or what you feel driven to do.",
  "feels": "A clear \"I want this\" or \"I don't\". It's about your own heart, not what others need from you.\n\nPromises made from it tend to be ones you can keep.",
  "timing": "Often in the moment, as you speak or act. Listening to your own words is part of it.\n\nIf your will isn't in it, the commitment tends to fall apart later.",
  "mixups": "Saying yes to please people, then running out of will to follow through.\n\nThinking wanting something for yourself is wrong. Here it's the guide."
 },
 "Self-Projected": {
  "glance": "Hearing yourself talk it through, and noticing what rings true.",
  "summary": "Self-Projected authority comes from a colored-in G connected straight to the Throat, in Projectors. Your direction is heard in your own voice. Talking a choice through with someone you trust lets you hear what sounds like you. They aren't there to advise. They're there to listen.",
  "feels": "As you talk, some words feel true and some feel flat. The true ones point the way.\n\nIt's about identity and direction: does this feel like me?",
  "timing": "It comes out in conversation, sometimes over several talks.\n\nIt isn't in the moment of a single thought, but in hearing it said out loud.",
  "mixups": "Taking the listener's advice instead of your own words.\n\nThinking it through silently. It needs to be said out loud."
 },
 "Mental": {
  "glance": "Clarity through talking with trusted people in the right place.",
  "summary": "Mental authority, also called outer or environmental authority, is for Projectors whose colored-in centers are only the Head, Ajna and Throat. There's no inner voice to decide with. Clarity comes from talking with trusted people, in places that feel right, and hearing yourself. Your surroundings matter a lot.",
  "feels": "Being able to see a choice clearly from the outside. Talking with different trusted people helps it come together.\n\nThe right place often feels calm and easy.",
  "timing": "Over time and several conversations. It isn't rushed.\n\nChanging the place you're in can change how clear things feel.",
  "mixups": "Letting other people decide for you. They're a sounding board, not the authority.\n\nTrusting the mind on its own to make the call."
 },
 "Lunar": {
  "glance": "About a month: letting the Moon's cycle show the answer.",
  "summary": "Lunar authority is for Reflectors, who have no centers colored in. The Moon moves through all 64 gates in about 29 days, and a Reflector feels the whole range over that time. Big choices go better with that full cycle, talking them over with different people along the way.",
  "feels": "How a choice feels will change through the month. Seeing it from all those angles is the point.\n\nSlowly, a sense of what's right settles in.",
  "timing": "About a month for big decisions. Small ones need much less.\n\nThe people and places you're with during that time shape what you see.",
  "mixups": "Feeling rushed by people who decide quickly.\n\nThinking the changing feelings mean you can't decide. They're the process."
 }
};

export const CTRTXT: Record<string, CenterText> = {
 "Head": {
  "summary": "The Head is where questions and inspiration come from. It puts pressure on the mind to figure things out. It doesn't have answers itself. It hands the questions to the Ajna below it. What matters is which questions are worth your time.",
  "defined": "You have a steady way of being inspired, and your own set of questions you keep coming back to. Other people may find your ideas stimulating.\n\nThe pressure to think is constant, and it's yours. It isn't a problem to solve. It's how your mind stays busy.",
  "undefined": "You pick up the questions in the room, and they can feel louder in you than in the person who brought them. Your own few lit gates give you some steady themes.\n\nThe trap is chasing questions that aren't yours. The gift is knowing which inspiration is worth following.",
  "open": "Nothing here is fixed, so you take in whatever people around you are thinking about. That can bring wide inspiration, and it can also bring a mind full of other people's questions.\n\nIt often helps to ask whether a question is yours before trying to answer it."
 },
 "Ajna": {
  "summary": "The Ajna is how you make sense of things: sorting, comparing, forming opinions. It turns the Head's questions into ideas and concepts. It's great for thinking things through. It isn't built to make your life decisions, which is the job of your [Authority](#authority).",
  "defined": "You have a fixed way of processing: logical, abstract or insight-led, and it stays the same. Others can count on how you think.\n\nThe risk is getting attached to your own certainty. Your way of thinking is reliable, though other ways exist too.",
  "undefined": "You can see many sides of a question and take on other people's ways of thinking. That makes you open-minded and often wise about ideas.\n\nThe trap is pretending to be certain to fit in. Not being sure is often your strength.",
  "open": "Your mind is very flexible and doesn't hold one fixed view. You can understand almost anyone's way of thinking.\n\nPressure to have a firm opinion can feel uncomfortable. Being open is a real gift here, not a lack."
 },
 "Throat": {
  "summary": "The Throat is where things come out: words, actions, expression. Every other center is trying to reach it. What's connected to your Throat shapes how you speak and how you act. It's the center of being seen and heard.",
  "defined": "You have a consistent voice. People recognize how you speak and what you tend to talk about. Depending on what connects to it, you may speak with authority, insight or feeling.\n\nWhen your voice comes out at the right moment, people tend to listen.",
  "undefined": "Your voice changes with the people around you. You may talk more, or differently, depending on who's there.\n\nThe trap is talking to get attention or fill silence. Things you say when invited, or when the moment is right, tend to land better.",
  "open": "You can sound like the people you're with, and your voice can be very flexible. Being noticed may matter a lot to you.\n\nYour words tend to carry most when they come in response to something, rather than to break a silence."
 },
 "G": {
  "summary": "The G is about identity, direction and love. It's your sense of who you are and where you're going. It also holds how you love: yourself, others and life. It sits in the middle of the chart.",
  "defined": "You have a steady sense of who you are and where you're heading. Others may look to you for direction.\n\nThat doesn't mean you always know the next step. It means your core stays the same as life changes around you.",
  "undefined": "Your sense of self shifts with the people and places around you. This isn't weakness. It's how you take in many ways of being.\n\nPlaces matter a lot for you. The right place tends to bring the right people, and the right direction.",
  "open": "You may often ask \"Who am I?\" or \"Where am I going?\" The answer changes with your surroundings, and that's how you're built.\n\nPaying attention to how places and people feel to you is one of your best guides."
 },
 "Heart": {
  "summary": "The Heart, also called the Ego, is willpower and self-worth. It's the part that makes promises and keeps them, and that knows its own value. It's also about the material world: money, work and getting paid fairly. It works hard, then needs rest.",
  "defined": "You have steady willpower. You can make promises and keep them, and you tend to know your worth.\n\nYour will works best with real rest between efforts. Pushing without breaks wears it down.",
  "undefined": "You can feel the willpower of people around you, and it may push you to prove yourself. You don't have anything to prove.\n\nThe trap is over-promising. Promising less, and only what you really want to do, tends to feel much better.",
  "open": "You have no steady willpower, so pushing yourself on will alone rarely works. You may feel you have to prove your worth, again and again.\n\nYour worth isn't something to earn. Letting go of proving it is often a relief."
 },
 "Spleen": {
  "summary": "The Spleen is instinct: quick, quiet knowing about what's safe and healthy, right now. It speaks once, in the moment, and doesn't repeat itself. It's also linked to health and the immune system. It looks after your well-being in the present.",
  "defined": "You have a steady sense of well-being and a reliable instinct. It speaks quietly, in the moment.\n\nIf your [Authority](#authority) is Splenic, that quiet first knowing is how you decide.",
  "undefined": "You're sensitive to how others feel, physically and emotionally. You can sense when someone is unwell.\n\nThe trap is holding on to things, people or situations that aren't good for you, out of fear of letting go.",
  "open": "You can be very sensitive to other people's health and fears. Being around someone who feels good can make you feel good too.\n\nIt often helps to notice which feelings of fear or comfort are actually yours."
 },
 "Sacral": {
  "summary": "The Sacral is life force: the energy to work, create and keep going. It answers with a gut response, often a sound like \"uh-huh\" or \"unh-unh\", before the mind decides. A colored-in Sacral makes someone a Generator or Manifesting Generator. More under [Types](#types).",
  "defined": "You have steady, renewable energy for things you respond to. When your gut says yes, the energy is there.\n\nWork you don't respond to drains you. Doing what lights you up, then sleeping when you're tired, keeps this energy healthy.",
  "undefined": "You don't have steady work energy of your own. You can borrow it from others and even amplify it, which can feel like having a lot.\n\nThe trap is not knowing when enough is enough. Resting before you're exhausted matters for you.",
  "open": "You take in the energy of people around you, sometimes more than they have themselves. Being around busy people can make you feel busy.\n\nYour body tends to know its limits before your mind does. Stopping early is often wiser than pushing through."
 },
 "Solar Plexus": {
  "summary": "The Solar Plexus is emotions, and they move in waves: up, down, and back again. It's also where feelings, moods, desire and sensitivity live. Clarity here comes with time, not in the moment. If it's colored in, your [Authority](#authority) is Emotional.",
  "defined": "You have your own emotional wave. Your feelings move through highs and lows, whatever is happening around you.\n\nBig decisions tend to go better when you wait through the wave until you feel calm and clear about them.",
  "undefined": "You feel other people's emotions, often more strongly than they do. You can be very empathic.\n\nThe trap is avoiding conflict or hard truths to keep the peace. It helps to ask, \"Is this feeling mine, or someone else's?\"",
  "open": "You take in every emotion in the room and can feel it strongly. Alone, you may feel calm and clear.\n\nTime alone helps you tell which feelings are yours. Your sensitivity can be a real gift for reading people."
 },
 "Root": {
  "summary": "The Root is pressure: the drive to get things going, and the stress that comes with it. It pushes energy up into the rest of the chart. It's the fuel for starting, moving and finishing. How you handle pressure shows up here.",
  "defined": "You have a steady way of handling pressure. Stress comes and goes in your own rhythm.\n\nYou may not feel rushed by others, and you can work steadily under pressure.",
  "undefined": "You feel pressure from people and situations around you, often more than they do. You may rush to get things done just to feel free of it.\n\nThe trap is hurrying to escape the pressure. Most things can wait more than they seem to.",
  "open": "You take in all the pressure around you and can feel it strongly. Deadlines and busy people can make you feel you're behind.\n\nTaking things at your own pace often makes the pressure easier. Very little is as urgent as it feels."
 }
};

export const DEFTXT: Record<string, DefText> = {
 "Single": {
  "glance": "All your colored-in centers join up as one.",
  "summary": "In Single definition, every colored-in center connects to the others in one unbroken group. About four in ten people have it. You tend to take things in and make sense of them on your own, in one go. You don't need anyone to feel complete.",
  "day": "Your thinking and feeling tend to come together quickly. You can process an experience alone and reach your own view.\n\nOthers may find you self-contained, even when you'd like company.",
  "others": "You enjoy people, but you don't depend on them to feel whole. That gives your relationships a free, easy quality.\n\nIt can help to remember that others may need more time, or more people, to get where you got alone."
 },
 "Split": {
  "glance": "Two separate groups of colored-in centers, with a gap between them.",
  "summary": "In Split definition, your colored-in centers form two groups that don't connect. Nearly half of people have it. You may feel a gap, as if something's missing. Other people often bridge it, which can feel like they \"complete\" you. A small split is easy to bridge. A wide one takes more.",
  "day": "You may take a little longer to process things, as if two parts of you are catching up with each other. That's normal for you.\n\nTime and conversation help the two halves meet.",
  "others": "People whose charts join your two groups can feel deeply familiar, or magnetic. That pull is real, and it's about the bridge, not always about the person.\n\nKnowing this can make relationships calmer. Feeling complete with someone doesn't mean you're incomplete alone."
 },
 "Triple split": {
  "glance": "Three separate groups, joined up by time and different people.",
  "summary": "In Triple split definition, your colored-in centers form three separate groups. About one in ten people have it. No single person bridges all three, so variety helps: different people, different places. Taking your time over decisions helps everything connect.",
  "day": "Being around many people, like in a café or a busy shop, can help your thoughts come together. Too long with one person can feel stuck.\n\nYou may take longer than others to reach a decision.",
  "others": "Different people bridge different gaps, so a wide circle suits you. No one person has to be everything.\n\nOthers might read your need for variety as restlessness. It's how you're built."
 },
 "Quadruple split": {
  "glance": "Four separate groups. Rare, and steady once it's had time.",
  "summary": "In Quadruple split definition, your colored-in centers form four separate groups. It's rare, well under one in a hundred people. It takes time and many different people for everything to connect. Once it has, you can be very steady and hard to sway.",
  "day": "Decisions and understanding come slowly, and that's fine. Rushing rarely works for you.\n\nOnce you're clear, you tend to stay clear.",
  "others": "Many different people each bridge a little. A large and varied circle tends to suit you.\n\nThose close to you may not understand your pace. Patience from both sides helps."
 },
 "None": {
  "glance": "No colored-in centers at all. This is the Reflector.",
  "summary": "No definition means no centers are colored in. This is the Reflector, about one in a hundred people. Nothing in you is fixed, so you take in and reflect the people and places around you. Where you live and who you're with matter a great deal. More under [Types](#types).",
  "day": "You can feel very different from one day to the next, depending on who you're with. That's not a lack of self. It's how you're made.\n\nTime alone helps you notice what's yours.",
  "others": "You can be a clear mirror for the health of a group or place. People may not realize how much of them you take in.\n\nThe right community makes a big difference to how you feel."
 }
};

export const PROF: { lines: Record<string, LineText>; profiles: Record<string, ProfileText> } = {
 "lines": {
  "1": {
   "glance": "Feels safe once the ground has been checked.",
   "summary": "Line 1 wants to know how something works before trusting it. Research isn't a hobby here. It's how this line settles. With solid ground under it, it becomes the steady one others lean on. Without it, there's a quiet unease that more confidence won't fix. Only more understanding does.",
   "first": "You likely know this about yourself: you want the facts first. Sources, details, how it works. Once you've done the digging, you feel sure, and that sureness is real because you earned it.\n\nBeing asked to act before you've looked can feel like standing on nothing. That isn't overthinking. It's how you get your footing.",
   "second": "Others often see you as someone who knows what they're talking about, sometimes before you feel that way yourself. People may treat you as the expert.\n\nWhen your footing is solid, that fits. When it isn't, being seen as the expert can feel exposing, and the pull is to go back and study more."
  },
  "2": {
   "glance": "Natural talent that grows best in time alone, until someone calls it out.",
   "summary": "Line 2 has gifts it didn't study for and often can't explain. It does its best work left alone, in its own space and rhythm. Other people tend to spot the gift before the 2 does, and they come knocking. The quiet is where the talent grows. The knock is how it gets used.",
   "first": "You may not see your own gifts clearly. Things come easily to you, so they don't feel special. You also need real time alone, not as a reward but as part of how you work. Too much company can leave you drained or scattered.\n\nWhen someone asks for what you do naturally, it can feel like an interruption. Often it's the right one. The calls worth answering are the ones your [Authority](#authority) says yes to.",
   "second": "Others see a talent in you that you don't fully see. They may invite you out to use it, which can feel like being pulled out of your cave.\n\nIt's also how the gift finds its people. Not every call is yours, though. Turning down the ones that don't fit protects the quiet the gift needs."
  },
  "3": {
   "glance": "Learns by doing it, getting it wrong, and finding what holds.",
   "summary": "Line 3 finds out what works by finding out what doesn't. Things break, plans change, relationships shift, and each time it learns something real. What looks like failure from outside is the method working. Over time this line becomes the person who knows, from experience, what actually holds up.",
   "first": "You learn by bumping into things. Reading about it rarely sticks. Trying it does. Some of what you try won't work, and you'll know fast. That isn't a flaw in you. It's how your knowing gets built.\n\nSelf-blame is the trap here. A \"mistake\" is usually just the next piece of information.",
   "second": "Others may see you as someone things happen to, or someone who keeps changing course. What they're seeing is the trial and error from the outside.\n\nOver time they also come to trust you, because you've been through it and can say what works and what doesn't."
  },
  "4": {
   "glance": "Life opens through the people you already know.",
   "summary": "Line 4 builds its life through friends, family and familiar faces. Work, love and chances tend to arrive through someone it already knows, not through strangers or cold applications. It's warm and has real influence in its circle. It also likes a stable base, so big changes go easier when the next place to land is ready.",
   "first": "You likely know your people matter more than strangers ever will. Your best chances come through someone who knows you: a friend's tip, a call from someone you used to work with. Reaching out cold rarely feels right.\n\nYou also like solid ground. Leaving one thing before the next is lined up can feel deeply unsettling. That isn't fear. It's how a 4 stays steady.",
   "second": "Others meet you as friendly, connected and easy to know. They feel the warmth before anything else, and your influence spreads through it: people listen because they know you.\n\nWhat they may not see is how much that circle holds you up, and how hard it is when it changes."
  },
  "5": {
   "glance": "People see a rescuer in you. Practical answers keep that fair.",
   "summary": "Line 5 carries other people's expectations. Strangers especially see someone who can fix things, before knowing much about them. When the 5 has a real, practical answer, its reputation grows. When the picture people built doesn't match, blame can land just as fast. Knowing which calls to step into protects both sides.",
   "first": "You may feel others are always expecting something from you, sometimes more than you offered. You're good at seeing what would help, in a practical way that works for many people. You also tend to keep a little distance, and that helps.\n\nKnowing when to step in and when to step back keeps people from building a picture of you that you never agreed to.",
   "second": "Others, often strangers, see someone who can save the day. It can be flattering and it can be a trap.\n\nWhen you deliver, your name travels. When their picture was off, the blame can land on you. A clean exit once the job is done keeps your reputation yours."
  },
  "6": {
   "glance": "Three acts: trying it all, stepping back to watch, then living the example.",
   "summary": "Line 6 lives in three acts. Until about 30, it learns by trying things, much like a 3. From about 30 to 50, it steps back and watches from a distance, healing and taking stock. After about 50, it comes back down and lives what it learned. Others look to it as an example.",
   "first": "You may feel a bit apart, watching life as much as living it. Early on you took knocks. Later you pulled back to think it all over. Many 6s carry a quiet sense of \"it'll make sense later\", and it usually does.\n\nYou're also sensitive to what's real and what isn't. Faking it rarely works for you.",
   "second": "Others see you as wise, steady or a little removed, even when you feel unsure inside. They look to you for how to live, often without saying so.\n\nBeing an example isn't something you set out to do. It shows in how you live once you've found your way."
  }
 },
 "profiles": {
  "1/3": {
   "glance": "Studies the ground, then tests it by living it.",
   "summary": "A 1/3 wants solid facts and then needs to try them for real. The 1 does the research. The 3 finds out whether it holds. Between them, this profile ends up with knowledge that's been both studied and lived. It's a hands-on expert, not a theorist.",
   "together": "The 1 says \"let me look into it first.\" The 3 says \"let me find out.\" You'll often research, try, hit a wall, then go back to the books with better questions.\n\nThat loop is the profile working, not going in circles."
  },
  "1/4": {
   "glance": "Builds a solid base, then shares it through people it trusts.",
   "summary": "A 1/4 needs firm footing and a trusted circle. The 1 studies until it feels sure. The 4 passes that knowing on to friends and familiar faces, who then open doors. The more solid the base, the more naturally it spreads. Shaky ground or a broken circle can unsettle both at once.",
   "together": "Your knowledge spreads through your people. When you know your stuff, your friends hear about it, and chances come back through them. Strangers rarely move you. Trusted voices do.\n\nBoth lines like stability, so a move, or a change in who you're close to, can hit harder than expected."
  },
  "2/4": {
   "glance": "A natural gift that wants time alone, in a life that comes through people.",
   "summary": "A 2/4 has talents it didn't study for and a deep need for its own space. Yet its life, its work and its chances arrive through people who already know it. The quiet is where the gift grows. Friends are how the gift gets found. The two halves pull against each other on purpose.",
   "together": "Your 2 wants the door closed. Your 4 has a whole network knocking. That push and pull is the design, not a problem to fix. Time alone recharges the talent. Time with your people gives it somewhere to go.\n\nOpportunities rarely come from strangers. They come through a friend who mentions you to their sister, or someone you used to work with who remembers what you're good at. Often someone sees your gift and invites you to use it, sometimes before you feel ready.\n\nWhat tends to help: time alone without guilt, and keeping the friendships warm. Not networking, just staying in touch with the people who already know you. The calls that fit tend to come through them."
  },
  "2/5": {
   "glance": "A private talent that others see as the one who can fix it.",
   "summary": "A 2/5 wants to be left alone with its gifts, yet strangers keep seeing a rescuer in it. The 2 needs quiet. The 5 draws people's hopes. When a call fits, it can step in, solve the problem and step back out. When it doesn't, the expectation can feel like a weight it never asked for.",
   "together": "You may feel both hidden and watched. You'd rather be left alone, yet people keep showing up expecting help. The calls worth answering are usually practical ones you can actually deliver.\n\nAfterwards the 2 wants to go back inside, and that retreat also protects the 5's reputation."
  },
  "3/5": {
   "glance": "Learns by trial and error, then turns lessons into practical fixes for others.",
   "summary": "A 3/5 finds out what works by living through what doesn't. Others see someone with answers, often before the 3/5 feels ready. Because its knowing comes from real experience, the fixes it offers are practical and tested. The risk is blame when an experiment fails in public. The reward is wisdom nobody can argue with.",
   "together": "Your 3 bumps into things. Your 5 gets watched while it happens. That can feel exposed.\n\nIt also means every lesson you live becomes something useful to others. Over time people trust your answers because they can see you earned them."
  },
  "3/6": {
   "glance": "Many lessons early, then some distance, then living what was learned.",
   "summary": "A 3/6 gets a double dose of trial and error early on, from both lines. Life can feel bumpy until around 30. Then the 6 steps back to watch and take stock. Later it comes back as someone whose wisdom was earned the hard way. The early chapters are part of the point.",
   "together": "Your 3 and the early years of your 6 both learn by trying, which makes your twenties eventful. The middle years bring a step back, where the lessons sink in.\n\nYou may feel two pulls all along: to jump in, and to watch from a distance. Both are part of the design."
  },
  "4/6": {
   "glance": "Lives through its people, and over time becomes someone they look up to.",
   "summary": "A 4/6 builds its life through a close circle, and others see a role model in it, even early on. The 4 brings warmth and connection. The 6 brings the three acts: trying, stepping back, then living by example. Friends often look to it for how things are done.",
   "together": "Your circle matters, and your circle watches you. The 6's middle years of stepping back can strain a 4 that likes being close to its people. Usually the friendships that matter survive the distance.\n\nLater, what you've learned shows in how you live, and your people notice."
  },
  "4/1": {
   "glance": "A steady, set path, carried through people and built on firm ground.",
   "summary": "A 4/1 is the only profile of its kind. It tends to follow one set course through life, steady and hard to shift. The 4 lives through its people. The 1 needs solid ground underneath. It bends less to circumstance than other profiles, which is why its [Incarnation Cross](#crosses) is the Juxtaposition kind.",
   "together": "Your 4 shares who you are through your people. Your 1 rests on a foundation others may not see. Together they make you consistent: what people know of you is what you are.\n\nChanging course can be hard. That same steadiness is your strength."
  },
  "5/1": {
   "glance": "Seen as the one with answers, and quietly built on solid research.",
   "summary": "A 5/1 draws people's hopes. Others see someone who can solve their problem. Under that sits a 1 that needs the facts nailed down. When the research is solid, its fixes hold up and its reputation grows. When it isn't, expectation can turn into blame. The homework is its protection.",
   "together": "Your 5 is what people expect. Your 1 is what holds it up. The more solid your groundwork, the safer it is to step into what people see in you.\n\nYour influence often reaches beyond your own circle, to people who don't know you yet."
  },
  "5/2": {
   "glance": "A natural gift others call on, and a strong pull to stay apart.",
   "summary": "A 5/2 is seen as a fixer, and carries a natural talent it may not see. People expect solutions from it, and its quiet gift often delivers them. It also needs time alone, and too many demands can wear it thin. Picking which calls to answer keeps both the gift and the reputation healthy.",
   "together": "Your 5 attracts people's needs. Your 2 just wants its own space. Either way, people come looking for you.\n\nThe gift works best when you step in for what's genuinely yours, then step back to recharge."
  },
  "6/2": {
   "glance": "Three acts of life, with a natural gift others are waiting to see.",
   "summary": "A 6/2 lives the three acts of the 6: trying, stepping back, then living by example. Underneath, a 2 carries talent it didn't study for. Others often see that gift before the 6/2 does. In the later chapters, the gift and the example come together. Many 6/2s feel a quiet sense of being here for something.",
   "together": "Your 6 watches from a distance. Your 2 needs time alone. You can seem private, even aloof, while others see a lot in you.\n\nOver time, people tend to call you out of your quiet, and the example you set comes from what you've lived."
  },
  "6/3": {
   "glance": "A life of trying, stepping back, and trying again, ending in hard-earned wisdom.",
   "summary": "A 6/3 has the 6's three acts plus the 3's trial and error all the way through. Life rarely runs in a straight line. Experiences keep reshaping it, even after the 6 steps back. That makes for a deep, lived wisdom. Others see someone who has been through a lot and come out wiser.",
   "together": "Your 6 wants to rise above and watch. Your 3 keeps pulling you back into the thick of it. That can feel unsettled.\n\nOver time, the mix gives you a view nobody can teach: you've seen life from the roof and from the ground."
  }
 }
};

export const CHAN: Record<string, ChanText> = {
 "1-8": {
  "glance": "Showing what's possible just by being openly, creatively yourself.",
  "summary": "The 1-8 joins a deep creative drive to a voice that wants to share it. It doesn't follow trends. It makes something original and puts it out there, and that becomes an example for others. Its influence comes from being itself, not from persuading.",
  "does": "There's a steady push to express something that's yours alone: an idea, a style, a way of doing things. It wants to be seen, not to be famous, but because it's meant to contribute something new.",
  "working": "It's working when you make what's yours and let people find it. Others feel permission to be themselves around it.\n\nIt struggles when it tries to fit in or waits for approval. Then the push turns into frustration."
 },
 "2-14": {
  "glance": "A strong sense of direction, with the energy and resources to follow it.",
  "summary": "The 2-14 joins your inner sense of direction to the Sacral's working energy. It often has a feel for where things are heading and the power, money or means to move there. When its energy follows the right direction, things tend to fall into place for it and for others.",
  "does": "It's like a compass wired to an engine. The 2 knows which way. The 14 brings the fuel: effort, resources, money. It tends to be good at putting energy into the right work.",
  "working": "It's working when your effort goes where it feels right, not just where it pays. Resources then tend to follow.\n\nIt struggles when the energy gets spent on work that doesn't fit. That can feel like running hard in the wrong direction."
 },
 "3-60": {
  "glance": "Energy for change that switches on in its own time.",
  "summary": "The 3-60 joins pressure from the Root to the Sacral's power to start new things. It brings change, often something new to the world. It works in pulses: long quiet stretches, then sudden bursts when the time is right. The waiting can feel heavy, and the waiting is part of it.",
  "does": "This channel carries the energy to begin something new out of a muddle. It doesn't run steadily. It's either on or off, and you can't force the switch.",
  "working": "It's working when the quiet stretches are accepted as part of the rhythm. When it switches on, real change comes through.\n\nIt struggles with frustration or low moods in the off times. Those moods tend to pass when the next pulse arrives."
 },
 "4-63": {
  "glance": "A mind that doubts, questions, and tests answers until they make sense.",
  "summary": "The 4-63 joins the Head's pressure to question to the Ajna's drive to find answers. It's the logical mind: spotting what doesn't add up and working out a formula that does. Doubt is its starting point, not a flaw. The answers it finds are best shared, since they rarely settle its own doubts.",
  "does": "It looks at patterns and asks, \"Is this right? Will it hold in the future?\" Then it builds an answer that can be tested.",
  "working": "It's working when its answers get offered to others, where they're useful.\n\nIt struggles when the doubt turns inward, onto your own life. Then the mind keeps asking questions it can't settle on its own."
 },
 "5-15": {
  "glance": "Living in rhythm: steady habits that keep life flowing.",
  "summary": "The 5-15 joins the Sacral's fixed rhythms to the G's love of the human flow. It tends to have its own timing for eating, sleeping and working, and it can set the rhythm for those around it. When its rhythm is respected, life tends to move with ease.",
  "does": "It brings a natural rhythm, like a heartbeat. Habits matter here, and so does being in step with the bigger flow of life and people.",
  "working": "It's working when you keep to your own timing. Others often fall into step with you.\n\nIt struggles when you're forced into someone else's schedule. Then nothing feels quite right."
 },
 "6-59": {
  "glance": "Breaking down the walls between people to create closeness.",
  "summary": "The 6-59 joins the Sacral's drive to bond with the Solar Plexus's emotional wave. It's about intimacy, from friendship to romance to having children. It has a strong pull to get close and break through barriers. Because it runs on emotion, timing matters: closeness grows best when the feelings have had time to settle.",
  "does": "It brings an energy that gets past people's defenses. It can create close bonds quickly, and it can be felt by others as very magnetic.",
  "working": "It's working when closeness comes with clarity, not in the heat of the moment.\n\nIt struggles when it rushes in, or when the emotional wave makes it act before the feelings have settled."
 },
 "7-31": {
  "glance": "Leadership that others invite and trust to point the way.",
  "summary": "The 7-31 joins the G's sense of direction to the Throat's voice of influence. It's a leader who guides by seeing where things are heading next. It's at its best when chosen or invited, not when grabbing the lead. Its influence lasts as long as people feel it serves them.",
  "does": "It can see the direction a group needs and say it in a way people follow. It's about guiding, not controlling.",
  "working": "It's working when people ask for its lead. Its voice then carries real weight.\n\nIt struggles when it leads without being invited, which often brings pushback."
 },
 "9-52": {
  "glance": "Deep, steady focus that can stay with one thing.",
  "summary": "The 9-52 joins the Root's stillness to the Sacral's energy for detail. It's the power to concentrate: to sit with one task and see it through. It can look calm from outside while working hard inside. Too many things at once tends to wear it down.",
  "does": "It brings the ability to stay put and focus, especially on details. It fuels long, patient work.",
  "working": "It's working when the focus goes to one thing that matters.\n\nIt struggles when it's scattered, or when it has nothing worth focusing on. Then it can turn into restlessness."
 },
 "10-20": {
  "glance": "Being fully yourself, right now, and saying so.",
  "summary": "The 10-20 joins the G's love of being yourself to the Throat's voice in the present moment. It expresses who you are as you are. It carries a commitment to living by its own principles. Others may find it inspiring or surprising, since it rarely acts to please.",
  "does": "It brings the voice of \"this is me, now.\" Your behavior is your message.",
  "working": "It's working when you act from your own values and let that speak.\n\nIt struggles when it tries to act the way others expect. That feels false, and it shows."
 },
 "10-34": {
  "glance": "Following your own convictions, with the energy to act on them.",
  "summary": "The 10-34 joins the G's love of being yourself to the Sacral's raw power. It does its own thing, its own way. It doesn't need anyone's permission and isn't trying to lead. Its strength comes from staying true to what it believes, even when others go another way.",
  "does": "It brings a powerful, independent energy. It's busy with its own path and often doesn't notice how strong it looks to others.",
  "working": "It's working when you trust your own convictions and act on them.\n\nIt struggles when it's pushed to follow others' ideas. Then the power has nowhere honest to go."
 },
 "10-57": {
  "glance": "An instinct for how to live and move with grace.",
  "summary": "The 10-57 joins the G's love of being yourself to the Spleen's instinct. It knows, in the moment, how to behave to stay safe and well. It often has a strong sense of beauty and form. Trusting that first instinct tends to serve it better than thinking it over.",
  "does": "It brings an intuitive sense of what's right for you, in your body and in your behavior. It can show up as creativity, taste or simply knowing what to do.",
  "working": "It's working when it trusts its first instinct.\n\nIt struggles when it second-guesses itself. The instinct speaks once and doesn't repeat."
 },
 "11-56": {
  "glance": "A curious mind that turns ideas and experiences into stories.",
  "summary": "The 11-56 joins the Ajna's flow of ideas to the Throat's love of telling. It's curious about everything and loves to share what it finds, often as stories. Its stories don't have to be facts to be valuable. Their gift is to stimulate and inspire others.",
  "does": "It brings ideas, images and stories, and the urge to share them. It's a teacher and storyteller.",
  "working": "It's working when the stories are offered to people who want to hear them.\n\nIt struggles when the stories are treated as plans or instructions for its own life."
 },
 "12-22": {
  "glance": "Expressing feelings with grace, when the mood is right.",
  "summary": "The 12-22 joins the Solar Plexus's emotional wave to the Throat's voice. It's deeply social and expressive, and its words can move people. It depends on mood: in the right mood it's warm and charming, in the wrong one it may not want to talk. Timing is everything for it.",
  "does": "It brings emotional expression, through words, art, music or presence. It can change how people feel.",
  "working": "It's working when you speak or create when the mood is right.\n\nIt struggles when forced to be social on demand. Then it can come across cold, or not at all."
 },
 "13-33": {
  "glance": "The listener who remembers, then tells the story when it's time.",
  "summary": "The 13-33 joins the G's gift for listening to the Throat's gift for retelling. People often open up to it. It takes in stories and experiences, reflects on them, and later shares what was learned. Often it needs time alone to make sense of what it's heard.",
  "does": "It brings the role of witness and memory keeper. It gathers experiences, its own and other people's, and draws lessons from them.",
  "working": "It's working when it has time to reflect before sharing. Its insight then lands well.\n\nIt struggles when it tells too soon, or holds on to other people's secrets for too long."
 },
 "16-48": {
  "glance": "Talent that becomes mastery through depth and practice.",
  "summary": "The 16-48 joins the Spleen's depth to the Throat's skill in action. It's the path to mastery: a talent that grows through repetition and study. It often has a strong sense of what good work looks like. The fear of not knowing enough can hold it back, and practice is what eases that fear.",
  "does": "It brings depth and skill, and the drive to keep refining. It's the craftsperson's channel.",
  "working": "It's working when it practices and lets the skill show.\n\nIt struggles when it waits to feel ready, or doubts its depth before trying."
 },
 "17-62": {
  "glance": "Organizing details into clear opinions others can follow.",
  "summary": "The 17-62 joins the Ajna's opinions to the Throat's eye for detail. It sorts facts into a picture that makes sense, and it can explain that picture clearly. People often come to it for its view. Its opinions land best when they're asked for.",
  "does": "It brings the ability to organize information and to explain it in an orderly way.",
  "working": "It's working when its opinions are invited, and when it stays open to adjusting them.\n\nIt struggles when it offers opinions unasked, which can feel to others like being corrected."
 },
 "18-58": {
  "glance": "Seeing what could be better, and the drive to fix it.",
  "summary": "The 18-58 joins the Root's drive with the Spleen's eye for what's off. It's the critic and improver: it can't help noticing what doesn't work. That gift helps things get better. Aimed at people without being asked, it can feel like judgment.",
  "does": "It brings a love of life and the urge to perfect it. It spots flaws in systems, work and patterns.",
  "working": "It's working when the critique goes to things that can be improved, and when it's invited.\n\nIt struggles when the critique turns on people, or on yourself."
 },
 "19-49": {
  "glance": "Sensing what people need, and what's fair between them.",
  "summary": "The 19-49 joins the Root's sensitivity to needs with the Solar Plexus's sense of principle. It's tuned to belonging: food, shelter, touch, and who's in or out. It cares deeply about fairness in relationships. Because it's emotional, its decisions about people are best made over time.",
  "does": "It brings sensitivity to what others need and the principles that hold a group together.",
  "working": "It's working when it gives support with clear agreements about what's fair.\n\nIt struggles when it gives too much, or cuts people off in an emotional low."
 },
 "20-34": {
  "glance": "Energy that goes straight into action, right now.",
  "summary": "The 20-34 joins the Sacral's power to the Throat, so energy turns straight into doing. It's busy and capable, often doing the thing while others are still talking. It doesn't wait for anyone to switch it on. It works best when it's busy with something it actually responds to.",
  "does": "It brings the energy to act in the moment. People often see it as very capable, always busy, always getting things done.",
  "working": "It's working when its busyness goes to things it really wants to do.\n\nIt struggles when it's busy for the sake of being busy. Then the energy burns out on the wrong things."
 },
 "20-57": {
  "glance": "Knowing in the moment, and saying it out loud.",
  "summary": "The 20-57 joins the Spleen's instinct to the Throat's voice in the present. It senses what's right, right now, and can say it immediately. Its first impressions are often accurate. It works best when it trusts that quick knowing instead of explaining it away.",
  "does": "It brings instant intuitive clarity. It can sense danger, truth or health in a moment.",
  "working": "It's working when it trusts and voices that first knowing.\n\nIt struggles when the mind overrides it. The instinct speaks once and quietly."
 },
 "21-45": {
  "glance": "Managing resources and taking charge of the material side of life.",
  "summary": "The 21-45 joins the Heart's willpower to the Throat's voice of authority. It's about money, possessions and being in control of them. It does well in charge of resources, for itself or a group. It likes to be its own boss, and it tends to resist being managed.",
  "does": "It brings the drive to manage, provide and control the material world: budgets, property, business.",
  "working": "It's working when it's in charge of its own domain and provides well for others.\n\nIt struggles when it's micromanaged, or when it tries to control more than its share."
 },
 "23-43": {
  "glance": "Sudden insights, and the work of explaining them clearly.",
  "summary": "The 23-43 joins the Ajna's flashes of insight to the Throat's voice. It knows things in a new way, often before others are ready to hear them. Explaining that knowing takes timing and patience. When the timing is right, it can change how people see things.",
  "does": "It brings individual insight: the \"aha\" that comes out of nowhere. It often sees what others haven't yet.",
  "working": "It's working when it shares an insight once someone is ready to hear it.\n\nIt struggles when it explains too soon. Then it can feel misunderstood, or labeled odd."
 },
 "24-61": {
  "glance": "A mind that keeps turning things over, looking for inner truth.",
  "summary": "The 24-61 joins the Head's pressure to know to the Ajna's habit of returning to a thought. It ponders the unknown, looking for insight that makes things click. That insight can't be forced. It tends to arrive when the mind is quiet, not when it's chasing.",
  "does": "It brings deep thinking about life's bigger questions. It's always mulling something over.",
  "working": "It's working when it lets thoughts come and go until the insight arrives.\n\nIt struggles when it can't switch off, chasing answers it can't reach on its own."
 },
 "25-51": {
  "glance": "Courage to go first and take the leap into the unknown.",
  "summary": "The 25-51 joins the G's open heart to the Heart's competitive spirit. It's drawn to be first, to take risks and to face what scares others. Its shocks and challenges become growth, for itself and for others. Through it all, it keeps an open heart.",
  "does": "It brings courage, competitiveness and the will to jump in. It can shake people awake.",
  "working": "It's working when the courage goes to its own leaps, and shocks become learning.\n\nIt struggles when it competes for the sake of winning, or pushes others into leaps that aren't theirs."
 },
 "26-44": {
  "glance": "Remembering what worked before and persuading people toward it.",
  "summary": "The 26-44 joins the Spleen's memory of patterns to the Heart's gift for persuasion. It knows what people want and can sell it well. It brings lessons from the past into the present. Used honestly, it serves the group. Used to impress, it can lose people's trust.",
  "does": "It brings instinct for what will work, based on what has worked, and the skill to communicate it.",
  "working": "It's working when it sells what's true and useful.\n\nIt struggles when it tells people what they want to hear just to win them over."
 },
 "27-50": {
  "glance": "Caring for others and holding the values that keep them safe.",
  "summary": "The 27-50 joins the Sacral's energy to care with the Spleen's sense of what keeps people safe. It's the caretaker. It looks after family, community and the vulnerable. It holds the values and rules that protect people. It can give too much, so caring for itself matters too.",
  "does": "It brings nurturing energy and a strong sense of responsibility for others' well-being.",
  "working": "It's working when the caring is balanced with care for itself.\n\nIt struggles when it gives until it's empty, or feels responsible for everyone."
 },
 "28-38": {
  "glance": "Fighting for what gives life meaning.",
  "summary": "The 28-38 joins the Root's drive to push through with the Spleen's need for purpose. It's stubborn in the best sense: it keeps going when something matters. It's searching for what makes life worth living. The struggle itself often shows it what that is.",
  "does": "It brings determination and the drive to find meaning. It can take on challenges others would walk away from.",
  "working": "It's working when the struggle is for something that really matters to it.\n\nIt struggles when it fights battles that aren't worth the cost."
 },
 "29-46": {
  "glance": "Saying yes to an experience, then seeing it all the way through.",
  "summary": "The 29-46 joins the Sacral's commitment to the G's love of being in the body. When it says yes, it goes all the way in. That commitment often leads to success where others gave up, and to discoveries along the way. Because it commits so fully, what it says yes to matters.",
  "does": "It brings total commitment to an experience, and deep presence in the body while living it.",
  "working": "It's working when the yes is a true yes. Then it's carried through to the end.\n\nIt struggles when it says yes too easily and ends up stuck in things it never wanted."
 },
 "30-41": {
  "glance": "Longing for new experiences, and the feelings that come with them.",
  "summary": "The 30-41 joins the Root's pressure to start something new with the Solar Plexus's longing. It dreams and imagines. It's driven by a hunger for experiences, and the feelings they bring. Not every dream needs to come true. Some are best enjoyed as dreams.",
  "does": "It brings desire and imagination: the wish for something more. It fuels new experiences.",
  "working": "It's working when it's clear which desires to act on. Emotional clarity takes time here.\n\nIt struggles when it jumps into every desire, expecting it to be the one."
 },
 "32-54": {
  "glance": "Ambition with an instinct for what will last.",
  "summary": "The 32-54 joins the Root's drive to rise with the Spleen's sense of what will survive. It wants to move up, at work or in the world, and it has a nose for what's worth building on. It does well when its ambition is recognized by the right people.",
  "does": "It brings ambition and the instinct for lasting value. It works hard to get somewhere.",
  "working": "It's working when its effort goes to something that lasts, with people who see its worth.\n\nIt struggles when ambition runs ahead of instinct, or when its work goes unrecognized."
 },
 "34-57": {
  "glance": "Instinct and raw power, ready to act the moment it counts.",
  "summary": "The 34-57 joins the Sacral's raw power to the Spleen's instinct. It senses what to do and has the energy to do it, fast. It's built for responding in the moment, especially when safety is at stake. Its power works best guided by that quiet instinct, not by plans.",
  "does": "It brings quick, instinctive action. It often moves before it can explain why, and the move turns out to be right.",
  "working": "It's working when it responds to the moment and trusts its instinct.\n\nIt struggles when it overrides that instinct with a plan, or holds back when it senses it's time to move."
 },
 "35-36": {
  "glance": "Hungry for new experiences, and the wisdom they leave behind.",
  "summary": "The 35-36 joins the Solar Plexus's emotional wave to the Throat's urge for change. It wants to try everything at least once. It moves from experience to experience, and each one leaves wisdom behind. Emotional timing helps it pick which ones are worth the ride.",
  "does": "It brings the drive for variety and new experience. Over time it gains a lot of lived knowledge.",
  "working": "It's working when it waits for emotional clarity before diving in.\n\nIt struggles when it rushes into new things, then feels let down when they don't match the hope."
 },
 "37-40": {
  "glance": "Fair give and take that holds a community together.",
  "summary": "The 37-40 joins the Solar Plexus's warmth to the Heart's willpower. It's the bargain that keeps a family or community working: I give, you give. It cares about fairness, loyalty and support. It needs rest and appreciation in return for its work.",
  "does": "It brings the energy to provide and the expectation of fair return. It builds strong communities through agreements.",
  "working": "It's working when the deal is clear and fair on both sides.\n\nIt struggles when it gives without the deal being honored. That can turn into resentment."
 },
 "39-55": {
  "glance": "Strong moods that fuel creativity and stir the spirit.",
  "summary": "The 39-55 joins the Root's pressure to provoke with the Solar Plexus's deep moods. It feels a lot, from high to low. It can stir people up, often without meaning to. Its moods are a source of creativity, especially in the lows, rather than something to fix.",
  "does": "It brings emotional depth, provocation and creativity. It can wake up feeling in others.",
  "working": "It's working when the moods are allowed and turned into creative work.\n\nIt struggles when the moods are blamed on other people, or taken as signs that something is wrong."
 },
 "42-53": {
  "glance": "Starting cycles and seeing them through to the end.",
  "summary": "The 42-53 joins the Root's pressure to begin with the Sacral's drive to finish. It lives in cycles: beginnings, middles and endings. It's good at completing what it starts, when the start was right. Its wisdom comes from looking back at a finished cycle.",
  "does": "It brings the energy to start new phases and carry them to completion.",
  "working": "It's working when it starts things in response to life, not out of pressure.\n\nIt struggles when it starts too many things, or quits halfway."
 },
 "47-64": {
  "glance": "A mind that makes sense of the past, one image at a time.",
  "summary": "The 47-64 joins the Head's swirl of images to the Ajna's drive to make sense of them. It reviews experiences, turning them over until they click. Confusion is part of the process. Clarity tends to arrive suddenly, after the mind has let go.",
  "does": "It brings mental activity about what has happened, sorting memories and images into meaning.",
  "working": "It's working when it lets the confusion be, until the sense arrives.\n\nIt struggles when it forces an answer, or tries to use its sense of the past to make decisions."
 }
};

export const GATETXT: Record<string, GateText> = {
 "1": {
  "name": "Self-Expression",
  "glance": "A creative push to express something that's yours alone.",
  "summary": "Gate 1 carries the drive to create in your own way. It isn't about following trends. It's about putting something original into the world, at its own pace.",
  "brings": "A steady creative pulse, and a need for that work to be authentic.\n\nOn track, it inspires others simply by being itself. Off track, trying to create on demand can feel flat and forced."
 },
 "2": {
  "name": "Direction",
  "glance": "A quiet inner sense of which way to go.",
  "summary": "Gate 2 holds a sense of direction, often without knowing why. It's receptive: it knows the way more than it pushes. It also tends to attract the resources needed to get there.",
  "brings": "An inner compass, and a feel for where things are heading.\n\nOn track, others follow its lead without being told to. Off track, it can feel lost when it tries to take a direction that isn't its own."
 },
 "3": {
  "name": "Ordering",
  "glance": "Making something new out of confusion.",
  "summary": "Gate 3 is about beginnings that start messy. It brings energy to turn chaos into a new order, often something nobody has done before. The difficulty at the start is part of it.",
  "brings": "Energy for innovation and change, which comes in its own time.\n\nOn track, it brings something genuinely new. Off track, the waiting can feel like frustration or low mood."
 },
 "4": {
  "name": "Answers",
  "glance": "A mind that comes up with answers and formulas.",
  "summary": "Gate 4 produces answers: logical explanations for how things work. They're best treated as possibilities to test, not certainties. Its answers often help other people more than its owner.",
  "brings": "Quick, reasoned answers to questions.\n\nOn track, its answers get tested and shared. Off track, it can cling to an answer that hasn't been checked."
 },
 "5": {
  "name": "Rhythm",
  "glance": "Fixed habits and timing that keep life steady.",
  "summary": "Gate 5 likes things done in their own rhythm: meals, sleep, routines. That rhythm is a source of trust and steadiness. Disrupting it can throw everything off.",
  "brings": "Consistency and natural timing.\n\nOn track, its rhythm steadies the people around it. Off track, being pushed off schedule feels deeply uncomfortable."
 },
 "6": {
  "name": "Friction",
  "glance": "Emotional boundaries that decide who gets close.",
  "summary": "Gate 6 manages closeness. It opens or closes the door to intimacy, depending on emotional clarity. A little friction is how it protects what matters.",
  "brings": "Sensitivity to who and what to let in.\n\nOn track, it allows closeness at the right time. Off track, it can create conflict when moods are high."
 },
 "7": {
  "name": "Leadership",
  "glance": "Guiding a group by seeing where it needs to go.",
  "summary": "Gate 7 is the role of the leader who points the way. It works best when the group wants to be led. Its influence comes from knowing the direction, not from control.",
  "brings": "A sense of the direction a group needs.\n\nOn track, people are glad to follow. Off track, leading without being asked brings pushback."
 },
 "8": {
  "name": "Contribution",
  "glance": "Showing others what's possible by being an example.",
  "summary": "Gate 8 wants to contribute something that's its own. It leads by showing, not telling. It helps others see their own originality.",
  "brings": "The urge to make a unique contribution and share it.\n\nOn track, its example inspires. Off track, trying to fit in makes it feel unseen."
 },
 "9": {
  "name": "Focus",
  "glance": "Energy to focus on details and see them through.",
  "summary": "Gate 9 brings concentration on the small things that add up. It can stay with a task and notice every detail. Too many tasks at once wears it down.",
  "brings": "Steady focus and patience for detail.\n\nOn track, small efforts build into something big. Off track, it can get lost in details that don't matter."
 },
 "10": {
  "name": "Self-Love",
  "glance": "Being yourself, and loving that.",
  "summary": "Gate 10 is about behaving in a way that's true to who you are. It's the basis of self-love. It doesn't have to match anyone's idea of how to be.",
  "brings": "A natural way of being yourself.\n\nOn track, it gives others permission to be themselves too. Off track, acting to please others feels false."
 },
 "11": {
  "name": "Ideas",
  "glance": "A flow of ideas, images and possibilities.",
  "summary": "Gate 11 is full of ideas. Most of them are for sharing and inspiring, not for acting on. Its gift is stimulating other people's imagination.",
  "brings": "Creativity and a love of possibilities.\n\nOn track, its ideas inspire others. Off track, treating every idea as a plan can lead to confusion."
 },
 "12": {
  "name": "Caution",
  "glance": "Speaking with care, when the mood is right.",
  "summary": "Gate 12 knows the power of words and uses them carefully. Its timing depends on mood. In the right moment, what it says can move people deeply.",
  "brings": "Careful, often beautiful expression.\n\nOn track, it speaks when the time is right. Off track, forcing words can come out wrong or cold."
 },
 "13": {
  "name": "The Listener",
  "glance": "Hearing people's stories and keeping them safe.",
  "summary": "Gate 13 is a natural listener. People tell it things. It holds stories and secrets and learns from them, sharing the lessons when the time comes.",
  "brings": "A gift for listening and remembering.\n\nOn track, people feel heard and safe. Off track, it can carry other people's burdens too long."
 },
 "14": {
  "name": "Power Skills",
  "glance": "Energy and resources to fuel the right direction.",
  "summary": "Gate 14 brings the power to work hard and gather resources. Its energy grows when it goes toward work that fits. Wealth tends to follow the right effort.",
  "brings": "Work energy and a knack for resources.\n\nOn track, its effort brings abundance. Off track, working hard on the wrong thing drains it."
 },
 "15": {
  "name": "Extremes",
  "glance": "Accepting many rhythms, including your own extremes.",
  "summary": "Gate 15 holds a wide range of rhythms: sometimes very structured, sometimes all over the place. It accepts people in all their variety. That acceptance is a form of love.",
  "brings": "Openness to all kinds of people and ways of living.\n\nOn track, it brings people together. Off track, it can judge its own changing rhythm as a flaw."
 },
 "16": {
  "name": "Skills",
  "glance": "Enthusiasm for getting good at something.",
  "summary": "Gate 16 loves practicing and identifying talent. Its enthusiasm can carry others along. Repetition is how its skills grow.",
  "brings": "Enthusiasm and talent through practice.\n\nOn track, it becomes skilled at what it loves. Off track, it can jump in without the depth to back it up."
 },
 "17": {
  "name": "Opinions",
  "glance": "Organizing information into a clear point of view.",
  "summary": "Gate 17 forms opinions by sorting facts into patterns. Its opinions can be very helpful, especially when asked for. Offered unasked, they can feel like criticism.",
  "brings": "A clear, organized view of things.\n\nOn track, its opinions guide others. Off track, it can cling to them too tightly."
 },
 "18": {
  "name": "Correction",
  "glance": "Spotting what's off, and wanting to fix it.",
  "summary": "Gate 18 notices what isn't working and wants to improve it. It's a gift for making things better. Aimed at people unasked, it can feel like judgment.",
  "brings": "A keen eye for flaws and how to fix them.\n\nOn track, it improves systems and work. Off track, it can turn critical of others, or itself."
 },
 "19": {
  "name": "Wanting",
  "glance": "Sensitivity to needs: yours and other people's.",
  "summary": "Gate 19 is tuned to needs: food, shelter, touch, belonging. It feels what others need, sometimes before they do. It also has needs of its own.",
  "brings": "Sensitivity and care for others' needs.\n\nOn track, it gives with balance. Off track, it can give too much, or feel needy."
 },
 "20": {
  "name": "The Now",
  "glance": "Being fully present, and speaking from the moment.",
  "summary": "Gate 20 lives in the present. It notices what's happening right now and can respond immediately. It brings the past and future back to this moment.",
  "brings": "Presence and awareness in the moment.\n\nOn track, it acts and speaks with clarity now. Off track, it can rush into action without thought."
 },
 "21": {
  "name": "Control",
  "glance": "Wanting to manage your own resources and life.",
  "summary": "Gate 21 likes to be in control of its own domain: money, food, work, territory. It does well in charge. It resists being managed by others.",
  "brings": "A strong sense of responsibility for resources.\n\nOn track, it provides well. Off track, it can try to control more than its share."
 },
 "22": {
  "name": "Grace",
  "glance": "Social charm that depends on mood.",
  "summary": "Gate 22 has natural grace and charm. It loves to listen and connect when the mood is right. In a low mood, it may want to be left alone.",
  "brings": "Openness and social grace.\n\nOn track, it makes people feel welcome. Off track, being social on demand can feel draining."
 },
 "23": {
  "name": "Simplifying",
  "glance": "Turning a complex insight into simple words.",
  "summary": "Gate 23 explains new ideas in a way others can understand. It strips away what isn't needed. Timing matters: shared too soon, it can be misunderstood.",
  "brings": "The skill of making the complex simple.\n\nOn track, its insights get through. Off track, it can feel misunderstood or labeled strange."
 },
 "24": {
  "name": "Returning",
  "glance": "A mind that keeps coming back to a thought.",
  "summary": "Gate 24 turns thoughts over and over, looking for the insight. That return is how it finds understanding. The answer often comes when it stops trying.",
  "brings": "Deep reflection and mental persistence.\n\nOn track, it reaches real insight. Off track, it can go in circles, worrying."
 },
 "25": {
  "name": "Innocence",
  "glance": "An open heart that loves without conditions.",
  "summary": "Gate 25 holds a pure, open love for life. It meets things with innocence. Challenges test that openness, and keeping it is its strength.",
  "brings": "Universal love and resilience.\n\nOn track, it stays open-hearted through hard things. Off track, it can feel shocked by how harsh life can be."
 },
 "26": {
  "name": "Persuasion",
  "glance": "A talent for presenting things well.",
  "summary": "Gate 26 knows how to sell, persuade and make things look good. It remembers what has worked before. Used honestly, it serves everyone.",
  "brings": "Charm, memory and the gift of persuasion.\n\nOn track, it promotes what's true and useful. Off track, it can exaggerate to win people over."
 },
 "27": {
  "name": "Caring",
  "glance": "Looking after others, with energy to nourish.",
  "summary": "Gate 27 is the carer. It nourishes family, friends and anyone who needs it. Looking after itself is part of caring well.",
  "brings": "Nurturing energy and responsibility.\n\nOn track, care flows both ways. Off track, it gives until it's empty."
 },
 "28": {
  "name": "Purpose",
  "glance": "Taking risks to find what makes life meaningful.",
  "summary": "Gate 28 looks for a reason to live fully. It's willing to struggle and take risks for something that matters. Without purpose, it can feel restless.",
  "brings": "Courage to struggle for meaning.\n\nOn track, its struggles feel worth it. Off track, it fights battles that don't matter."
 },
 "29": {
  "name": "Commitment",
  "glance": "Saying yes, and going all the way.",
  "summary": "Gate 29 commits fully once it says yes. It sees things through when others give up. Because it commits so deeply, what it says yes to matters.",
  "brings": "Perseverance and wholehearted commitment.\n\nOn track, its yes leads somewhere real. Off track, it says yes too easily and gets stuck."
 },
 "30": {
  "name": "Feelings",
  "glance": "A burning desire to feel and experience.",
  "summary": "Gate 30 wants to feel deeply and have new experiences. It's driven by longing and imagination. Not every desire needs to be acted on.",
  "brings": "Passion, desire and emotional depth.\n\nOn track, it chooses experiences with clarity. Off track, it chases every desire and feels let down."
 },
 "31": {
  "name": "Influence",
  "glance": "A voice people listen to, when invited.",
  "summary": "Gate 31 has natural influence. People tend to listen when it speaks about the direction of a group. Its voice lands best when it's asked to lead.",
  "brings": "The ability to lead through words.\n\nOn track, people trust its voice. Off track, influence without invitation meets resistance."
 },
 "32": {
  "name": "Continuity",
  "glance": "An instinct for what will last.",
  "summary": "Gate 32 senses what is worth keeping and what will fail. It looks for things that endure. It can carry a fear of failure, too.",
  "brings": "Instinct for lasting value and change that sticks.\n\nOn track, it backs the right things. Off track, fear of failure holds it back."
 },
 "33": {
  "name": "Retreat",
  "glance": "Stepping back to reflect, then sharing what was learned.",
  "summary": "Gate 33 needs privacy to digest experience. It remembers, reflects, and later tells the story. Retreat isn't hiding. It's how it finds the lesson.",
  "brings": "Reflection, memory and timely sharing.\n\nOn track, its stories teach. Off track, it withdraws without ever sharing."
 },
 "34": {
  "name": "Power",
  "glance": "Raw power to do things, here and now.",
  "summary": "Gate 34 is pure available energy. It gets things done, often independently. It works best on things it actually responds to.",
  "brings": "Strength and the energy to act.\n\nOn track, its power goes into things that fit. Off track, it stays busy for the sake of busy."
 },
 "35": {
  "name": "Change",
  "glance": "Hunger for new experiences and progress.",
  "summary": "Gate 35 wants to try new things and move forward. It's often been there and done that. Each experience adds to what it can share.",
  "brings": "Variety and experience-based wisdom.\n\nOn track, its experiences become knowledge. Off track, it gets bored and restless quickly."
 },
 "36": {
  "name": "Crisis",
  "glance": "Moving through emotional storms into new experience.",
  "summary": "Gate 36 is drawn to new experiences, even uncomfortable ones. It can go through emotional crisis and come out wiser. Its depth comes from what it has lived through.",
  "brings": "Emotional depth and resilience.\n\nOn track, crisis becomes growth. Off track, it jumps into experiences before the feelings are clear."
 },
 "37": {
  "name": "Friendship",
  "glance": "Warmth and fair deals that hold people together.",
  "summary": "Gate 37 builds friendship and family through give and take. It cares about loyalty and fairness. A handshake means something to it.",
  "brings": "Warmth, loyalty and community.\n\nOn track, its agreements are fair. Off track, unspoken deals lead to hurt."
 },
 "38": {
  "name": "The Fighter",
  "glance": "Standing up for what matters.",
  "summary": "Gate 38 fights for purpose and meaning. It can be stubborn in the best way. Not every battle is worth fighting.",
  "brings": "Determination and a will to persist.\n\nOn track, it fights for what matters. Off track, it fights for the sake of fighting."
 },
 "39": {
  "name": "Provocation",
  "glance": "Stirring people up, often to wake their spirit.",
  "summary": "Gate 39 provokes, sometimes without meaning to. It brings out feelings and moods in others. Used well, it helps people find what moves them.",
  "brings": "A spark that stirs emotion.\n\nOn track, it awakens spirit. Off track, it provokes just to feel something."
 },
 "40": {
  "name": "Aloneness",
  "glance": "Working hard for others, then needing time alone.",
  "summary": "Gate 40 provides through effort, then needs rest and solitude. It values being appreciated for what it does. Time alone is how it recharges.",
  "brings": "Willpower to deliver, and a need for rest.\n\nOn track, it works and rests in balance. Off track, it gives without appreciation and feels resentful."
 },
 "41": {
  "name": "Fantasy",
  "glance": "Imagining new experiences before they begin.",
  "summary": "Gate 41 is the start of new cycles of experience. It dreams and imagines. The fantasy is valuable in itself, and only some of it is meant to be lived.",
  "brings": "Imagination and the drive to start fresh.\n\nOn track, it begins new things with clarity. Off track, it expects reality to match the dream."
 },
 "42": {
  "name": "Growth",
  "glance": "Seeing things through to the end.",
  "summary": "Gate 42 finishes what it starts, when the start was right. It's about cycles and completion. Endings give it as much satisfaction as beginnings.",
  "brings": "Energy to complete and grow.\n\nOn track, its cycles close well. Off track, it can't let go of something that's over."
 },
 "43": {
  "name": "Insight",
  "glance": "Sudden knowing, from out of nowhere.",
  "summary": "Gate 43 has flashes of insight that break through. They can be ahead of their time. Explaining them takes patience.",
  "brings": "Breakthrough thinking and inner knowing.\n\nOn track, its insights change minds. Off track, it feels misunderstood."
 },
 "44": {
  "name": "Alertness",
  "glance": "Sensing patterns from the past to read people.",
  "summary": "Gate 44 remembers patterns and senses what people are capable of. It's alert to who fits where. That instinct can be valuable in teams and business.",
  "brings": "Instinct for people and potential.\n\nOn track, it puts people in the right place. Off track, past patterns make it fearful."
 },
 "45": {
  "name": "The Gatherer",
  "glance": "Bringing people and resources together.",
  "summary": "Gate 45 gathers and manages: money, people, things. It likes to be the one who decides how resources are used. It speaks with natural authority.",
  "brings": "Leadership over the material world.\n\nOn track, it shares resources well. Off track, it holds on too tightly."
 },
 "46": {
  "name": "Love of the Body",
  "glance": "Being fully in your body, and in the right place.",
  "summary": "Gate 46 loves being in the body. It finds itself in the right place at the right time, often by what looks like luck. Commitment to the experience is its gift.",
  "brings": "Presence in the body and good timing.\n\nOn track, life seems to line up. Off track, it pushes too hard and loses the flow."
 },
 "47": {
  "name": "Realization",
  "glance": "Making sense of the past, one image at a time.",
  "summary": "Gate 47 sorts through images and memories until they make sense. Confusion is part of the process. Realization tends to arrive suddenly.",
  "brings": "The ability to find meaning in experience.\n\nOn track, it reaches clarity. Off track, it feels pressured to make sense too fast."
 },
 "48": {
  "name": "Depth",
  "glance": "A deep well of knowledge and talent.",
  "summary": "Gate 48 holds depth: real understanding beneath the surface. It can fear not knowing enough. Practice and time show how deep it really goes.",
  "brings": "Depth, talent and solutions.\n\nOn track, its depth gets shared. Off track, fear of inadequacy keeps it quiet."
 },
 "49": {
  "name": "Principles",
  "glance": "Holding to principles, and changing what no longer fits.",
  "summary": "Gate 49 decides who belongs and on what terms. It's driven by principles and fairness. When something doesn't fit, it can end it decisively.",
  "brings": "Sensitivity to fairness and readiness for change.\n\nOn track, its changes are wise. Off track, it rejects too quickly in a low mood."
 },
 "50": {
  "name": "Values",
  "glance": "Guarding the values that keep people safe.",
  "summary": "Gate 50 holds values and responsibilities for the group. It cares about what's right and what protects people. Its sense of duty runs deep.",
  "brings": "Responsibility, values and care for others.\n\nOn track, it guards well. Off track, it takes on responsibility that isn't its own."
 },
 "51": {
  "name": "Shock",
  "glance": "Courage to face the unexpected, and go first.",
  "summary": "Gate 51 meets shock with courage. It's competitive and wants to be first. Shocks become growth, for itself and others.",
  "brings": "Courage and initiative.\n\nOn track, it leads through challenge. Off track, it competes just to win."
 },
 "52": {
  "name": "Stillness",
  "glance": "Staying still to focus deeply.",
  "summary": "Gate 52 brings the ability to sit still and concentrate. It's like a mountain: calm on the outside, full of focused energy inside. Restlessness comes from having nothing to focus on.",
  "brings": "Stillness, focus and patience.\n\nOn track, it concentrates on what matters. Off track, it feels stuck and restless."
 },
 "53": {
  "name": "Beginnings",
  "glance": "Pressure to start something new.",
  "summary": "Gate 53 loves to begin. It brings energy to start new phases and projects. Finishing depends on whether the start was right.",
  "brings": "Energy for new beginnings.\n\nOn track, its starts lead somewhere. Off track, it starts many things and finishes few."
 },
 "54": {
  "name": "Ambition",
  "glance": "Drive to rise and be recognized.",
  "summary": "Gate 54 wants to move up, materially or spiritually. It works hard to get there. It does best when the right people notice its effort.",
  "brings": "Ambition and drive.\n\nOn track, its effort is recognized. Off track, ambition runs ahead of what's real."
 },
 "55": {
  "name": "Spirit",
  "glance": "Deep moods that carry creativity and spirit.",
  "summary": "Gate 55 lives in emotional highs and lows. Its moods are a source of creativity and spirit. Abundance here is felt as much as had.",
  "brings": "Emotional depth and creative spirit.\n\nOn track, moods become creative. Off track, it blames its moods on others."
 },
 "56": {
  "name": "Storytelling",
  "glance": "Turning ideas and experiences into stories.",
  "summary": "Gate 56 loves to tell stories. Its stories stimulate and entertain. They don't have to be literal facts to carry truth.",
  "brings": "The gift of storytelling.\n\nOn track, its stories inspire. Off track, it tells stories nobody asked to hear."
 },
 "57": {
  "name": "Intuition",
  "glance": "Hearing what's right in the moment.",
  "summary": "Gate 57 is sharp intuition: hearing the truth of a situation, right now. It speaks quietly and once. Trusting it takes practice.",
  "brings": "Clarity in the moment.\n\nOn track, its intuition keeps it safe. Off track, worry about the future drowns it out."
 },
 "58": {
  "name": "Vitality",
  "glance": "Joy in life, and in making it better.",
  "summary": "Gate 58 has a love of life and a drive to improve it. It finds joy in getting things right. That joy is contagious.",
  "brings": "Vitality and enthusiasm for improvement.\n\nOn track, it brings joy. Off track, the drive to improve becomes dissatisfaction."
 },
 "59": {
  "name": "Intimacy",
  "glance": "Breaking down barriers to get close.",
  "summary": "Gate 59 can get past people's defenses. It's about intimacy, from friendship to romance to creating new life. Its energy can feel very magnetic.",
  "brings": "Openness and the ability to bond.\n\nOn track, closeness comes at the right time. Off track, it can get close too fast."
 },
 "60": {
  "name": "Acceptance",
  "glance": "Accepting limits as the starting point for change.",
  "summary": "Gate 60 knows that limits are where change begins. It accepts what can't be changed, and waits for the right moment. The waiting can feel heavy.",
  "brings": "Patience and acceptance.\n\nOn track, limits become a launch pad. Off track, it feels trapped by them."
 },
 "61": {
  "name": "Mystery",
  "glance": "Wondering about the unknown.",
  "summary": "Gate 61 is drawn to life's mysteries and big questions. It wants to know why. Inspiration comes when it stops forcing an answer.",
  "brings": "Pressure to know, and openness to inspiration.\n\nOn track, it finds inner truth. Off track, it obsesses over what can't be known."
 },
 "62": {
  "name": "Details",
  "glance": "Facts and details, clearly explained.",
  "summary": "Gate 62 names and organizes details. It makes things understandable with facts. Precise words are its strength.",
  "brings": "Precision and clarity with details.\n\nOn track, its explanations help. Off track, it gets lost in details that don't matter."
 },
 "63": {
  "name": "Doubt",
  "glance": "Questioning to find out what's true.",
  "summary": "Gate 63 doubts, and that's its gift. It asks whether something will hold up. The doubt is best pointed at ideas, not at oneself.",
  "brings": "Healthy questioning and logic.\n\nOn track, doubt leads to good answers. Off track, it turns into self-doubt."
 },
 "64": {
  "name": "Confusion",
  "glance": "Images and memories swirling before they make sense.",
  "summary": "Gate 64 holds many images from the past. Confusion is the stage before clarity. Given time, the pieces fall into place.",
  "brings": "Rich mental imagery.\n\nOn track, confusion resolves into understanding. Off track, it tries to force clarity too soon."
 }
};

export const CRTXT: { right: Record<string, CrossText>; left: Record<string, CrossText> } = {
 "right": {
  "the Sphinx": {
   "glance": "Direction: knowing the way, for yourself and others.",
   "summary": "The Sphinx is about direction. People with it often sense where things are going and help others find their way. It draws on memory and listening as much as leading.",
   "theme": "Its four gates bring self-expression, a sense of direction, leadership and listening. Together they make a life that keeps asking \"where are we heading?\" and often knows the answer before others do.",
   "living": "On track, people turn to you for direction, and your timing feels natural. Off track, you may feel lost when you follow a direction that isn't yours."
  },
  "the Vessel of Love": {
   "glance": "Love in all its forms: self, others, life and the body.",
   "summary": "The Vessel of Love carries love in four ways: love of self, love of people, love of life and love of the body. Its life tends to revolve around what and who it loves.",
   "theme": "Its gates are the four gates of love in the G center. A life with this cross is shaped by loving and being loved, and by learning what love asks.",
   "living": "On track, love flows easily and others feel it. Off track, love can turn into searching for it everywhere except in yourself."
  },
  "Rulership": {
   "glance": "Taking charge of people and resources, with grace.",
   "summary": "Rulership is about leading and managing: money, people, decisions. It combines authority with charm and an eye for what people need.",
   "theme": "Its gates bring control of resources, persuasion, social grace and making sense of experience. Together they make a natural ruler of a home, a team or a business.",
   "living": "On track, people trust you to take care of things. Off track, control can become a burden, or a fight."
  },
  "Explanation": {
   "glance": "Making new insights clear enough for others to use.",
   "summary": "Explanation is about taking insight and answers and making them understandable. People with it often become the ones who explain how things work.",
   "theme": "Its gates bring answers, simplifying, sudden insight and principles. Together they make a life of turning new understanding into words others can follow.",
   "living": "On track, your explanations change how people see things. Off track, you may feel misunderstood when the timing is off."
  },
  "Contagion": {
   "glance": "Contributions that catch on and spread.",
   "summary": "Contagion is about contributing something that spreads to others. What it commits to and feels deeply tends to be picked up by the people around it.",
   "theme": "Its gates bring contribution, power, commitment and strong feeling. Together they make a life whose passions become other people's too.",
   "living": "On track, your example spreads in a good way. Off track, it can spread moods or commitments that weren't yours to share."
  },
  "Eden": {
   "glance": "Innocence meeting life, and growing wiser through experience.",
   "summary": "Eden is about leaving innocence behind and learning through emotional experience. Life tends to bring lessons that are felt deeply.",
   "theme": "Its gates bring emotional boundaries, ideas, careful expression and crisis. Together they make a life that grows through what it feels and lives through.",
   "living": "On track, experience turns into wisdom. Off track, you may long for a simpler time instead of living the present."
  },
  "Consciousness": {
   "glance": "Awareness that grows from patterns and experience.",
   "summary": "Consciousness is about becoming aware: noticing patterns, making sense of experience, and doubting until things are clear. It often brings a thoughtful, searching life.",
   "theme": "Its gates bring rhythm, new experience, doubt and confusion. Together they make a life that keeps learning and growing more aware.",
   "living": "On track, your awareness helps others see clearly. Off track, the mind can stay stuck in doubt or confusion."
  },
  "the Unexpected": {
   "glance": "A life shaped by surprises, and what you make of them.",
   "summary": "The Unexpected is about life not going to plan, and finding purpose in that. Surprises tend to show the way forward.",
   "theme": "Its gates bring caring, the search for purpose, influence and new beginnings. Together they make a life where the unplanned turns out to matter most.",
   "living": "On track, surprises open doors. Off track, you may resist change and miss what it brings."
  },
  "Service": {
   "glance": "Serving others by making things work better.",
   "summary": "Service is about improving things for others: spotting what's off, focusing on it, and finding joy in getting it right.",
   "theme": "Its gates bring opinions, correction, focus and vitality. Together they make a life of useful improvement, offered to the people around you.",
   "living": "On track, your help is welcome and makes a difference. Off track, it can come across as criticism."
  },
  "Planning": {
   "glance": "Planning for the community and making it work.",
   "summary": "Planning is about organizing for the good of a group: setting things up, building skills and keeping agreements. It looks after the people it plans for.",
   "theme": "Its gates bring focus, skills, friendship and work for the community. Together they make a life of building things that support others.",
   "living": "On track, your plans hold people together. Off track, you may plan for everyone except yourself."
  },
  "Maya": {
   "glance": "Seeing through what seems to be, to what is.",
   "summary": "Maya is about illusion and truth: the mind's stories versus what is really there. It brings a fascination with mysteries and details.",
   "theme": "Its gates bring continuity, completion, mystery and detail. Together they make a life of looking beneath the surface.",
   "living": "On track, you help others see clearly. Off track, the mind can get lost in its own stories."
  },
  "Penetration": {
   "glance": "Breaking through, with courage and instinct.",
   "summary": "Penetration is about breaking through: starting new things, rising up, and trusting intuition. It often meets shock with courage.",
   "theme": "Its gates bring shock, beginnings, ambition and intuition. Together they make a life that pushes into new ground.",
   "living": "On track, your breakthroughs open the way for others. Off track, you may push through when waiting would serve better."
  },
  "Laws": {
   "glance": "Rules and values that keep a community well.",
   "summary": "Laws is about the rules and values a group lives by. It's drawn to what keeps people safe and fair, and to changing rules that no longer serve.",
   "theme": "Its gates bring new order, values, storytelling and acceptance of limits. Together they make a life concerned with how people live together.",
   "living": "On track, your sense of fairness guides others. Off track, rules can become rigid."
  },
  "the Four Ways": {
   "glance": "Finding the way through need, thought, reflection and memory.",
   "summary": "The Four Ways is about finding the right path by sensing needs, thinking things over, stepping back and remembering. It often guides people through change.",
   "theme": "Its gates bring sensitivity to needs, returning thoughts, retreat and alertness. Together they make a life of thoughtful guidance.",
   "living": "On track, your guidance helps people move forward. Off track, you may go over the same thoughts without moving."
  },
  "Tension": {
   "glance": "Pressure and struggle that build depth.",
   "summary": "Tension is about the push and pull of life: struggle, provocation and control. It builds depth through challenge.",
   "theme": "Its gates bring control, a fighting spirit, provocation and depth. Together they make a life that grows stronger through tension.",
   "living": "On track, tension becomes strength. Off track, it can turn into conflict for its own sake."
  },
  "the Sleeping Phoenix": {
   "glance": "Transformation: waking up to a new way of living.",
   "summary": "The Sleeping Phoenix is about transformation. It often brings a life with a turning point, where something new rises from the old.",
   "theme": "Its gates bring presence, power, emotional spirit and intimacy. Together they make a life of awakening and renewal.",
   "living": "On track, change feels like rebirth. Off track, you may hold on to the old when it's time to change."
  }
 },
 "left": {
  "Defiance": {
   "glance": "Creative direction that won't be told what to do.",
   "summary": "Defiance is about challenging rules and expectations. Its creativity and principles push against what doesn't fit.",
   "theme": "Its gates bring self-expression, direction, answers and principles. Together they make a life that questions and redefines the rules."
  },
  "Wishes": {
   "glance": "Dreams and values that shape a community.",
   "summary": "Wishes is about the hopes people share. It brings imagination, influence and values that help a group dream together.",
   "theme": "Its gates bring new beginnings, values, influence and fantasy. Together they make a life that gives voice to what people wish for."
  },
  "Revolution": {
   "glance": "Changing systems through principle and contribution.",
   "summary": "Revolution is about changing how things are done. It brings principles, answers and the power to make a contribution that shifts things.",
   "theme": "Its gates bring answers, contribution, power and principles. Together they make a life that turns ideas into change."
  },
  "Separation": {
   "glance": "Its own rhythm, with room to be apart.",
   "summary": "Separation is about independence within relationships. It needs its own rhythm and space, even while connected.",
   "theme": "Its gates bring fixed rhythm, grace, new experience and realization. Together they make a life that honors distance as much as closeness."
  },
  "the Plane": {
   "glance": "Emotional depth moving between different levels of life.",
   "summary": "The Plane is about moving between levels: everyday life and deeper emotional experience. It brings depth and acceptance of all kinds of people.",
   "theme": "Its gates bring emotional boundaries, self-love, acceptance and crisis. Together they make a life lived on more than one level."
  },
  "Masks": {
   "glance": "Seeing the roles people play, and what's behind them.",
   "summary": "Masks is about the roles people wear. It listens, sees, and recognizes what's real behind a role.",
   "theme": "Its gates bring leadership, listening, simplifying and insight. Together they make a life that understands roles, its own included."
  },
  "Uncertainty": {
   "glance": "Living with not knowing, and finding power there.",
   "summary": "Uncertainty is about life without guarantees. It brings energy, spirit and closeness that carry it through the unknown.",
   "theme": "Its gates bring contribution, power, emotional spirit and intimacy. Together they make a life comfortable with uncertainty."
  },
  "Identification": {
   "glance": "Recognizing patterns and naming them.",
   "summary": "Identification is about spotting patterns and naming what they are. It focuses, practices and doubts until it sees clearly.",
   "theme": "Its gates bring focus, skills, doubt and confusion. Together they make a life that identifies what others miss."
  },
  "Prevention": {
   "glance": "Seeing what's wrong before it does harm.",
   "summary": "Prevention is about stopping problems early. It notices what's off and has opinions on how to keep things healthy.",
   "theme": "Its gates bring self-love, acceptance, opinions and correction. Together they make a life that protects others by speaking up."
  },
  "Education": {
   "glance": "Teaching through ideas, care and example.",
   "summary": "Education is about sharing what has been learned. It brings ideas, careful words, innocence and good timing.",
   "theme": "Its gates bring ideas, caution, innocence and love of the body. Together they make a natural teacher."
  },
  "Upheaval": {
   "glance": "Shake-ups that clear the way for better.",
   "summary": "Upheaval is about disruption that leads to improvement. It challenges, corrects and provokes.",
   "theme": "Its gates bring opinions, correction, fighting spirit and provocation. Together they make a life that stirs things up for a reason."
  },
  "Refinement": {
   "glance": "Refining things until they're right.",
   "summary": "Refinement is about making things better over time. It brings creativity, direction, sensitivity and reflection.",
   "theme": "Its gates bring self-expression, direction, needs and retreat. Together they make a life of patient refinement."
  },
  "Duality": {
   "glance": "Two sides: personal power and community.",
   "summary": "Duality is about balancing the personal and the shared. It brings energy for itself and a strong sense of give and take.",
   "theme": "Its gates bring presence, power, friendship and work for others. Together they make a life that holds two sides at once."
  },
  "Endeavor": {
   "glance": "Effort, ambition and depth, all in.",
   "summary": "Endeavor is about working hard toward something. It brings ambition, beginnings, control and depth.",
   "theme": "Its gates bring control, depth, beginnings and ambition. Together they make a life of determined effort."
  },
  "Informing": {
   "glance": "Sharing ideas with grace and good timing.",
   "summary": "Informing is about passing on ideas and understanding. It speaks carefully and with grace.",
   "theme": "Its gates bring ideas, caution, grace and realization. Together they make a life that keeps others informed."
  },
  "Dedication": {
   "glance": "Devotion to an insight, carried all the way.",
   "summary": "Dedication is about commitment. Once it believes in something, it gives itself fully.",
   "theme": "Its gates bring simplifying, commitment, feelings and insight. Together they make a life of deep dedication."
  },
  "Incarnation": {
   "glance": "Patterns from the past, lived in the present.",
   "summary": "Incarnation is about what we carry forward: patterns, memories and roles. It brings leadership, listening and alertness.",
   "theme": "Its gates bring leadership, listening, returning thoughts and alertness. Together they make a life that learns from what came before."
  },
  "Healing": {
   "glance": "Healing through love, presence and joy.",
   "summary": "Healing is about restoring wellbeing in body and spirit. It brings love, stillness and vitality.",
   "theme": "Its gates bring innocence, love of the body, stillness and vitality. Together they make a natural healer."
  },
  "Confrontation": {
   "glance": "Facing others honestly, about resources and feelings.",
   "summary": "Confrontation is about meeting things head on: money, emotions, who decides.",
   "theme": "Its gates bring emotional boundaries, persuasion, crisis and gathering resources. Together they make a life that faces what others avoid."
  },
  "Control": {
   "glance": "Steering people and resources with charm and a steady hand.",
   "summary": "Control is about guiding how things are run: who gets what, and how it is presented. It brings a gift for persuasion and a feel for managing people and money.",
   "theme": "Its gates bring persuasion, gathering resources, emotional boundaries and crisis. Together they make a life of steering things well, and learning when to let go."
  },
  "Alignment": {
   "glance": "Lining life up with what matters.",
   "summary": "Alignment is about bringing care, needs and purpose into line. It looks after others and looks for meaning.",
   "theme": "Its gates bring needs, caring, purpose and retreat. Together they make a life of lining things up with what matters."
  },
  "Industry": {
   "glance": "Hard work, fully committed.",
   "summary": "Industry is about work and commitment. It brings energy, presence and the will to see things through.",
   "theme": "Its gates bring presence, commitment, feelings and power. Together they make a life of steady work."
  },
  "the Alpha": {
   "glance": "Leading the way into new beginnings.",
   "summary": "The Alpha is about leadership toward something new. It brings influence, imagination and an eye for people.",
   "theme": "Its gates bring returning thoughts, influence, fantasy and alertness. Together they make a natural first mover."
  },
  "Limitation": {
   "glance": "Working creatively within limits.",
   "summary": "Limitation is about accepting limits and using them. It brings continuity, completion, stories and patience.",
   "theme": "Its gates bring continuity, growth, storytelling and acceptance. Together they make a life that turns limits into strengths."
  },
  "Migration": {
   "glance": "Moving on, with community along the way.",
   "summary": "Migration is about change of place and people. It brings rhythm, experience and strong bonds wherever it goes.",
   "theme": "Its gates bring rhythm, change, friendship and aloneness. Together they make a life of movement."
  },
  "Individualism": {
   "glance": "Standing on its own, with courage and intuition.",
   "summary": "Individualism is about being uniquely yourself. It brings courage, intuition and a fighting spirit.",
   "theme": "Its gates bring fighting spirit, provocation, shock and intuition. Together they make a life that stands apart."
  },
  "the Clarion": {
   "glance": "A wake-up call that brings clarity.",
   "summary": "The Clarion is about waking people up. It brings shock, intuition, mystery and precise words.",
   "theme": "Its gates bring shock, intuition, mystery and details. Together they make a life that sounds the call."
  },
  "Demands": {
   "glance": "High standards for quality and control.",
   "summary": "Demands is about expecting the best. It brings control, depth, focus and a drive to improve.",
   "theme": "Its gates bring control, depth, stillness and vitality. Together they make a life with high standards."
  },
  "Cycles": {
   "glance": "Life in cycles: rise, complete, begin again.",
   "summary": "Cycles is about rhythms of growth. It brings ambition, continuity and the energy to start and finish.",
   "theme": "Its gates bring continuity, growth, beginnings and ambition. Together they make a life of cycles."
  },
  "Spirit": {
   "glance": "Enthusiasm and spirit that move people.",
   "summary": "Spirit is about energy and enthusiasm. It brings focus, skill, emotional spirit and closeness.",
   "theme": "Its gates bring focus, skills, spirit and intimacy. Together they make a life that lifts others."
  },
  "Distraction": {
   "glance": "Stimulating others away from their struggles.",
   "summary": "Distraction is about bringing relief and stimulation. It cares, tells stories and helps people take a break from struggle.",
   "theme": "Its gates bring caring, purpose, storytelling and acceptance. Together they make a life that lightens the load."
  },
  "Obscuration": {
   "glance": "Mysteries and details that keep things hidden, or reveal them.",
   "summary": "Obscuration is about what is hidden and what is shown. It brings mystery, detail, values and new order.",
   "theme": "Its gates bring new order, values, mystery and details. Together they make a life that works with what is unclear."
  },
  "Dominion": {
   "glance": "Authority over resources, tested by doubt.",
   "summary": "Dominion is about authority and resources. It persuades, gathers and questions what it rules.",
   "theme": "Its gates bring persuasion, gathering, doubt and confusion. Together they make a life of thoughtful authority."
  }
 }
};

export const CRIX: { RIGHT: Record<string, CrossIndexEntry>; LEFT: Record<string, CrossIndexEntry>; JUXTA: Record<string, CrossIndexEntry> } = {
 "RIGHT": {
  "the Sphinx": {
   "sunGates": [
    1,
    2,
    7,
    13
   ],
   "quads": [
    [
     1,
     2,
     7,
     13
    ],
    [
     2,
     1,
     13,
     7
    ],
    [
     7,
     13,
     2,
     1
    ],
    [
     13,
     7,
     1,
     2
    ]
   ],
   "gates": [
    1,
    2,
    7,
    13
   ]
  },
  "Laws": {
   "sunGates": [
    3,
    50,
    56,
    60
   ],
   "quads": [
    [
     3,
     50,
     60,
     56
    ],
    [
     50,
     3,
     56,
     60
    ],
    [
     56,
     60,
     3,
     50
    ],
    [
     60,
     56,
     50,
     3
    ]
   ],
   "gates": [
    3,
    50,
    56,
    60
   ]
  },
  "Explanation": {
   "sunGates": [
    4,
    23,
    43,
    49
   ],
   "quads": [
    [
     4,
     49,
     23,
     43
    ],
    [
     23,
     43,
     49,
     4
    ],
    [
     43,
     23,
     4,
     49
    ],
    [
     49,
     4,
     43,
     23
    ]
   ],
   "gates": [
    4,
    23,
    43,
    49
   ]
  },
  "Consciousness": {
   "sunGates": [
    5,
    35,
    63,
    64
   ],
   "quads": [
    [
     5,
     35,
     64,
     63
    ],
    [
     35,
     5,
     63,
     64
    ],
    [
     63,
     64,
     5,
     35
    ],
    [
     64,
     63,
     35,
     5
    ]
   ],
   "gates": [
    5,
    35,
    63,
    64
   ]
  },
  "Eden": {
   "sunGates": [
    6,
    11,
    12,
    36
   ],
   "quads": [
    [
     6,
     36,
     12,
     11
    ],
    [
     11,
     12,
     6,
     36
    ],
    [
     12,
     11,
     36,
     6
    ],
    [
     36,
     6,
     11,
     12
    ]
   ],
   "gates": [
    6,
    11,
    12,
    36
   ]
  },
  "Contagion": {
   "sunGates": [
    8,
    14,
    29,
    30
   ],
   "quads": [
    [
     8,
     14,
     30,
     29
    ],
    [
     14,
     8,
     29,
     30
    ],
    [
     29,
     30,
     8,
     14
    ],
    [
     30,
     29,
     14,
     8
    ]
   ],
   "gates": [
    8,
    14,
    29,
    30
   ]
  },
  "Planning": {
   "sunGates": [
    9,
    16,
    37,
    40
   ],
   "quads": [
    [
     9,
     16,
     40,
     37
    ],
    [
     16,
     9,
     37,
     40
    ],
    [
     37,
     40,
     9,
     16
    ],
    [
     40,
     37,
     16,
     9
    ]
   ],
   "gates": [
    9,
    16,
    37,
    40
   ]
  },
  "the Vessel of Love": {
   "sunGates": [
    10,
    15,
    25,
    46
   ],
   "quads": [
    [
     10,
     15,
     46,
     25
    ],
    [
     15,
     10,
     25,
     46
    ],
    [
     25,
     46,
     10,
     15
    ],
    [
     46,
     25,
     15,
     10
    ]
   ],
   "gates": [
    10,
    15,
    25,
    46
   ]
  },
  "Service": {
   "sunGates": [
    17,
    18,
    52,
    58
   ],
   "quads": [
    [
     17,
     18,
     58,
     52
    ],
    [
     18,
     17,
     52,
     58
    ],
    [
     52,
     58,
     17,
     18
    ],
    [
     58,
     52,
     18,
     17
    ]
   ],
   "gates": [
    17,
    18,
    52,
    58
   ]
  },
  "the Four Ways": {
   "sunGates": [
    19,
    24,
    33,
    44
   ],
   "quads": [
    [
     19,
     33,
     44,
     24
    ],
    [
     24,
     44,
     19,
     33
    ],
    [
     33,
     19,
     24,
     44
    ],
    [
     44,
     24,
     33,
     19
    ]
   ],
   "gates": [
    19,
    24,
    33,
    44
   ]
  },
  "the Sleeping Phoenix": {
   "sunGates": [
    20,
    34,
    55,
    59
   ],
   "quads": [
    [
     20,
     34,
     55,
     59
    ],
    [
     34,
     20,
     59,
     55
    ],
    [
     55,
     59,
     34,
     20
    ],
    [
     59,
     55,
     20,
     34
    ]
   ],
   "gates": [
    20,
    34,
    55,
    59
   ]
  },
  "Tension": {
   "sunGates": [
    21,
    38,
    39,
    48
   ],
   "quads": [
    [
     21,
     48,
     38,
     39
    ],
    [
     38,
     39,
     48,
     21
    ],
    [
     39,
     38,
     21,
     48
    ],
    [
     48,
     21,
     39,
     38
    ]
   ],
   "gates": [
    21,
    38,
    39,
    48
   ]
  },
  "Rulership": {
   "sunGates": [
    22,
    26,
    45,
    47
   ],
   "quads": [
    [
     22,
     47,
     26,
     45
    ],
    [
     26,
     45,
     47,
     22
    ],
    [
     45,
     26,
     22,
     47
    ],
    [
     47,
     22,
     45,
     26
    ]
   ],
   "gates": [
    22,
    26,
    45,
    47
   ]
  },
  "the Unexpected": {
   "sunGates": [
    27,
    28,
    31,
    41
   ],
   "quads": [
    [
     27,
     28,
     41,
     31
    ],
    [
     28,
     27,
     31,
     41
    ],
    [
     31,
     41,
     27,
     28
    ],
    [
     41,
     31,
     28,
     27
    ]
   ],
   "gates": [
    27,
    28,
    31,
    41
   ]
  },
  "Maya": {
   "sunGates": [
    32,
    42,
    61,
    62
   ],
   "quads": [
    [
     32,
     42,
     62,
     61
    ],
    [
     42,
     32,
     61,
     62
    ],
    [
     61,
     62,
     32,
     42
    ],
    [
     62,
     61,
     42,
     32
    ]
   ],
   "gates": [
    32,
    42,
    61,
    62
   ]
  },
  "Penetration": {
   "sunGates": [
    51,
    53,
    54,
    57
   ],
   "quads": [
    [
     51,
     57,
     54,
     53
    ],
    [
     53,
     54,
     51,
     57
    ],
    [
     54,
     53,
     57,
     51
    ],
    [
     57,
     51,
     53,
     54
    ]
   ],
   "gates": [
    51,
    53,
    54,
    57
   ]
  }
 },
 "LEFT": {
  "Defiance": {
   "sunGates": [
    1,
    2
   ],
   "quads": [
    [
     1,
     2,
     4,
     49
    ],
    [
     2,
     1,
     49,
     4
    ]
   ],
   "gates": [
    1,
    2,
    4,
    49
   ]
  },
  "Wishes": {
   "sunGates": [
    3,
    50
   ],
   "quads": [
    [
     3,
     50,
     41,
     31
    ],
    [
     50,
     3,
     31,
     41
    ]
   ],
   "gates": [
    3,
    31,
    41,
    50
   ]
  },
  "Revolution": {
   "sunGates": [
    4,
    49
   ],
   "quads": [
    [
     4,
     49,
     8,
     14
    ],
    [
     49,
     4,
     14,
     8
    ]
   ],
   "gates": [
    4,
    8,
    14,
    49
   ]
  },
  "Separation": {
   "sunGates": [
    5,
    35
   ],
   "quads": [
    [
     5,
     35,
     47,
     22
    ],
    [
     35,
     5,
     22,
     47
    ]
   ],
   "gates": [
    5,
    22,
    35,
    47
   ]
  },
  "the Plane": {
   "sunGates": [
    6,
    36
   ],
   "quads": [
    [
     6,
     36,
     15,
     10
    ],
    [
     36,
     6,
     10,
     15
    ]
   ],
   "gates": [
    6,
    10,
    15,
    36
   ]
  },
  "Masks": {
   "sunGates": [
    7,
    13
   ],
   "quads": [
    [
     7,
     13,
     23,
     43
    ],
    [
     13,
     7,
     43,
     23
    ]
   ],
   "gates": [
    7,
    13,
    23,
    43
   ]
  },
  "Uncertainty": {
   "sunGates": [
    8,
    14
   ],
   "quads": [
    [
     8,
     14,
     55,
     59
    ],
    [
     14,
     8,
     59,
     55
    ]
   ],
   "gates": [
    8,
    14,
    55,
    59
   ]
  },
  "Identification": {
   "sunGates": [
    9,
    16
   ],
   "quads": [
    [
     9,
     16,
     64,
     63
    ],
    [
     16,
     9,
     63,
     64
    ]
   ],
   "gates": [
    9,
    16,
    63,
    64
   ]
  },
  "Prevention": {
   "sunGates": [
    10,
    15
   ],
   "quads": [
    [
     10,
     15,
     18,
     17
    ],
    [
     15,
     10,
     17,
     18
    ]
   ],
   "gates": [
    10,
    15,
    17,
    18
   ]
  },
  "Education": {
   "sunGates": [
    11,
    12
   ],
   "quads": [
    [
     11,
     12,
     46,
     25
    ],
    [
     12,
     11,
     25,
     46
    ]
   ],
   "gates": [
    11,
    12,
    25,
    46
   ]
  },
  "Upheaval": {
   "sunGates": [
    17,
    18
   ],
   "quads": [
    [
     17,
     18,
     38,
     39
    ],
    [
     18,
     17,
     39,
     38
    ]
   ],
   "gates": [
    17,
    18,
    38,
    39
   ]
  },
  "Refinement": {
   "sunGates": [
    19,
    33
   ],
   "quads": [
    [
     19,
     33,
     1,
     2
    ],
    [
     33,
     19,
     2,
     1
    ]
   ],
   "gates": [
    1,
    2,
    19,
    33
   ]
  },
  "Duality": {
   "sunGates": [
    20,
    34
   ],
   "quads": [
    [
     20,
     34,
     37,
     40
    ],
    [
     34,
     20,
     40,
     37
    ]
   ],
   "gates": [
    20,
    34,
    37,
    40
   ]
  },
  "Endeavor": {
   "sunGates": [
    21,
    48
   ],
   "quads": [
    [
     21,
     48,
     54,
     53
    ],
    [
     48,
     21,
     53,
     54
    ]
   ],
   "gates": [
    21,
    48,
    53,
    54
   ]
  },
  "Informing": {
   "sunGates": [
    22,
    47
   ],
   "quads": [
    [
     22,
     47,
     11,
     12
    ],
    [
     47,
     22,
     12,
     11
    ]
   ],
   "gates": [
    11,
    12,
    22,
    47
   ]
  },
  "Dedication": {
   "sunGates": [
    23,
    43
   ],
   "quads": [
    [
     23,
     43,
     30,
     29
    ],
    [
     43,
     23,
     29,
     30
    ]
   ],
   "gates": [
    23,
    29,
    30,
    43
   ]
  },
  "Incarnation": {
   "sunGates": [
    24,
    44
   ],
   "quads": [
    [
     24,
     44,
     13,
     7
    ],
    [
     44,
     24,
     7,
     13
    ]
   ],
   "gates": [
    7,
    13,
    24,
    44
   ]
  },
  "Healing": {
   "sunGates": [
    25,
    46
   ],
   "quads": [
    [
     25,
     46,
     58,
     52
    ],
    [
     46,
     25,
     52,
     58
    ]
   ],
   "gates": [
    25,
    46,
    52,
    58
   ]
  },
  "Control": {
   "sunGates": [
    26
   ],
   "quads": [
    [
     26,
     45,
     6,
     36
    ]
   ],
   "gates": [
    6,
    26,
    36,
    45
   ]
  },
  "Alignment": {
   "sunGates": [
    27,
    28
   ],
   "quads": [
    [
     27,
     28,
     19,
     33
    ],
    [
     28,
     27,
     33,
     19
    ]
   ],
   "gates": [
    19,
    27,
    28,
    33
   ]
  },
  "Industry": {
   "sunGates": [
    29,
    30
   ],
   "quads": [
    [
     29,
     30,
     20,
     34
    ],
    [
     30,
     29,
     34,
     20
    ]
   ],
   "gates": [
    20,
    29,
    30,
    34
   ]
  },
  "the Alpha": {
   "sunGates": [
    31,
    41
   ],
   "quads": [
    [
     31,
     41,
     24,
     44
    ],
    [
     41,
     31,
     44,
     24
    ]
   ],
   "gates": [
    24,
    31,
    41,
    44
   ]
  },
  "Limitation": {
   "sunGates": [
    32,
    42
   ],
   "quads": [
    [
     32,
     42,
     56,
     60
    ],
    [
     42,
     32,
     60,
     56
    ]
   ],
   "gates": [
    32,
    42,
    56,
    60
   ]
  },
  "Migration": {
   "sunGates": [
    37,
    40
   ],
   "quads": [
    [
     37,
     40,
     5,
     35
    ],
    [
     40,
     37,
     35,
     5
    ]
   ],
   "gates": [
    5,
    35,
    37,
    40
   ]
  },
  "Individualism": {
   "sunGates": [
    38,
    39
   ],
   "quads": [
    [
     38,
     39,
     57,
     51
    ],
    [
     39,
     38,
     51,
     57
    ]
   ],
   "gates": [
    38,
    39,
    51,
    57
   ]
  },
  "Confrontation": {
   "sunGates": [
    45
   ],
   "quads": [
    [
     45,
     26,
     36,
     6
    ]
   ],
   "gates": [
    6,
    26,
    36,
    45
   ]
  },
  "the Clarion": {
   "sunGates": [
    51,
    57
   ],
   "quads": [
    [
     51,
     57,
     61,
     62
    ],
    [
     57,
     51,
     62,
     61
    ]
   ],
   "gates": [
    51,
    57,
    61,
    62
   ]
  },
  "Demands": {
   "sunGates": [
    52,
    58
   ],
   "quads": [
    [
     52,
     58,
     21,
     48
    ],
    [
     58,
     52,
     48,
     21
    ]
   ],
   "gates": [
    21,
    48,
    52,
    58
   ]
  },
  "Cycles": {
   "sunGates": [
    53,
    54
   ],
   "quads": [
    [
     53,
     54,
     42,
     32
    ],
    [
     54,
     53,
     32,
     42
    ]
   ],
   "gates": [
    32,
    42,
    53,
    54
   ]
  },
  "Spirit": {
   "sunGates": [
    55,
    59
   ],
   "quads": [
    [
     55,
     59,
     9,
     16
    ],
    [
     59,
     55,
     16,
     9
    ]
   ],
   "gates": [
    9,
    16,
    55,
    59
   ]
  },
  "Distraction": {
   "sunGates": [
    56,
    60
   ],
   "quads": [
    [
     56,
     60,
     27,
     28
    ],
    [
     60,
     56,
     28,
     27
    ]
   ],
   "gates": [
    27,
    28,
    56,
    60
   ]
  },
  "Obscuration": {
   "sunGates": [
    61,
    62
   ],
   "quads": [
    [
     61,
     62,
     50,
     3
    ],
    [
     62,
     61,
     3,
     50
    ]
   ],
   "gates": [
    3,
    50,
    61,
    62
   ]
  },
  "Dominion": {
   "sunGates": [
    63,
    64
   ],
   "quads": [
    [
     63,
     64,
     26,
     45
    ],
    [
     64,
     63,
     45,
     26
    ]
   ],
   "gates": [
    26,
    45,
    63,
    64
   ]
  }
 },
 "JUXTA": {
  "Self-Expression": {
   "sunGates": [
    1
   ],
   "quads": [
    [
     1,
     2,
     4,
     49
    ]
   ],
   "gates": [
    1,
    2,
    4,
    49
   ]
  },
  "the Driver": {
   "sunGates": [
    2
   ],
   "quads": [
    [
     2,
     1,
     49,
     4
    ]
   ],
   "gates": [
    1,
    2,
    4,
    49
   ]
  },
  "Mutation": {
   "sunGates": [
    3
   ],
   "quads": [
    [
     3,
     50,
     41,
     31
    ]
   ],
   "gates": [
    3,
    31,
    41,
    50
   ]
  },
  "Formulation": {
   "sunGates": [
    4
   ],
   "quads": [
    [
     4,
     49,
     8,
     14
    ]
   ],
   "gates": [
    4,
    8,
    14,
    49
   ]
  },
  "Habits": {
   "sunGates": [
    5
   ],
   "quads": [
    [
     5,
     35,
     47,
     22
    ]
   ],
   "gates": [
    5,
    22,
    35,
    47
   ]
  },
  "Conflict": {
   "sunGates": [
    6
   ],
   "quads": [
    [
     6,
     36,
     15,
     10
    ]
   ],
   "gates": [
    6,
    10,
    15,
    36
   ]
  },
  "Interaction": {
   "sunGates": [
    7
   ],
   "quads": [
    [
     7,
     13,
     23,
     43
    ]
   ],
   "gates": [
    7,
    13,
    23,
    43
   ]
  },
  "Contribution": {
   "sunGates": [
    8
   ],
   "quads": [
    [
     8,
     14,
     55,
     59
    ]
   ],
   "gates": [
    8,
    14,
    55,
    59
   ]
  },
  "Focus": {
   "sunGates": [
    9
   ],
   "quads": [
    [
     9,
     16,
     64,
     63
    ]
   ],
   "gates": [
    9,
    16,
    63,
    64
   ]
  },
  "Behavior": {
   "sunGates": [
    10
   ],
   "quads": [
    [
     10,
     15,
     18,
     17
    ]
   ],
   "gates": [
    10,
    15,
    17,
    18
   ]
  },
  "Ideas": {
   "sunGates": [
    11
   ],
   "quads": [
    [
     11,
     12,
     46,
     25
    ]
   ],
   "gates": [
    11,
    12,
    25,
    46
   ]
  },
  "Articulation": {
   "sunGates": [
    12
   ],
   "quads": [
    [
     12,
     11,
     25,
     46
    ]
   ],
   "gates": [
    11,
    12,
    25,
    46
   ]
  },
  "Listening": {
   "sunGates": [
    13
   ],
   "quads": [
    [
     13,
     7,
     43,
     23
    ]
   ],
   "gates": [
    7,
    13,
    23,
    43
   ]
  },
  "Empowering": {
   "sunGates": [
    14
   ],
   "quads": [
    [
     14,
     8,
     59,
     55
    ]
   ],
   "gates": [
    8,
    14,
    55,
    59
   ]
  },
  "Extremes": {
   "sunGates": [
    15
   ],
   "quads": [
    [
     15,
     10,
     17,
     18
    ]
   ],
   "gates": [
    10,
    15,
    17,
    18
   ]
  },
  "Experimentation": {
   "sunGates": [
    16
   ],
   "quads": [
    [
     16,
     9,
     63,
     64
    ]
   ],
   "gates": [
    9,
    16,
    63,
    64
   ]
  },
  "Opinions": {
   "sunGates": [
    17
   ],
   "quads": [
    [
     17,
     18,
     38,
     39
    ]
   ],
   "gates": [
    17,
    18,
    38,
    39
   ]
  },
  "Correction": {
   "sunGates": [
    18
   ],
   "quads": [
    [
     18,
     17,
     39,
     38
    ]
   ],
   "gates": [
    17,
    18,
    38,
    39
   ]
  },
  "Need": {
   "sunGates": [
    19
   ],
   "quads": [
    [
     19,
     33,
     1,
     2
    ]
   ],
   "gates": [
    1,
    2,
    19,
    33
   ]
  },
  "the Now": {
   "sunGates": [
    20
   ],
   "quads": [
    [
     20,
     34,
     37,
     40
    ]
   ],
   "gates": [
    20,
    34,
    37,
    40
   ]
  },
  "Control": {
   "sunGates": [
    21
   ],
   "quads": [
    [
     21,
     48,
     54,
     53
    ]
   ],
   "gates": [
    21,
    48,
    53,
    54
   ]
  },
  "Grace": {
   "sunGates": [
    22
   ],
   "quads": [
    [
     22,
     47,
     11,
     12
    ]
   ],
   "gates": [
    11,
    12,
    22,
    47
   ]
  },
  "Assimilation": {
   "sunGates": [
    23
   ],
   "quads": [
    [
     23,
     43,
     30,
     29
    ]
   ],
   "gates": [
    23,
    29,
    30,
    43
   ]
  },
  "Rationalization": {
   "sunGates": [
    24
   ],
   "quads": [
    [
     24,
     44,
     13,
     7
    ]
   ],
   "gates": [
    7,
    13,
    24,
    44
   ]
  },
  "Innocence": {
   "sunGates": [
    25
   ],
   "quads": [
    [
     25,
     46,
     58,
     52
    ]
   ],
   "gates": [
    25,
    46,
    52,
    58
   ]
  },
  "the Trickster": {
   "sunGates": [
    26
   ],
   "quads": [
    [
     26,
     45,
     6,
     36
    ]
   ],
   "gates": [
    6,
    26,
    36,
    45
   ]
  },
  "Caring": {
   "sunGates": [
    27
   ],
   "quads": [
    [
     27,
     28,
     19,
     33
    ]
   ],
   "gates": [
    19,
    27,
    28,
    33
   ]
  },
  "Risks": {
   "sunGates": [
    28
   ],
   "quads": [
    [
     28,
     27,
     33,
     19
    ]
   ],
   "gates": [
    19,
    27,
    28,
    33
   ]
  },
  "Commitment": {
   "sunGates": [
    29
   ],
   "quads": [
    [
     29,
     30,
     20,
     34
    ]
   ],
   "gates": [
    20,
    29,
    30,
    34
   ]
  },
  "Fates": {
   "sunGates": [
    30
   ],
   "quads": [
    [
     30,
     29,
     34,
     20
    ]
   ],
   "gates": [
    20,
    29,
    30,
    34
   ]
  },
  "Influence": {
   "sunGates": [
    31
   ],
   "quads": [
    [
     31,
     41,
     24,
     44
    ]
   ],
   "gates": [
    24,
    31,
    41,
    44
   ]
  },
  "Conservation": {
   "sunGates": [
    32
   ],
   "quads": [
    [
     32,
     42,
     56,
     60
    ]
   ],
   "gates": [
    32,
    42,
    56,
    60
   ]
  },
  "Retreat": {
   "sunGates": [
    33
   ],
   "quads": [
    [
     33,
     19,
     2,
     1
    ]
   ],
   "gates": [
    1,
    2,
    19,
    33
   ]
  },
  "Power": {
   "sunGates": [
    34
   ],
   "quads": [
    [
     34,
     20,
     40,
     37
    ]
   ],
   "gates": [
    20,
    34,
    37,
    40
   ]
  },
  "Experience": {
   "sunGates": [
    35
   ],
   "quads": [
    [
     35,
     5,
     22,
     47
    ]
   ],
   "gates": [
    5,
    22,
    35,
    47
   ]
  },
  "Crisis": {
   "sunGates": [
    36
   ],
   "quads": [
    [
     36,
     6,
     10,
     15
    ]
   ],
   "gates": [
    6,
    10,
    15,
    36
   ]
  },
  "Bargains": {
   "sunGates": [
    37
   ],
   "quads": [
    [
     37,
     40,
     5,
     35
    ]
   ],
   "gates": [
    5,
    35,
    37,
    40
   ]
  },
  "Opposition": {
   "sunGates": [
    38
   ],
   "quads": [
    [
     38,
     39,
     57,
     51
    ]
   ],
   "gates": [
    38,
    39,
    51,
    57
   ]
  },
  "Provocation": {
   "sunGates": [
    39
   ],
   "quads": [
    [
     39,
     38,
     51,
     57
    ]
   ],
   "gates": [
    38,
    39,
    51,
    57
   ]
  },
  "Denial": {
   "sunGates": [
    40
   ],
   "quads": [
    [
     40,
     37,
     35,
     5
    ]
   ],
   "gates": [
    5,
    35,
    37,
    40
   ]
  },
  "Fantasy": {
   "sunGates": [
    41
   ],
   "quads": [
    [
     41,
     31,
     44,
     24
    ]
   ],
   "gates": [
    24,
    31,
    41,
    44
   ]
  },
  "Completion": {
   "sunGates": [
    42
   ],
   "quads": [
    [
     42,
     32,
     60,
     56
    ]
   ],
   "gates": [
    32,
    42,
    56,
    60
   ]
  },
  "Insight": {
   "sunGates": [
    43
   ],
   "quads": [
    [
     43,
     23,
     29,
     30
    ]
   ],
   "gates": [
    23,
    29,
    30,
    43
   ]
  },
  "Alertness": {
   "sunGates": [
    44
   ],
   "quads": [
    [
     44,
     24,
     7,
     13
    ]
   ],
   "gates": [
    7,
    13,
    24,
    44
   ]
  },
  "Possession": {
   "sunGates": [
    45
   ],
   "quads": [
    [
     45,
     26,
     36,
     6
    ]
   ],
   "gates": [
    6,
    26,
    36,
    45
   ]
  },
  "Serendipity": {
   "sunGates": [
    46
   ],
   "quads": [
    [
     46,
     25,
     52,
     58
    ]
   ],
   "gates": [
    25,
    46,
    52,
    58
   ]
  },
  "Oppression": {
   "sunGates": [
    47
   ],
   "quads": [
    [
     47,
     22,
     12,
     11
    ]
   ],
   "gates": [
    11,
    12,
    22,
    47
   ]
  },
  "Depth": {
   "sunGates": [
    48
   ],
   "quads": [
    [
     48,
     21,
     53,
     54
    ]
   ],
   "gates": [
    21,
    48,
    53,
    54
   ]
  },
  "Principles": {
   "sunGates": [
    49
   ],
   "quads": [
    [
     49,
     4,
     14,
     8
    ]
   ],
   "gates": [
    4,
    8,
    14,
    49
   ]
  },
  "Values": {
   "sunGates": [
    50
   ],
   "quads": [
    [
     50,
     3,
     31,
     41
    ]
   ],
   "gates": [
    3,
    31,
    41,
    50
   ]
  },
  "Shock": {
   "sunGates": [
    51
   ],
   "quads": [
    [
     51,
     57,
     61,
     62
    ]
   ],
   "gates": [
    51,
    57,
    61,
    62
   ]
  },
  "Stillness": {
   "sunGates": [
    52
   ],
   "quads": [
    [
     52,
     58,
     21,
     48
    ]
   ],
   "gates": [
    21,
    48,
    52,
    58
   ]
  },
  "Beginnings": {
   "sunGates": [
    53
   ],
   "quads": [
    [
     53,
     54,
     42,
     32
    ]
   ],
   "gates": [
    32,
    42,
    53,
    54
   ]
  },
  "Ambition": {
   "sunGates": [
    54
   ],
   "quads": [
    [
     54,
     53,
     32,
     42
    ]
   ],
   "gates": [
    32,
    42,
    53,
    54
   ]
  },
  "Moods": {
   "sunGates": [
    55
   ],
   "quads": [
    [
     55,
     59,
     9,
     16
    ]
   ],
   "gates": [
    9,
    16,
    55,
    59
   ]
  },
  "Stimulation": {
   "sunGates": [
    56
   ],
   "quads": [
    [
     56,
     60,
     27,
     28
    ]
   ],
   "gates": [
    27,
    28,
    56,
    60
   ]
  },
  "Intuition": {
   "sunGates": [
    57
   ],
   "quads": [
    [
     57,
     51,
     62,
     61
    ]
   ],
   "gates": [
    51,
    57,
    61,
    62
   ]
  },
  "Vitality": {
   "sunGates": [
    58
   ],
   "quads": [
    [
     58,
     52,
     48,
     21
    ]
   ],
   "gates": [
    21,
    48,
    52,
    58
   ]
  },
  "Strategy": {
   "sunGates": [
    59
   ],
   "quads": [
    [
     59,
     55,
     16,
     9
    ]
   ],
   "gates": [
    9,
    16,
    55,
    59
   ]
  },
  "Limitation": {
   "sunGates": [
    60
   ],
   "quads": [
    [
     60,
     56,
     28,
     27
    ]
   ],
   "gates": [
    27,
    28,
    56,
    60
   ]
  },
  "Thinking": {
   "sunGates": [
    61
   ],
   "quads": [
    [
     61,
     62,
     50,
     3
    ]
   ],
   "gates": [
    3,
    50,
    61,
    62
   ]
  },
  "Detail": {
   "sunGates": [
    62
   ],
   "quads": [
    [
     62,
     61,
     3,
     50
    ]
   ],
   "gates": [
    3,
    50,
    61,
    62
   ]
  },
  "Doubts": {
   "sunGates": [
    63
   ],
   "quads": [
    [
     63,
     64,
     26,
     45
    ]
   ],
   "gates": [
    26,
    45,
    63,
    64
   ]
  },
  "Confusion": {
   "sunGates": [
    64
   ],
   "quads": [
    [
     64,
     63,
     45,
     26
    ]
   ],
   "gates": [
    26,
    45,
    63,
    64
   ]
  }
 }
};
