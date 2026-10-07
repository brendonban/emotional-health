// Slide markup for the Calm Collective introductory deck (1920×1080 canvas).
// Edit text here; images live in /public/calm-collective/.
const slides: string[] = [
  // cover
  `<section id="cover" data-transition="fade" style="background:#fafafa">
  <img src="/calm-collective/cc-talks.png" alt="Calm Collective illustration of three people talking on cushions" data-build-in="fade 1 auto" style="position:absolute; top:330px; left:1152px; width:640px; height:559px; object-fit:contain">
  <div data-build-in="fade 1 auto" style="position:absolute; top:96px; left:128px; width:352px; height:124px; display:flex; flex-direction:row; align-items:center; justify-content:center; background:#ffffff; border:1px solid #dcdcdc; border-radius:20px">
    <img src="/calm-collective/um-logo.png" alt="Universiti Malaya logo" data-crop="1 0% 50%" style="width:316px; height:110px; opacity:1">
  </div>
  <p data-build-in="fade 1 auto" style="position:absolute; top:126px; left:504px; width:48px; font-family:Poppins, Arial, sans-serif; font-size:44px; font-weight:400; text-align:center; color:#6b6b6b">×</p>
  <img src="/calm-collective/cc-logo.png" alt="Calm Collective Asia logo" data-build-in="fade 1 auto" style="position:absolute; top:96px; left:576px; width:338px; height:124px; object-fit:contain">
  <p data-build-in="rise 2 auto" style="position:absolute; top:348px; left:128px; width:1000px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:#006594">Research collaboration proposal · 2026</p>
  <h1 data-build-in="rise 2 auto" style="position:absolute; top:calc(50% + 8px); left:128px; width:888.91px; font-family:Poppins, Arial, sans-serif; font-size:96px; font-weight:600; line-height:1.1; letter-spacing:-1px; color:#1c1c1c; transform:translateY(-50%)">Rising <span style="color:#006594">above</span><br>the line</h1>
  <p data-build-in="rise 3 auto" style="position:absolute; top:735.41px; left:128px; width:826.58px; font-family:Poppins, Arial, sans-serif; font-size:28px; line-height:1.45; color:#4a4a4a">Co-delivering and evaluating a four-module emotional health programme for young adults in Malaysia</p>
</section>`,
  // mission
  `<section id="mission" data-transition="fade" style="background:#fcf3f3">
  <p style="position:absolute; top:128px; left:128px; width:1200px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:#006594">Why we’re reaching out</p>
  <h2 style="position:absolute; top:168px; left:128px; width:1664px; font-family:Poppins, Arial, sans-serif; font-size:64px; font-weight:600; line-height:1.15; color:#1c1c1c">Why Calm Collective?</h2>
  <div data-build-in="rise 1" style="position:absolute; top:300px; left:128px; width:816px; height:411.19px; display:flex; flex-direction:column; gap:20px; padding:48px; background:#ffffff; border-radius:24px">
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#006594">Your vision</p>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:40px; font-weight:500; line-height:1.3; color:#1c1c1c">“…so that people can get the help proactively — before it’s too late.”</p>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">Calm Collective</p>
  </div>
  <div data-build-in="rise 2" style="position:absolute; top:300px; left:976px; width:816px; display:flex; flex-direction:column; gap:20px; padding:48px; background:#ffffff; border-radius:24px">
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#006594">Our study</p>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:40px; font-weight:500; line-height:1.3; color:#1c1c1c">Does a four-week group programme help young adults feel less distressed and less ashamed of getting help?</p>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">Universiti Malaya</p>
  </div>
  <div data-build-in="fade 3" style="position:absolute; top:804px; left:128px; width:12px; height:52px; display:flex; flex-direction:column; background:#f0606f; border-radius:6px">
  </div>
  <p data-build-in="fade 3" style="position:absolute; top:804px; left:172px; width:1600px; font-family:Poppins, Arial, sans-serif; font-size:32px; font-weight:500; line-height:1.4; color:#1c1c1c">Our sessions use small breakout groups of 6–8 much like Calm Circles.</p>
  <p style="position:absolute; bottom:64px; left:128px; width:1200px; font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">Universiti Malaya × Calm Collective</p>
  <p style="position:absolute; right:128px; bottom:64px; width:120px; font-family:Poppins, Arial, sans-serif; font-size:24px; text-align:right; color:#6b6b6b">2</p>
</section>`,
  // programme
  `<section id="programme" data-transition="fade" style="background:#fafafa">
  <p style="position:absolute; top:128px; left:128px; width:1200px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:#006594">The programme</p>
  <h2 style="position:absolute; top:168px; left:128px; width:1664px; font-family:Poppins, Arial, sans-serif; font-size:64px; font-weight:600; line-height:1.15; color:#1c1c1c">Four weekly modules, 90 minutes each</h2>
  <div data-build-in="rise 1" style="position:absolute; top:300px; left:128px; width:392px; height:351.98px; display:flex; flex-direction:column; gap:16px; padding:36px; background:#ffffff; border:1px solid #dcdcdc; border-radius:24px">
    <p style="width:88px; padding:6px 0; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; text-align:center; color:#fafafa; background:#006594; border-radius:256px">01</p>
    <h3 style="font-family:Poppins, Arial, sans-serif; font-size:40px; font-weight:600; line-height:1.2; color:#1c1c1c">Presence</h3>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; line-height:1.45; color:#4a4a4a">Notice which centre you lean on: head, heart or body.</p>
  </div>
  <div data-build-in="rise 2" style="position:absolute; top:300px; left:552px; width:392px; display:flex; flex-direction:column; gap:16px; padding:36px; background:#ffffff; border:1px solid #dcdcdc; border-radius:24px">
    <p style="width:88px; padding:6px 0; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; text-align:center; color:#fafafa; background:#006594; border-radius:256px">02</p>
    <h3 style="font-family:Poppins, Arial, sans-serif; font-size:40px; font-weight:600; line-height:1.2; color:#1c1c1c">The line of choice</h3>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; line-height:1.45; color:#4a4a4a">Catch blame, defend, deny and justify, then choose again.</p>
  </div>
  <div data-build-in="rise 3" style="position:absolute; top:300px; left:976px; width:392px; display:flex; flex-direction:column; gap:16px; padding:36px; background:#ffffff; border:1px solid #dcdcdc; border-radius:24px">
    <p style="width:88px; padding:6px 0; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; text-align:center; color:#fafafa; background:#006594; border-radius:256px">03</p>
    <h3 style="font-family:Poppins, Arial, sans-serif; font-size:40px; font-weight:600; line-height:1.2; color:#1c1c1c">Moving up the levels</h3>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; line-height:1.45; color:#4a4a4a">Spot the coping habits and defences that hold you back.</p>
  </div>
  <div data-build-in="rise 4" style="position:absolute; top:300px; left:1400px; width:392px; height:351.98px; display:flex; flex-direction:column; gap:16px; padding:36px; background:#00405f; border-radius:24px">
    <p style="width:88px; padding:6px 0; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; text-align:center; color:#00405f; background:#a0d0e0; border-radius:256px">04</p>
    <h3 style="font-family:Poppins, Arial, sans-serif; font-size:40px; font-weight:600; line-height:1.2; color:#fafafa">Leading above the line</h3>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; line-height:1.45; color:#dce9ef">Lead by example with family, friends and peers.</p>
  </div>
  <p data-build-in="fade 5" style="position:absolute; top:740px; left:128px; width:1200px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#6b6b6b">Each session</p>
  <div data-build-in="fade 5" style="position:absolute; top:792px; left:128px; width:1664px; display:flex; flex-direction:row; gap:16px; align-items:center">
    <p style="padding:14px 32px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:500; color:#fafafa; background:#1c1c1c; border-radius:256px">Online, whole group of 30–40</p>
    <p style="padding:14px 32px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:500; color:#1c1c1c; background:#fcf3f3; border-radius:256px">Facilitate</p>
    <p style="padding:14px 32px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:500; color:#1c1c1c; background:#fcf3f3; border-radius:256px">Reflect in breakouts of 6–8</p>
    <p style="padding:14px 32px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:500; color:#1c1c1c; background:#fcf3f3; border-radius:256px">Share and close</p>
  </div>
  <p style="position:absolute; bottom:64px; left:128px; width:1400px; font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">Adapted from the Global Leadership Foundation's emotional health framework</p>
  <p style="position:absolute; right:128px; bottom:64px; width:120px; font-family:Poppins, Arial, sans-serif; font-size:24px; text-align:right; color:#6b6b6b">3</p>
</section>`,
  // study
  `<section id="study" data-transition="fade" style="background:#fcf3f3">
  <p style="position:absolute; top:128px; left:128px; width:1200px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:#006594">The research</p>
  <h2 style="position:absolute; top:168px; left:128px; width:1664px; font-family:Poppins, Arial, sans-serif; font-size:64px; font-weight:600; line-height:1.15; color:#1c1c1c">A randomised trial with a waitlist control</h2>
  <div style="position:absolute; top:300px; left:128px; width:260px; height:112px; display:flex; flex-direction:column; justify-content:center">
    <p style="font-family:Poppins, Arial, sans-serif; font-size:28px; font-weight:600; color:#1c1c1c">Programme</p>
  </div>
  <div style="position:absolute; top:436px; left:128px; width:260px; height:112px; display:flex; flex-direction:column; justify-content:center">
    <p style="font-family:Poppins, Arial, sans-serif; font-size:28px; font-weight:600; color:#1c1c1c">Waitlist</p>
  </div>
  <div data-build-in="rise 1" style="position:absolute; top:300px; left:420px; width:330px; height:112px; display:flex; flex-direction:column; gap:2px; justify-content:center; padding:0 28px; background:#ffffff; border-radius:20px">
    <p style="font-family:Poppins, Arial, sans-serif; font-size:28px; font-weight:600; color:#1c1c1c">Pretest</p>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">Week 0</p>
  </div>
  <div data-build-in="rise 2" style="position:absolute; top:300px; left:770px; width:330px; height:112px; display:flex; flex-direction:column; gap:2px; justify-content:center; padding:0 28px; background:#00405f; border-radius:20px">
    <p style="font-family:Poppins, Arial, sans-serif; font-size:28px; font-weight:600; color:#fafafa">4 modules</p>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; color:#dce9ef">Weeks 1–4</p>
  </div>
  <div data-build-in="rise 3" style="position:absolute; top:300px; left:1120px; width:330px; height:112px; display:flex; flex-direction:column; gap:2px; justify-content:center; padding:0 28px; background:#ffffff; border-radius:20px">
    <p style="font-family:Poppins, Arial, sans-serif; font-size:28px; font-weight:600; color:#1c1c1c">Posttest</p>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">Week 5</p>
  </div>
  <div data-build-in="rise 1" style="position:absolute; top:436px; left:420px; width:330px; height:112px; display:flex; flex-direction:column; gap:2px; justify-content:center; padding:0 28px; background:#ffffff; border-radius:20px">
    <p style="font-family:Poppins, Arial, sans-serif; font-size:28px; font-weight:600; color:#1c1c1c">Pretest</p>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">Week 0</p>
  </div>
  <div data-build-in="rise 2" style="position:absolute; top:436px; left:770px; width:330px; height:112px; display:flex; flex-direction:column; gap:2px; justify-content:center; padding:0 28px; border:2px dashed #a0a0a0; border-radius:20px">
    <p style="font-family:Poppins, Arial, sans-serif; font-size:28px; font-weight:600; color:#4a4a4a">Wait</p>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">Weeks 1–4</p>
  </div>
  <div data-build-in="rise 3" style="position:absolute; top:436px; left:1120px; width:330px; height:112px; display:flex; flex-direction:column; gap:2px; justify-content:center; padding:0 28px; background:#ffffff; border-radius:20px">
    <p style="font-family:Poppins, Arial, sans-serif; font-size:28px; font-weight:600; color:#1c1c1c">Posttest</p>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">Week 5</p>
  </div>
  <div data-build-in="rise 4" style="position:absolute; top:436px; left:1470px; width:322px; height:112px; display:flex; flex-direction:column; gap:2px; justify-content:center; padding:0 28px; background:#00405f; border-radius:20px">
    <p style="font-family:Poppins, Arial, sans-serif; font-size:28px; font-weight:600; color:#fafafa">4 modules</p>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; color:#dce9ef">Weeks 6–9</p>
  </div>
  <p data-build-in="fade 5" style="position:absolute; top:612px; left:128px; width:1200px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#006594">Three outcomes</p>
  <div data-build-in="fade 5" style="position:absolute; top:660px; left:128px; width:1664px; display:flex; flex-direction:row; gap:32px">
    <div style="display:flex; flex-direction:column; gap:6px; flex:1; padding:28px 32px; background:#ffffff; border-radius:20px">
      <p style="font-family:Poppins, Arial, sans-serif; font-size:32px; font-weight:600; color:#1c1c1c">Emotional health</p>
      <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">DASS-21</p>
    </div>
    <div style="display:flex; flex-direction:column; gap:6px; flex:1; padding:28px 32px; background:#ffffff; border-radius:20px">
      <p style="font-family:Poppins, Arial, sans-serif; font-size:32px; font-weight:600; color:#1c1c1c">Self-compassion</p>
      <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">SCS-SF</p>
    </div>
    <div style="display:flex; flex-direction:column; gap:6px; flex:1; padding:28px 32px; background:#ffffff; border-radius:20px">
      <p style="font-family:Poppins, Arial, sans-serif; font-size:32px; font-weight:600; color:#1c1c1c">Help-seeking stigma</p>
      <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">SSOSH</p>
    </div>
  </div>
  <p style="position:absolute; bottom:64px; left:128px; width:1400px; font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">60–80 young adults in Malaysia · Online · Everyone receives the programme</p>
  <p style="position:absolute; right:128px; bottom:64px; width:120px; font-family:Poppins, Arial, sans-serif; font-size:24px; text-align:right; color:#6b6b6b">4</p>
</section>`,
  // methodology
  `<section id="methodology" data-transition="fade" style="background:#fafafa">
  <p style="position:absolute; top:128px; left:128px; width:1200px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:#006594">Methodology</p>
  <h2 style="position:absolute; top:168px; left:128px; width:1664px; font-family:Poppins, Arial, sans-serif; font-size:64px; font-weight:600; line-height:1.15; color:#1c1c1c">How the study works</h2>
  <div data-build-in="rise 1" style="position:absolute; top:300px; left:128px; width:392px; display:flex; flex-direction:column; gap:16px; padding:36px; background:#ffffff; border:1px solid #dcdcdc; border-radius:24px">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:48px; height:48px; color:#006594;display:block"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    <h3 style="font-family:Poppins, Arial, sans-serif; font-size:36px; font-weight:600; line-height:1.2; color:#1c1c1c">Participants</h3>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; line-height:1.45; color:#4a4a4a">60–80 young adults aged 18–30 in Malaysia, not currently in counselling.</p>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; line-height:1.45; color:#6b6b6b">Minimum 34 (G*Power)</p>
  </div>
  <div data-build-in="rise 2" style="position:absolute; top:300px; left:552px; width:392px; height:352.38px; display:flex; flex-direction:column; gap:16px; padding:36px; background:#ffffff; border:1px solid #dcdcdc; border-radius:24px">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:48px; height:48px; color:#006594;display:block"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    <h3 style="font-family:Poppins, Arial, sans-serif; font-size:36px; font-weight:600; line-height:1.2; color:#1c1c1c">Recruitment</h3>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; line-height:1.45; color:#4a4a4a">Universities, student societies, social media and partner networks, including Calm Collective.</p>
  </div>
  <div data-build-in="rise 3" style="position:absolute; top:300px; left:976px; width:392px; height:352.38px; display:flex; flex-direction:column; gap:16px; padding:36px; background:#ffffff; border:1px solid #dcdcdc; border-radius:24px">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:48px; height:48px; color:#006594;display:block"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
    <h3 style="font-family:Poppins, Arial, sans-serif; font-size:36px; font-weight:600; line-height:1.2; color:#1c1c1c">Procedure</h3>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; line-height:1.45; color:#4a4a4a">Online consent and screening, pretest, random allocation, four modules, posttest.</p>
  </div>
  <div data-build-in="rise 4" style="position:absolute; top:300px; left:1400px; width:392px; height:352.38px; display:flex; flex-direction:column; gap:16px; padding:36px; background:#00405f; border-radius:24px">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:48px; height:48px; color:#a0d0e0;display:block"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
    <h3 style="font-family:Poppins, Arial, sans-serif; font-size:36px; font-weight:600; line-height:1.2; color:#fafafa">Analysis</h3>
    <p style="font-family:Poppins, Arial, sans-serif; font-size:24px; line-height:1.45; color:#dce9ef">Mixed ANOVA (group × time) in R, confirmed with ANCOVA, with effect sizes.</p>
  </div>
  <div data-build-in="fade 5" style="position:absolute; top:780px; left:128px; width:1664px; display:flex; flex-direction:row; gap:16px; align-items:center">
    <p style="padding:14px 32px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:500; color:#fafafa; background:#1c1c1c; border-radius:256px">UM ethics approval first</p>
    <p style="padding:14px 32px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:500; color:#1c1c1c; background:#fcf3f3; border-radius:256px">Severe distress at screening → counsellor referral</p>
    <p style="padding:14px 32px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:500; color:#1c1c1c; background:#fcf3f3; border-radius:256px">Data under PDPA 2010</p>
  </div>
  <p style="position:absolute; bottom:64px; left:128px; width:1400px; font-family:Poppins, Arial, sans-serif; font-size:24px; color:#6b6b6b">Reported to CONSORT guidelines</p>
  <p style="position:absolute; right:128px; bottom:64px; width:120px; font-family:Poppins, Arial, sans-serif; font-size:24px; text-align:right; color:#6b6b6b">5</p>
</section>`,
  // close
  `<section id="close" data-transition="fade" style="background:#00405f">
  <div data-build-in="pop 1 auto" style="position:absolute; top:256px; left:1192px; width:600px; height:600px; display:flex; flex-direction:row; align-items:center; justify-content:center; background:#fafafa; border-radius:300px">
    <img src="/calm-collective/cc-circles.png" alt="Calm Collective illustration of two people reaching out" style="width:440px; height:443px; object-fit:contain">
  </div>
  <div data-build-in="fade 1 auto" style="position:absolute; top:96px; left:128px; width:352px; height:124px; display:flex; flex-direction:row; align-items:center; justify-content:center; background:#ffffff; border-radius:20px">
    <img src="/calm-collective/um-logo.png" alt="Universiti Malaya logo" style="width:316px; height:110px; object-fit:contain">
  </div>
  <p data-build-in="fade 1 auto" style="position:absolute; top:126px; left:504px; width:48px; font-family:Poppins, Arial, sans-serif; font-size:44px; font-weight:400; text-align:center; color:#a0d0e0">×</p>
  <img src="/calm-collective/cc-logo-white.png" alt="Calm Collective Asia logo" data-build-in="fade 1 auto" style="position:absolute; top:96px; left:576px; width:338px; height:124px; object-fit:contain">
  <p data-build-in="rise 2 auto" style="position:absolute; top:340px; left:128px; width:1000px; font-family:Poppins, Arial, sans-serif; font-size:24px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:#a0d0e0">Questions and discussion</p>
  <h1 data-build-in="rise 2 auto" style="position:absolute; top:390px; left:128px; width:1040px; font-family:Poppins, Arial, sans-serif; font-size:96px; font-weight:600; line-height:1.1; letter-spacing:-1px; color:#fafafa">Terima kasih</h1>
  <p data-build-in="rise 3 auto" style="position:absolute; top:530px; left:128px; width:960px; font-family:Poppins, Arial, sans-serif; font-size:40px; font-weight:500; line-height:1.3; color:#dce9ef">Let's normalise help-seeking together.</p>
  <p id="e8-b1hmw3" data-build-in="fade 4 auto" style="position:absolute; top:800px; left:128px; width:1000px; font-family:Poppins, Arial, sans-serif; font-size:24px; color:#a0d0e0">Master of Counselling, Universiti Malaya ·&nbsp;</p>
  <p id="e7ad7cb5" data-build-in="fade 4 auto" style="position:absolute; top:750px; left:128px; width:1000px; font-family:sans-serif; font-size:28px; font-weight:600; color:#f6f3ea">Brendon Ban · 22059169@siswa.um.edu.my</p>
</section>`
];

export default slides;
