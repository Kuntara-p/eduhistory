/**
 * History & Social Studies Class Dashboard (ป.5 - ป.6)
 * Smart Auto-Semester Switching by Today's Date
 */

// ==========================================
// 1. OFFICIAL CURRICULUM STRUCTURE
// ==========================================

const CURRICULUM_DATA = {
  // ----------------------------------------
  // วิชาประวัติศาสตร์ ป.6 (ส 16102)
  // ----------------------------------------
  'history_p6': {
    code: 'ส 16102',
    name: 'ประวัติศาสตร์',
    title: 'โครงสร้างรายวิชาประวัติศาสตร์',
    grade: 'ป.6',
    hoursPerYear: 40,
    hoursPerWeek: 1,
    scoresSummary: { accumulated: 70, midterm: 15, final: 15, total: 100 },
    units: [
      {
        unitNo: 1,
        name: 'การศึกษาเรื่องราวทางประวัติศาสตร์',
        semester: 'ภาคเรียนที่ 1',
        semesterKey: '1',
        hours: 8,
        score: 15,
        indicators: [
          { code: 'ส 4.1 ป.6/1', type: 'ระหว่างทาง', desc: 'อธิบายความสำคัญของวิธีการทางประวัติศาสตร์ ในการศึกษาเรื่องราวทางประวัติศาสตร์อย่างง่าย ๆ', max: 7 },
          { code: 'ส 4.1 ป.6/2', type: 'ปลายทาง', desc: 'นำเสนอข้อมูลจากหลักฐานที่หลากหลายในการทำความเข้าใจเรื่องราวสำคัญในอดีต', max: 8 }
        ],
        topics: [
          'การศึกษาประวัติศาสตร์ไทยโดยวิธีการทางประวัติศาสตร์',
          'ตัวอย่างการศึกษาเรื่องราวในท้องถิ่นโดยใช้วิธีการทางประวัติศาสตร์',
          'หลักฐานในการศึกษาประวัติศาสตร์ไทยสมัยรัตนโกสินทร์',
          'แหล่งข้อมูลในการศึกษาประวัติศาสตร์ไทยสมัยรัตนโกสินทร์',
          'การนำเสนอข้อมูลที่ได้จากหลักฐานทางประวัติศาสตร์'
        ]
      },
      {
        unitNo: 2,
        name: 'ประเทศเพื่อนบ้านของไทย',
        semester: 'ภาคเรียนที่ 1 - 2',
        semesterKey: '1',
        hours: 17,
        score: 20,
        indicators: [
          { code: 'ส 4.2 ป.6/1', type: 'ปลายทาง', desc: 'อธิบายสภาพสังคม เศรษฐกิจและการเมืองของประเทศเพื่อนบ้านในปัจจุบัน', max: 10 },
          { code: 'ส 4.2 ป.6/2', type: 'ระหว่างทาง', desc: 'บอกความสัมพันธ์ของกลุ่มอาเซียน โดยสังเขป', max: 10 }
        ],
        topics: [
          'ตำแหน่งที่ตั้งและสภาพเศรษฐกิจ สังคม การเมืองการปกครองของประเทศเพื่อนบ้าน (เมียนมา, ลาว, กัมพูชา, มาเลเซีย)',
          'พัฒนาการทางประวัติศาสตร์ของประเทศเพื่อนบ้าน',
          'ความเหมือนและความแตกต่างระหว่างประเทศไทยกับประเทศเพื่อนบ้าน',
          'สมาคมอาเซียนและความสัมพันธ์ของกลุ่มประเทศอาเซียน'
        ]
      },
      {
        unitNo: 'midterm',
        name: 'สอบกลางปี (ประเมินผลกลางภาคเรียนที่ 1)',
        semester: 'ภาคเรียนที่ 1',
        semesterKey: '1',
        hours: 2,
        score: 15,
        indicators: [{ code: 'สอบกลางปี', type: 'สอบวัดผล', desc: 'ประเมินผลการเรียนรู้กลางปี สาระประวัติศาสตร์ หน่วยที่ 1 และ 2', max: 15 }],
        topics: ['ประเมินผลกลางภาคเรียนที่ 1']
      },
      {
        unitNo: 3,
        name: 'อาณาจักรไทยสมัยรัตนโกสินทร์',
        semester: 'ภาคเรียนที่ 2',
        semesterKey: '2',
        hours: 15,
        score: 35,
        indicators: [
          { code: 'ส 4.3 ป.6/1', type: 'ปลายทาง', desc: 'อธิบายพัฒนาการของไทยสมัยรัตนโกสินทร์โดยสังเขป', max: 9 },
          { code: 'ส 4.3 ป.6/2', type: 'ปลายทาง', desc: 'อธิบายปัจจัยที่ส่งเสริมความเจริญรุ่งเรืองทางเศรษฐกิจและการปกครองของไทยสมัยรัตนโกสินทร์', max: 9 },
          { code: 'ส 4.3 ป.6/3', type: 'ระหว่างทาง', desc: 'ยกตัวอย่างผลงานของบุคคลสำคัญด้านต่าง ๆ สมัยรัตนโกสินทร์', max: 9 },
          { code: 'ส 4.3 ป.6/4', type: 'ระหว่างทาง', desc: 'อธิบายภูมิปัญญาไทยที่สำคัญสมัยรัตนโกสินทร์ ที่น่าภาคภูมิใจ และควรค่าแก่การอนุรักษ์ไว้', max: 8 }
        ],
        topics: [
          'การสถาปนาอาณาจักรรัตนโกสินทร์และพระราชกรณียกิจรัชกาลที่ 1',
          'พัฒนาการด้านการเมืองการปกครอง เศรษฐกิจ และสังคม ยุครัตนโกสินทร์ตอนต้น',
          'พัฒนาการยุคปฏิรูปประเทศให้เป็นแบบสมัยใหม่ (รัชกาลที่ 4 - 6)',
          'พัฒนาการยุคปฏิรูปการปกครองเป็นระบอบประชาธิปไตย',
          'ปัจจัยที่ส่งเสริมความเจริญรุ่งเรืองในสมัยรัตนโกสินทร์',
          'ประวัติและผลงานของบุคคลสำคัญสมัยรัตนโกสินทร์',
          'ภูมิปัญญาไทยในสมัยรัตนโกสินทร์ที่ควรค่าแก่การอนุรักษ์'
        ]
      },
      {
        unitNo: 'final',
        name: 'สอบปลายปี (ประเมินผลปลายภาคเรียนที่ 2)',
        semester: 'ภาคเรียนที่ 2',
        semesterKey: '2',
        hours: 2,
        score: 15,
        indicators: [{ code: 'สอบปลายปี', type: 'สอบวัดผล', desc: 'ประเมินผลการเรียนรู้ปลายปี สาระประวัติศาสตร์ หน่วยที่ 3', max: 15 }],
        topics: ['ประเมินผลปลายภาคเรียนที่ 2']
      }
    ]
  },

  // ----------------------------------------
  // วิชาประวัติศาสตร์ ป.5 (ส 15102)
  // ----------------------------------------
  'history_p5': {
    code: 'ส 15102',
    name: 'ประวัติศาสตร์',
    title: 'โครงสร้างรายวิชาประวัติศาสตร์',
    grade: 'ป.5',
    hoursPerYear: 40,
    hoursPerWeek: 1,
    scoresSummary: { accumulated: 70, midterm: 15, final: 15, total: 100 },
    units: [
      {
        unitNo: 1,
        name: 'ความเป็นมาของท้องถิ่น',
        semester: 'ภาคเรียนที่ 1',
        semesterKey: '1',
        hours: 11,
        score: 20,
        indicators: [
          { code: 'ส 4.1 ป.5/1', type: 'ปลายทาง', desc: 'สืบค้นความเป็นมาของท้องถิ่นโดยใช้หลักฐานที่หลากหลาย', max: 6 },
          { code: 'ส 4.1 ป.5/2', type: 'ปลายทาง', desc: 'รวบรวมข้อมูลจากแหล่งต่าง ๆ เพื่อตอบคำถามทางประวัติศาสตร์อย่างมีเหตุผล', max: 6 },
          { code: 'ส 4.1 ป.5/3', type: 'ระหว่างทาง', desc: 'อธิบายความแตกต่างระหว่างความจริงกับข้อเท็จจริงเกี่ยวกับเรื่องราวในท้องถิ่น', max: 8 }
        ],
        topics: [
          'ท้องถิ่นของเราและการสืบค้นความเป็นมาของท้องถิ่น',
          'หลักฐานทางประวัติศาสตร์ที่ใช้ในการศึกษาท้องถิ่น',
          'การตั้งคำถามและตอบคำถามทางประวัติศาสตร์อย่างมีเหตุผล',
          'ความจริงกับข้อเท็จจริงเกี่ยวกับเรื่องราวในท้องถิ่น'
        ]
      },
      {
        unitNo: 2,
        name: 'การสร้างสรรค์อารยธรรม',
        semester: 'ภาคเรียนที่ 1',
        semesterKey: '1',
        hours: 7,
        score: 15,
        indicators: [
          { code: 'ส 4.2 ป.5/1', type: 'ระหว่างทาง', desc: 'อธิบายอิทธิพลของอารยธรรมอินเดียและจีนที่มีต่อไทยและเอเชียตะวันออกเฉียงใต้ โดยสังเขป', max: 8 },
          { code: 'ส 4.2 ป.5/2', type: 'ปลายทาง', desc: 'อภิปรายอิทธิพลของวัฒนธรรมต่างชาติที่มีต่อสังคมไทยปัจจุบันโดยสังเขป', max: 7 }
        ],
        topics: [
          'อารยธรรมอินเดียและอารยธรรมจีนที่มีต่อไทยและเอเชียตะวันออกเฉียงใต้',
          'อิทธิพลของวัฒนธรรมต่างชาติและผลกระทบต่อสังคมไทย'
        ]
      },
      {
        unitNo: 'midterm',
        name: 'สอบกลางปี (ประเมินผลกลางภาคเรียนที่ 1)',
        semester: 'ภาคเรียนที่ 1',
        semesterKey: '1',
        hours: 2,
        score: 15,
        indicators: [{ code: 'สอบกลางปี', type: 'สอบวัดผล', desc: 'ประเมินผลการเรียนรู้กลางปี สาระประวัติศาสตร์ หน่วยที่ 1 และ 2', max: 15 }],
        topics: ['ประเมินผลกลางภาคเรียนที่ 1']
      },
      {
        unitNo: 3,
        name: 'อาณาจักรอยุธยา',
        semester: 'ภาคเรียนที่ 2',
        semesterKey: '2',
        hours: 14,
        score: 20,
        indicators: [
          { code: 'ส 4.3 ป.5/1', type: 'ปลายทาง', desc: 'อธิบายพัฒนาการของอาณาจักรอยุธยาและธนบุรีโดยสังเขป', max: 5 },
          { code: 'ส 4.3 ป.5/2', type: 'ระหว่างทาง', desc: 'อธิบายปัจจัยที่ส่งเสริมความเจริญรุ่งเรืองทางเศรษฐกิจ และการปกครองของอาณาจักรอยุธยา', max: 5 },
          { code: 'ส 4.3 ป.5/3', type: 'ระหว่างทาง', desc: 'บอกประวัติและผลงานของบุคคลสำคัญสมัยอยุธยาและธนบุรีที่น่าภาคภูมิใจ', max: 5 },
          { code: 'ส 4.3 ป.5/4', type: 'ระหว่างทาง', desc: 'อธิบายภูมิปัญญาไทยที่สำคัญสมัยอยุธยาและธนบุรีที่น่าภาคภูมิใจและควรค่าแก่การอนุรักษ์ไว้', max: 5 }
        ],
        topics: ['การสถาปนาอาณาจักรอยุธยา', 'พัฒนาการด้านการเมือง เศรษฐกิจ สังคม', 'บุคคลสำคัญและภูมิปัญญาไทยสมัยอยุธยา']
      },
      {
        unitNo: 4,
        name: 'อาณาจักรธนบุรี',
        semester: 'ภาคเรียนที่ 2',
        semesterKey: '2',
        hours: 8,
        score: 15,
        indicators: [
          { code: 'ส 4.3 ป.5/1 (ธนบุรี)', type: 'ปลายทาง', desc: 'อธิบายพัฒนาการของอาณาจักรธนบุรีโดยสังเขป', max: 5 },
          { code: 'ส 4.3 ป.5/3 (ธนบุรี)', type: 'ระหว่างทาง', desc: 'บอกประวัติและผลงานของสมเด็จพระเจ้าตากสินมหาราชและบุคคลสำคัญสมัยธนบุรี', max: 5 },
          { code: 'ส 4.3 ป.5/4 (ธนบุรี)', type: 'ระหว่างทาง', desc: 'อธิบายภูมิปัญญาไทยสมัยธนบุรีที่ควรค่าแก่การอนุรักษ์', max: 5 }
        ],
        topics: ['การกอบกู้เอกราชและการสถาปนาอาณาจักรธนบุรี', 'พัฒนาการด้านต่างๆ สมัยธนบุรี']
      },
      {
        unitNo: 'final',
        name: 'สอบปลายปี (ประเมินผลปลายภาคเรียนที่ 2)',
        semester: 'ภาคเรียนที่ 2',
        semesterKey: '2',
        hours: 2,
        score: 15,
        indicators: [{ code: 'สอบปลายปี', type: 'สอบวัดผล', desc: 'ประเมินผลการเรียนรู้ปลายปี สาระประวัติศาสตร์ หน่วยที่ 3 และ 4', max: 15 }],
        topics: ['ประเมินผลปลายภาคเรียนที่ 2']
      }
    ]
  },

  // ----------------------------------------
  // วิชาสังคมศึกษา ป.6 (ส 16101)
  // ----------------------------------------
  'social_p6': {
    code: 'ส 16101',
    name: 'สังคมศึกษา ศาสนาและวัฒนธรรม',
    title: 'โครงสร้างรายวิชาสังคมศึกษา ศาสนาและวัฒนธรรม',
    grade: 'ป.6',
    hoursPerYear: 80,
    hoursPerWeek: 2,
    scoresSummary: { accumulated: 70, midterm: 15, final: 15, total: 100 },
    units: [
      {
        unitNo: 1,
        name: 'ศาสนา ศีลธรรม จริยธรรม',
        semester: 'ภาคเรียนที่ 1',
        semesterKey: '1',
        hours: 25,
        score: 20,
        indicators: [
          { code: 'ส 1.1 ป.6/1-2', type: 'ระหว่างทาง', desc: 'วิเคราะห์ความสำคัญของพุทธศาสนาและสรุปพุทธประวัติ', max: 5 },
          { code: 'ส 1.1 ป.6/3,5', type: 'ปลายทาง', desc: 'เห็นคุณค่าพุทธสาวก ชาดก ศาสนิกชนตัวอย่าง', max: 5 },
          { code: 'ส 1.1 ป.6/4,7', type: 'ปลายทาง', desc: 'ปฏิบัติตามโอวาท 3 และแก้ปัญหาอบายมุข', max: 5 },
          { code: 'ส 1.2 ป.6/1-4', type: 'ปลายทาง', desc: 'หน้าที่ชาวพุทธ มรรยาท และศาสนพิธี', max: 5 }
        ],
        topics: ['ความสำคัญของพระพุทธศาสนาและพุทธประวัติ', 'หลักธรรมโอวาท 3', 'หน้าที่และมรรยาทชาวพุทธ', 'ศาสนาต่างๆ ในประเทศไทย']
      },
      {
        unitNo: 2,
        name: 'หน้าที่พลเมือง วัฒนธรรม และการดำเนินชีวิต',
        semester: 'ภาคเรียนที่ 1',
        semesterKey: '1',
        hours: 15,
        score: 15,
        indicators: [
          { code: 'ส 2.1 ป.6/1,5', type: 'ระหว่างทาง', desc: 'ปฏิบัติตามกฎหมายและเลือกรับข้อมูลข่าวสาร', max: 5 },
          { code: 'ส 2.2 ป.6/1-3', type: 'ปลายทาง', desc: 'การเมืองการปกครองและประชาธิปไตย', max: 5 },
          { code: 'ส 2.1 ป.6/2-4', type: 'ปลายทาง', desc: 'วัฒนธรรม มารยาทไทย และภูมิปัญญาท้องถิ่น', max: 5 }
        ],
        topics: ['กฎหมายพื้นฐานในชีวิตประจำวัน', 'การเมืองการปกครองของไทยและ อปท.', 'วัฒนธรรมและมารยาทไทย']
      },
      {
        unitNo: 'midterm',
        name: 'สอบกลางปี (ประเมินผลกลางภาคเรียนที่ 1)',
        semester: 'ภาคเรียนที่ 1',
        semesterKey: '1',
        hours: 2,
        score: 15,
        indicators: [{ code: 'สอบกลางปี', type: 'สอบวัดผล', desc: 'ประเมินผลกลางปี', max: 15 }],
        topics: ['ประเมินผลกลางภาคเรียนที่ 1']
      },
      {
        unitNo: 3,
        name: 'เศรษฐศาสตร์',
        semester: 'ภาคเรียนที่ 2',
        semesterKey: '2',
        hours: 20,
        score: 15,
        indicators: [
          { code: 'ส 3.1 ป.6/1-3', type: 'ปลายทาง', desc: 'ผู้ผลิตและผู้บริโภคที่รู้เท่าทัน การใช้ทรัพยากรยั่งยืน', max: 8 },
          { code: 'ส 3.2 ป.6/1-2', type: 'ปลายทาง', desc: 'ความสัมพันธ์ทางเศรษฐกิจและการรวมกลุ่มท้องถิ่น', max: 7 }
        ],
        topics: ['ผู้ผลิตและผู้บริโภค', 'การใช้ทรัพยากรอย่างยั่งยืน', 'ความสัมพันธ์ระหว่างผู้ผลิต ผู้บริโภค ธนาคาร และรัฐบาล', 'การรวมกลุ่มทางเศรษฐกิจในท้องถิ่น']
      },
      {
        unitNo: 4,
        name: 'ภูมิศาสตร์',
        semester: 'ภาคเรียนที่ 2',
        semesterKey: '2',
        hours: 20,
        score: 20,
        indicators: [
          { code: 'ส 5.1 ป.6/1,2', type: 'ระหว่างทาง', desc: 'เครื่องมือทางภูมิศาสตร์และภัยพิบัติในไทย', max: 10 },
          { code: 'ส 5.2 ป.6/1-3', type: 'ปลายทาง', desc: 'ธรรมชาติกับสังคมไทย และการจัดการสิ่งแวดล้อม', max: 10 }
        ],
        topics: ['เครื่องมือทางภูมิศาสตร์ แผนที่ ภาพถ่ายดาวเทียม', 'ปฏิสัมพันธ์สิ่งแวดล้อมกับกิจกรรมเศรษฐกิจ', 'ภัยพิบัติในประเทศไทย', 'การจัดการทรัพยากรและสิ่งแวดล้อมอย่างยั่งยืน']
      },
      {
        unitNo: 'final',
        name: 'สอบปลายปี (ประเมินผลปลายภาคเรียนที่ 2)',
        semester: 'ภาคเรียนที่ 2',
        semesterKey: '2',
        hours: 2,
        score: 15,
        indicators: [{ code: 'สอบปลายปี', type: 'สอบวัดผล', desc: 'ประเมินผลปลายปี', max: 15 }],
        topics: ['ประเมินผลปลายภาคเรียนที่ 2']
      }
    ]
  },

  // ----------------------------------------
  // วิชาสังคมศึกษา ป.5 (ส 15101)
  // ----------------------------------------
  'social_p5': {
    code: 'ส 15101',
    name: 'สังคมศึกษา ศาสนาและวัฒนธรรม',
    title: 'โครงสร้างรายวิชาสังคมศึกษา ศาสนาและวัฒนธรรม',
    grade: 'ป.5',
    hoursPerYear: 80,
    hoursPerWeek: 2,
    scoresSummary: { accumulated: 70, midterm: 15, final: 15, total: 100 },
    units: [
      {
        unitNo: 1,
        name: 'ศาสนา ศีลธรรม จริยธรรม',
        semester: 'ภาคเรียนที่ 1',
        semesterKey: '1',
        hours: 25,
        score: 20,
        indicators: [
          { code: 'ส 1.1 ป.5/1-2', type: 'ระหว่างทาง', desc: 'วิเคราะห์ความสำคัญของพระพุทธศาสนาและพุทธประวัติ', max: 5 },
          { code: 'ส 1.1 ป.5/3,5', type: 'ปลายทาง', desc: 'พุทธสาวก ชาดก ศาสนิกชนตัวอย่าง และการปฏิบัติตน', max: 5 },
          { code: 'ส 1.1 ป.5/4,7', type: 'ปลายทาง', desc: 'การปฏิบัติตามหลักธรรมโอวาท 3 และการสวดมนต์แผ่เมตตา', max: 5 },
          { code: 'ส 1.2 ป.5/1-3', type: 'ปลายทาง', desc: 'หน้าที่ชาวพุทธและศาสนพิธีในวันสำคัญทางศาสนา', max: 5 }
        ],
        topics: ['ความสำคัญของพระพุทธศาสนาและพุทธประวัติ', 'หลักธรรมโอวาท 3 และพุทธศาสนสุภาษิต', 'หน้าที่และมารยาทชาวพุทธ', 'ศาสนาสำคัญในประเทศไทย']
      },
      {
        unitNo: 2,
        name: 'หน้าที่พลเมือง วัฒนธรรม และการดำเนินชีวิตในสังคม',
        semester: 'ภาคเรียนที่ 1',
        semesterKey: '1',
        hours: 15,
        score: 15,
        indicators: [
          { code: 'ส 2.1 ป.5/1,4', type: 'ระหว่างทาง', desc: 'การปฏิบัติตนตามสถานภาพ บทบาท สิทธิ เสรีภาพและหน้าที่พลเมือง', max: 5 },
          { code: 'ส 2.2 ป.5/1-2', type: 'ปลายทาง', desc: 'โครงสร้าง อำนาจหน้าที่ และความสำคัญของการปกครองส่วนท้องถิ่น', max: 5 },
          { code: 'ส 2.1 ป.5/2-3', type: 'ปลายทาง', desc: 'วัฒนธรรมไทยและการอนุรักษ์ภูมิปัญญาท้องถิ่น', max: 5 }
        ],
        topics: ['พลเมืองดีตามวิถีประชาธิปไตย', 'การปกครองส่วนท้องถิ่นของไทย', 'วัฒนธรรมและภูมิปัญญาไทย']
      },
      {
        unitNo: 'midterm',
        name: 'สอบกลางปี (ประเมินผลกลางภาคเรียนที่ 1)',
        semester: 'ภาคเรียนที่ 1',
        semesterKey: '1',
        hours: 2,
        score: 15,
        indicators: [{ code: 'สอบกลางปี', type: 'สอบวัดผล', desc: 'ประเมินผลกลางปี สาระสังคมศึกษา หน่วยที่ 1 และ 2', max: 15 }],
        topics: ['ประเมินผลกลางภาคเรียนที่ 1']
      },
      {
        unitNo: 3,
        name: 'เศรษฐศาสตร์น่ารู้',
        semester: 'ภาคเรียนที่ 2',
        semesterKey: '2',
        hours: 20,
        score: 15,
        indicators: [
          { code: 'ส 3.1 ป.5/1-3', type: 'ปลายทาง', desc: 'ปัจจัยการผลิตสินค้าและบริการ และหลักปรัชญาของเศรษฐกิจพอเพียง', max: 8 },
          { code: 'ส 3.2 ป.5/1-2', type: 'ปลายทาง', desc: 'หน้าที่และบทบาทของธนาคาร และการใช้จ่ายอย่างคุ้มค่า', max: 7 }
        ],
        topics: ['การผลิตสินค้าและบริการ', 'เศรษฐกิจพอเพียงในชีวิตประจำวัน', 'บทบาทของธนาคารและสหกรณ์']
      },
      {
        unitNo: 4,
        name: 'ภูมิศาสตร์รอบตัว',
        semester: 'ภาคเรียนที่ 2',
        semesterKey: '2',
        hours: 20,
        score: 20,
        indicators: [
          { code: 'ส 5.1 ป.5/1-2', type: 'ระหว่างทาง', desc: 'ลักษณะทางกายภาพในภูมิภาคของตนด้วยแผนที่และรูปถ่าย', max: 10 },
          { code: 'ส 5.2 ป.5/1-3', type: 'ปลายทาง', desc: 'สิ่งแวดล้อมทางกายภาพกับวิถีชีวิต และการอนุรักษ์ทรัพยากร', max: 10 }
        ],
        topics: ['ลักษณะทางกายภาพของภูมิภาคต่างๆ ในไทย', 'อิทธิพลของสิ่งแวดล้อมต่อการดำเนินชีวิต', 'การอนุรักษ์ทรัพยากรธรรมชาติและสิ่งแวดล้อม']
      },
      {
        unitNo: 'final',
        name: 'สอบปลายปี (ประเมินผลปลายภาคเรียนที่ 2)',
        semester: 'ภาคเรียนที่ 2',
        semesterKey: '2',
        hours: 2,
        score: 15,
        indicators: [{ code: 'สอบปลายปี', type: 'สอบวัดผล', desc: 'ประเมินผลปลายปี สาระสังคมศึกษา หน่วยที่ 3 และ 4', max: 15 }],
        topics: ['ประเมินผลปลายภาคเรียนที่ 2']
      }
    ]
  }
};
// Default Settings
const DEFAULT_SETTINGS = {
  schoolName: 'โรงเรียนบ้านควนเนียง',
  schoolLogo: '',
  directorName: 'นางสาวอังศุมาวรรณ ฉวาง',
  academicHeadName: 'ว่าที่ร้อยตรีหญิงรัชฎาภรณ์ จักกระหวัด',
  teacherName: 'ครูกุลธรา บุญมาก',
  currentSemesterSetting: '1',
  academicYear: '2569',
  term1Start: '2026-05-18',
  term1End: '2026-10-12',
  term2Start: '2026-11-02',
  term2End: '2027-03-31',
  holidays: [
    { id: 1, date: '2026-06-01', name: 'วันหยุดชดเชยวันวิสาขบูชา' },
    { id: 2, date: '2026-06-03', name: 'วันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าฯ พระบรมราชินี' },
    { id: 3, date: '2026-07-28', name: 'วันเฉลิมพระชนมพรรษา พระบาทสมเด็จพระเจ้าอยู่หัว' },
    { id: 4, date: '2026-07-29', name: 'วันอาสาฬหบูชา' },
    { id: 5, date: '2026-07-30', name: 'วันเข้าพรรษา' },
    { id: 6, date: '2026-07-31', name: 'วันหยุดกรณีพิเศษ' },
    { id: 7, date: '2026-08-12', name: 'วันแม่แห่งชาติ' }
  ],
  noTeachingDays: [],
  makeupDays: [
    { id: 1, date: '2026-07-04', useDaySchedule: 'วันศุกร์' }
  ],
  teachingSchedule: {
    'history': {
      'ป.6': ['วันพฤหัสบดี'],
      'ป.5': ['วันพฤหัสบดี'],
      'ป.4': ['วันพุธ'],
      'ป.3': ['วันอังคาร']
    },
    'social': {
      'ป.6': ['วันอังคาร', 'วันพฤหัสบดี'],
      'ป.5': ['วันจันทร์', 'วันพุธ'],
      'ป.4': ['วันอังคาร', 'วันพฤหัสบดี'],
      'ป.3': ['วันพุธ', 'วันศุกร์']
    }
  }
};
// Default Classrooms (สอดคล้องกับภาพที่ 1)
const DEFAULT_CLASSROOMS = [
  { id: 'cls-p6', name: 'ป.6', grade: 'ป.6', room: '1' },
  { id: 'cls-p5', name: 'ป.5', grade: 'ป.5', room: '1' },
  { id: 'cls-p4', name: 'ป.4', grade: 'ป.4', room: '1' },
  { id: 'cls-p3', name: 'ป.3', grade: 'ป.3', room: '1' }
];

// Default Students (สอดคล้องกับข้อมูลจริงของคุณครู ครบทั้ง 4 ห้อง)
const DEFAULT_STUDENTS = [
  // ป.6 (รวม 7 คน: ชาย 5, หญิง 2 - ข้อมูลจริงของคุณครู)
  { id: 'P61-01', student_no: 1, name: 'ด.ช. ปัณณวัฒน์ ชูเมือง', grade: 'ป.6', room: '1', gender: 'ชาย', status: 'กำลังศึกษา' },
  { id: 'P61-02', student_no: 2, name: 'ด.ช. สันติสุข เสนสรสัง', grade: 'ป.6', room: '1', gender: 'ชาย', status: 'กำลังศึกษา' },
  { id: 'P61-03', student_no: 3, name: 'ด.ช. แมน พม่า', grade: 'ป.6', room: '1', gender: 'ชาย', status: 'ย้ายออก' },
  { id: 'P61-04', student_no: 4, name: 'ด.ช. กิตตินัน นาคแก้ว', grade: 'ป.6', room: '1', gender: 'ชาย', status: 'กำลังศึกษา' },
  { id: 'P61-05', student_no: 5, name: 'ด.ช. กฤษณพล พัฒนศิลป์', grade: 'ป.6', room: '1', gender: 'ชาย', status: 'กำลังศึกษา' },
  { id: 'P61-06', student_no: 6, name: 'ด.ญ. นันทกานต์ สันทวงศ์', grade: 'ป.6', room: '1', gender: 'หญิง', status: 'กำลังศึกษา' },
  { id: 'P61-07', student_no: 7, name: 'ด.ญ. น้อง พม่า', grade: 'ป.6', room: '1', gender: 'หญิง', status: 'กำลังศึกษา' },

  // ป.5 (รวม 9 คน: ชาย 4, หญิง 5 - บันทึกเวลาเรียนจริง ป.5 เทอม 1)
  { id: 'P51-01', student_no: 1, name: 'ด.ช. กัณฑ์ณภัทร พิบูลย์', grade: 'ป.5', room: '1', gender: 'ชาย' },
  { id: 'P51-02', student_no: 2, name: 'ด.ช. คริษฐ์ ศรีจราพร', grade: 'ป.5', room: '1', gender: 'ชาย' },
  { id: 'P51-03', student_no: 3, name: 'ด.ช. โท ศรีจราพร', grade: 'ป.5', room: '1', gender: 'ชาย' },
  { id: 'P51-04', student_no: 4, name: 'ด.ช. ชาย ศรีจราพร', grade: 'ป.5', room: '1', gender: 'ชาย' },
  { id: 'P51-05', student_no: 5, name: 'ด.ญ. กัญญารัตน์ ชูทับ', grade: 'ป.5', room: '1', gender: 'หญิง' },
  { id: 'P51-06', student_no: 6, name: 'ด.ญ. ธนภรณ์ วงค์สวัสดิ์', grade: 'ป.5', room: '1', gender: 'หญิง' },
  { id: 'P51-07', student_no: 7, name: 'ด.ญ. ปภัสรา นุ่มนวล', grade: 'ป.5', room: '1', gender: 'หญิง' },
  { id: 'P51-08', student_no: 8, name: 'ด.ญ. ดอกไม้ ศรีจราพร', grade: 'ป.5', room: '1', gender: 'หญิง' },
  { id: 'P51-09', student_no: 9, name: 'ด.ญ. อลิสา ศรีจราพร', grade: 'ป.5', room: '1', gender: 'หญิง' },

  // ป.4 (รวม 15 คน: ชาย 9, หญิง 6)
  { id: 'P41-01', student_no: 1, name: 'ด.ช. กิตติภพ บุญนาค', grade: 'ป.4', room: '1', gender: 'ชาย' },
  { id: 'P41-02', student_no: 2, name: 'ด.ช. จิรภัทร วัฒนา', grade: 'ป.4', room: '1', gender: 'ชาย' },
  { id: 'P41-03', student_no: 3, name: 'ด.ช. ชนะชัย ทองอยู่', grade: 'ป.4', room: '1', gender: 'ชาย' },
  { id: 'P41-04', student_no: 4, name: 'ด.ช. ณัฐพล มณีเนตร', grade: 'ป.4', room: '1', gender: 'ชาย' },
  { id: 'P41-05', student_no: 5, name: 'ด.ช. ธนกฤต วิทยานนท์', grade: 'ป.4', room: '1', gender: 'ชาย' },
  { id: 'P41-06', student_no: 6, name: 'ด.ช. ธีรนัย รัตนโชติ', grade: 'ป.4', room: '1', gender: 'ชาย' },
  { id: 'P41-07', student_no: 7, name: 'ด.ช. พงศกร สายทอง', grade: 'ป.4', room: '1', gender: 'ชาย' },
  { id: 'P41-08', student_no: 8, name: 'ด.ช. วรภัทร ชาญวิทย์', grade: 'ป.4', room: '1', gender: 'ชาย' },
  { id: 'P41-09', student_no: 9, name: 'ด.ช. อนันต์ยศ เจริญรักษ์', grade: 'ป.4', room: '1', gender: 'ชาย' },
  { id: 'P41-10', student_no: 10, name: 'ด.ญ. กนกวรรณ จันทร์สว่าง', grade: 'ป.4', room: '1', gender: 'หญิง' },
  { id: 'P41-11', student_no: 11, name: 'ด.ญ. ชนัญชิดา ชุ่มใจ', grade: 'ป.4', room: '1', gender: 'หญิง' },
  { id: 'P41-12', student_no: 12, name: 'ด.ญ. ณิชานันท์ บุญชู', grade: 'ป.4', room: '1', gender: 'หญิง' },
  { id: 'P41-13', student_no: 13, name: 'ด.ญ. ธันยพร ศรีสุข', grade: 'ป.4', room: '1', gender: 'หญิง' },
  { id: 'P41-14', student_no: 14, name: 'ด.ญ. นภัสวรรณ รุ่งเรือง', grade: 'ป.4', room: '1', gender: 'หญิง' },
  { id: 'P41-15', student_no: 15, name: 'ด.ญ. พรสวรรค์ อุดมพร', grade: 'ป.4', room: '1', gender: 'หญิง' },

  // ป.3 (รวม 8 คน: ชาย 3, หญิง 5 - ตามภาพตัวอย่างที่ 2)
  { id: 'P31-01', student_no: 1, name: 'ด.ช. สายชล จันทร์เขียว', grade: 'ป.3', room: '1', gender: 'ชาย' },
  { id: 'P31-02', student_no: 2, name: 'ด.ช. ภู่ พม่า', grade: 'ป.3', room: '1', gender: 'ชาย' },
  { id: 'P31-03', student_no: 3, name: 'ด.ช. ติณณสิรภพ ชูศิริ', grade: 'ป.3', room: '1', gender: 'ชาย' },
  { id: 'P31-04', student_no: 4, name: 'ด.ญ. กณิศา เย็นพฤกษ์', grade: 'ป.3', room: '1', gender: 'หญิง' },
  { id: 'P31-05', student_no: 5, name: 'ด.ญ. พิมพ์มาดา จันทร์หอม', grade: 'ป.3', room: '1', gender: 'หญิง' },
  { id: 'P31-06', student_no: 6, name: 'ด.ญ. ณัฏฐณิชา นิ่มนวล', grade: 'ป.3', room: '1', gender: 'หญิง' },
  { id: 'P31-07', student_no: 7, name: 'ด.ญ. วรัญญา แก้วมณี', grade: 'ป.3', room: '1', gender: 'หญิง' },
  { id: 'P31-08', student_no: 8, name: 'ด.ญ. ภัทรวดี สุวรรณฉัตร', grade: 'ป.3', room: '1', gender: 'หญิง' }
];

const DEFAULT_LESSON_LOGS = [
  {
    id: 1,
    date: '2026-10-28',
    subject_code: 'ส 16102',
    grade_room: 'ป.6/1',
    topic: 'การศึกษาประวัติศาสตร์ไทยโดยวิธีการทางประวัติศาสตร์ (ส 4.1 ป.6/1)',
    problems: 'นักเรียนบางคนยังสับสนระหว่างหลักฐานชั้นต้นกับหลักฐานชั้นรอง',
    suggestions: 'เตรียมตัวอย่างภาพถ่ายโบราณวัตถุและสำเนาพงศาวดารมาเปรียบเทียบในคาบหน้า'
  },
  {
    id: 2,
    date: '2026-10-30',
    subject_code: 'ส 16102',
    grade_room: 'ป.6/1',
    topic: 'ตำแหน่งที่ตั้งและสภาพเศรษฐกิจ สังคม การเมืองการปกครองของประเทศเพื่อนบ้าน (ส 4.2 ป.6/1)',
    problems: 'เวลาในคาบเรียนไม่พอสำหรับกิจกรรมวิเคราะห์บทบาททางยุทธศาสตร์ของประเทศเมียนมาและลาว',
    suggestions: 'มอบหมายให้สรุปแผนภาพความคิดเปรียบเทียบ 1 หน้า'
  },
  {
    id: 3,
    date: '2026-10-27',
    subject_code: 'ส 15102',
    grade_room: 'ป.5/1',
    topic: 'การสืบค้นความเป็นมาของท้องถิ่นโดยใช้หลักฐานที่หลากหลาย (ส 4.1 ป.5/1)',
    problems: 'นักเรียนให้ความสนใจและร่วมสืบค้นเรื่องราวในชุมชนตนเองได้เป็นอย่างดี',
    suggestions: 'มอบหมายให้นำภาพถ่ายเก่าในชุมชนมานำเสนอหน้าชั้นเรียน'
  },
  {
    id: 4,
    date: '2026-10-29',
    subject_code: 'ส 15102',
    grade_room: 'ป.5/1',
    topic: 'อิทธิพลของอารยธรรมอินเดียและจีนที่มีต่อไทย (ส 4.2 ป.5/1)',
    problems: 'นักเรียนบางส่วนจำชื่อโบราณวัตถุและคำยืมภาษาบาลี-สันสกฤตได้ช้า',
    suggestions: 'ใช้แฟลชการ์ดภาพคำศัพท์และอาหารเพื่อช่วยจำ'
  }
];

const DEFAULT_SCORES = {
  'P61-01': { 'ส 4.1 ป.6/1': 6.5, 'ส 4.1 ป.6/2': 7.5, 'ส 4.2 ป.6/1': 9.5, 'ส 4.2 ป.6/2': 9, 'สอบกลางปี': 14 },
  'P61-02': { 'ส 4.1 ป.6/1': 5.5, 'ส 4.1 ป.6/2': 6.5, 'ส 4.2 ป.6/1': 8, 'ส 4.2 ป.6/2': 8, 'สอบกลางปี': 12 },
  'P61-04': { 'ส 4.1 ป.6/1': 7, 'ส 4.1 ป.6/2': 8, 'ส 4.2 ป.6/1': 10, 'ส 4.2 ป.6/2': 10, 'สอบกลางปี': 15 },
  'P61-05': { 'ส 4.1 ป.6/1': 6, 'ส 4.1 ป.6/2': 7, 'ส 4.2 ป.6/1': 9, 'ส 4.2 ป.6/2': 8.5, 'สอบกลางปี': 13 },
  'P61-06': { 'ส 4.1 ป.6/1': 5, 'ส 4.1 ป.6/2': 6, 'ส 4.2 ป.6/1': 7.5, 'ส 4.2 ป.6/2': 7, 'สอบกลางปี': 11 },
  'P61-07': { 'ส 4.1 ป.6/1': 6.5, 'ส 4.1 ป.6/2': 7, 'ส 4.2 ป.6/1': 8.5, 'ส 4.2 ป.6/2': 9, 'สอบกลางปี': 13 },
  // ป.5 (ส 15102 - ตัวชี้วัดจริงเทอม 1)
  'P51-01': { 'ส 4.1 ป.5/1': 5.5, 'ส 4.1 ป.5/2': 5.5, 'ส 4.1 ป.5/3': 7, 'ส 4.2 ป.5/1': 7, 'ส 4.2 ป.5/2': 6, 'สอบกลางปี': 13 },
  'P51-02': { 'ส 4.1 ป.5/1': 5, 'ส 4.1 ป.5/2': 5, 'ส 4.1 ป.5/3': 6, 'ส 4.2 ป.5/1': 6.5, 'ส 4.2 ป.5/2': 5.5, 'สอบกลางปี': 11 },
  'P51-03': { 'ส 4.1 ป.5/1': 6, 'ส 4.1 ป.5/2': 6, 'ส 4.1 ป.5/3': 7.5, 'ส 4.2 ป.5/1': 7.5, 'ส 4.2 ป.5/2': 6.5, 'สอบกลางปี': 14 },
  'P51-04': { 'ส 4.1 ป.5/1': 4.5, 'ส 4.1 ป.5/2': 4, 'ส 4.1 ป.5/3': 5, 'ส 4.2 ป.5/1': 5.5, 'ส 4.2 ป.5/2': 5, 'สอบกลางปี': 10 },
  'P51-05': { 'ส 4.1 ป.5/1': 6, 'ส 4.1 ป.5/2': 6, 'ส 4.1 ป.5/3': 8, 'ส 4.2 ป.5/1': 8, 'ส 4.2 ป.5/2': 7, 'สอบกลางปี': 15 },
  'P51-06': { 'ส 4.1 ป.5/1': 5.5, 'ส 4.1 ป.5/2': 5, 'ส 4.1 ป.5/3': 7, 'ส 4.2 ป.5/1': 7, 'ส 4.2 ป.5/2': 6, 'สอบกลางปี': 12.5 },
  'P51-07': { 'ส 4.1 ป.5/1': 5, 'ส 4.1 ป.5/2': 5.5, 'ส 4.1 ป.5/3': 6.5, 'ส 4.2 ป.5/1': 6.5, 'ส 4.2 ป.5/2': 5.5, 'สอบกลางปี': 12 },
  'P51-08': { 'ส 4.1 ป.5/1': 6, 'ส 4.1 ป.5/2': 5.5, 'ส 4.1 ป.5/3': 7.5, 'ส 4.2 ป.5/1': 7.5, 'ส 4.2 ป.5/2': 6.5, 'สอบกลางปี': 14 },
  'P51-09': { 'ส 4.1 ป.5/1': 6, 'ส 4.1 ป.5/2': 6, 'ส 4.1 ป.5/3': 8, 'ส 4.2 ป.5/1': 8, 'ส 4.2 ป.5/2': 7, 'สอบกลางปี': 14.5 }
};

// งานย่อยรายตัวชี้วัด (Sub-Assignments per Indicator)
const DEFAULT_SUB_ASSIGNMENTS = {
  'history_ป.6_ส 4.1 ป.6/1': [
    { id: 'sub-411-1', name: 'ใบงานที่ 1.1 วิธีการทางประวัติศาสตร์', max: 10 },
    { id: 'sub-411-2', name: 'ผังความคิดการจำแนกหลักฐานทางประวัติศาสตร์', max: 10 }
  ],
  'history_ป.6_ส 4.2 ป.6/1': [
    { id: 'sub-421-1', name: 'ใบงานแผนที่และสภาพสังคมประเทศเพื่อนบ้าน', max: 10 },
    { id: 'sub-421-2', name: 'แบบฝึกหัดความร่วมมือกลุ่มอาเซียน', max: 10 }
  ]
};

// คะแนนงานย่อยเริ่มต้น (Default Sub Scores)
const DEFAULT_SUB_SCORES = {
  'P61-02': {
    'ส 4.1 ป.6/1': { 'sub-411-1': 8, 'sub-411-2': 8 },
    'ส 4.2 ป.6/1': { 'sub-421-1': 8, 'sub-421-2': 8 }
  },
  'P61-04': {
    'ส 4.1 ป.6/1': { 'sub-411-1': 10, 'sub-411-2': 10 },
    'ส 4.2 ป.6/1': { 'sub-421-1': 10, 'sub-421-2': 10 }
  },
  'P61-05': {
    'ส 4.1 ป.6/1': { 'sub-411-1': 9, 'sub-411-2': 8 },
    'ส 4.2 ป.6/1': { 'sub-421-1': 9, 'sub-421-2': 9 }
  },
  'P61-06': {
    'ส 4.1 ป.6/1': { 'sub-411-1': 7, 'sub-411-2': 7 },
    'ส 4.2 ป.6/1': { 'sub-421-1': 7.5, 'sub-421-2': 7.5 }
  },
  'P61-01': {
    'ส 4.1 ป.6/1': { 'sub-411-1': '', 'sub-411-2': '' },
    'ส 4.2 ป.6/1': { 'sub-421-1': '', 'sub-421-2': '' }
  },
  'P61-07': {
    'ส 4.1 ป.6/1': { 'sub-411-1': '', 'sub-411-2': '' },
    'ส 4.2 ป.6/1': { 'sub-421-1': '', 'sub-421-2': '' }
  }
};

function buildDefaultAttendance() {
  const holidays = ['2026-06-01', '2026-06-03', '2026-07-28', '2026-07-29', '2026-07-30', '2026-07-31', '2026-08-12'];
  const term1Days = [];
  let d = new Date('2026-05-18');
  const end = new Date('2026-10-12');
  while (d <= end) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${day}`;
    const dayOfWeek = d.getDay();
    // Monday to Thursday (Friday is no-teaching for P.5)
    if (dayOfWeek !== 0 && dayOfWeek !== 6 && dayOfWeek !== 5) {
      if (!holidays.includes(dateStr)) {
        term1Days.push(dateStr);
      }
    }
    d.setDate(d.getDate() + 1);
  }

  // Exact targets matching User's Semester 1 Report (ป.5/1)
  const targets = {
    'P51-01': { absent: 11, leave: 0, sick: 0 },
    'P51-02': { absent: 3, leave: 0, sick: 0 },
    'P51-03': { absent: 5, leave: 0, sick: 0 },
    'P51-04': { absent: 6, leave: 2, sick: 0 },
    'P51-05': { absent: 0, leave: 1, sick: 0 },
    'P51-06': { absent: 1, leave: 1, sick: 0 },
    'P51-07': { absent: 14, leave: 0, sick: 0 },
    'P51-08': { absent: 1, leave: 1, sick: 0 },
    'P51-09': { absent: 8, leave: 5, sick: 0 }
  };
  const att = {};
  term1Days.forEach(date => {
    att[date] = {
      'P51-01': 'มา', 'P51-02': 'มา', 'P51-03': 'มา',
      'P51-04': 'มา', 'P51-05': 'มา', 'P51-06': 'มา',
      'P51-07': 'มา', 'P51-08': 'มา', 'P51-09': 'มา',
      'P61-01': 'มา', 'P61-02': 'มา',
      'P61-04': 'มา', 'P61-05': 'มา', 'P61-06': date.endsWith('26') ? 'ลา' : 'มา',
      'P61-07': 'มา'
    };
  });

  // Known September 2026 records matching User's Monthly Matrix Screenshot exactly
  att['2026-09-01']['P51-09'] = 'ลา';
  att['2026-09-02']['P51-09'] = 'ลา';
  att['2026-09-08']['P51-01'] = 'ขาด';
  att['2026-09-08']['P51-07'] = 'ขาด';
  att['2026-09-09']['P51-02'] = 'ขาด';
  att['2026-09-09']['P51-09'] = 'ขาด';
  att['2026-09-10']['P51-07'] = 'ขาด';
  att['2026-09-15']['P51-07'] = 'ขาด';
  att['2026-09-16']['P51-01'] = 'ขาด';
  att['2026-09-16']['P51-09'] = 'ขาด';
  att['2026-09-22']['P51-08'] = 'ขาด';

  const nonSepDays = term1Days.filter(date => !date.startsWith('2026-09'));
  Object.keys(targets).forEach(sid => {
    let currAbsent = 0, currLeave = 0, currSick = 0;
    term1Days.forEach(d => {
      const s = att[d][sid];
      if (s === 'ขาด') currAbsent++;
      if (s === 'ลา') currLeave++;
      if (s === 'ป่วย') currSick++;
    });

    const neededAbsent = targets[sid].absent - currAbsent;
    const neededLeave = targets[sid].leave - currLeave;
    const neededSick = targets[sid].sick - currSick;

    let assignedAbsent = 0, assignedLeave = 0, assignedSick = 0;
    for (let i = 0; i < nonSepDays.length; i++) {
      const day = nonSepDays[(i * 7 + 3) % nonSepDays.length];
      if (att[day][sid] === 'มา') {
        if (assignedAbsent < neededAbsent) {
          att[day][sid] = 'ขาด';
          assignedAbsent++;
        } else if (assignedLeave < neededLeave) {
          att[day][sid] = 'ลา';
          assignedLeave++;
        } else if (assignedSick < neededSick) {
          att[day][sid] = 'ป่วย';
          assignedSick++;
        }
      }
    }
  });

  return att;
}

const DEFAULT_ATTENDANCE = buildDefaultAttendance();

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================

const state = {
  currentView: 'dashboard',
  currentSubjectKey: 'history',
  currentGrade: 'ป.6',
  currentRoom: '1',
  currentSemester: '1', // Auto-calculated or manually overridden
  selectedDate: new Date().toISOString().split('T')[0],

  // Attendance Sub-Tabs and Filters
  attendanceSubTab: 'daily', // 'daily', 'monthly', 'semester'
  selectedMonthlyMonth: '2026-09',
  selectedMonthlyGrade: 'ป.5',
  selectedSemesterGrade: 'ป.5',
  selectedSemesterTerm: 'all',
  gradebookSemester: 'all',

  // Classrooms and Students Management
  classrooms: [],
  selectedStudentFilterClass: 'all',
  studentSearchQuery: '',
  importTab: 'file', // 'file' or 'paste'

  students: [],
  attendance: {},
  scores: {},
  customIndicatorMax: {}, // Custom indicator max scores: `${subj}_${grade}_${indId}` -> number
  customUnitWeight: {},   // Custom unit weight scores: `${subj}_${grade}_${unitKey}` -> number
  holisticTab: 'traits',  // Active holistic tab: 'traits', 'reading', 'competencies'
  holisticSemester: 'all', // Active holistic semester: 'all', '1', '2'
  holisticAssessments: {}, // Key: `${subj}_${grade}_${term}_${tabKey}` -> { [studentId]: { [itemId]: number } }
  lessonLogs: [],
  pp5SemesterScope: 'all', // Active PP5 scope: 'all', '1', '2'
  pp5SummaryFilter: 'all', // Active PP5 data filter: 'all', 'scores', 'assessments'
  subAssignments: {},      // Key: `${subj}_${grade}_${indId}` -> array of { id, name, max }
  subScores: {},            // Key: studentId -> { [indId]: { [subId]: number|string } }
  activeSubModalIndId: null,
  pendingWorkTab: 'student', // 'student' or 'task'
  settings: { ...DEFAULT_SETTINGS },

  supabaseUrl: localStorage.getItem('hist_sb_url') || 'https://llvznegckyvervpzsgvm.supabase.co',
  supabaseKey: localStorage.getItem('hist_sb_key') || 'sb_publishable_ueHJkp9LWVwjeKpae2_v3A_JsmhFZJw',
  supabaseClient: null,
  isCloudSynced: false,

  // Multi-Year & Promotion Wizard
  academicYears: ['2569'],
  yearArchives: {},
  currentAcademicYear: '2569',
  isViewingArchive: false,
  _activeWorkingSnapshot: null,
  _wizardStudentDecisions: {},
  _wizardGradeFilter: 'ALL',

  indicatorChart: null
};
window.state = state;

// ==========================================
// 3. SMART AUTO-SEMESTER LOGIC (ปรับอัตโนมัติตามวันนี้)
// ==========================================

/**
 * วิเคราะห์และคำนวณหาภาคเรียนปัจจุบันอัตโนมัติตามวันที่ (Today's Date)
 * โดยเปรียบเทียบกับช่วงวันเปิด-ปิดภาคเรียนที่ 1 และ 2
 */
function getAutoSemesterAnalysis(targetDateStr = null) {
  const dateStr = targetDateStr || new Date().toISOString().split('T')[0];
  const s = (state.settings && state.settings.term1Start) ? state.settings : DEFAULT_SETTINGS;

  if (!s.term1Start || !s.term1End || !s.term2Start || !s.term2End) {
    return {
      semester: '1',
      dateStr,
      headline: 'ภาคเรียนที่ 1 (ค่าเริ่มต้น)',
      detail: 'ยังไม่ได้ระบุวันเปิด-ปิดภาคเรียนครบถ้วน'
    };
  }

  // 1. อยู่ในช่วงวันเปิด-ปิดภาคเรียนที่ 1
  if (dateStr >= s.term1Start && dateStr <= s.term1End) {
    return {
      semester: '1',
      dateStr,
      headline: 'อยู่ในช่วง "ภาคเรียนที่ 1"',
      detail: `วันที่ตรวจพบ (${formatThaiDate(dateStr)}) อยู่ในช่วงเปิดเทอม 1 (${formatThaiDate(s.term1Start)} ถึง ${formatThaiDate(s.term1End)})`
    };
  }

  // 2. อยู่ในช่วงวันเปิด-ปิดภาคเรียนที่ 2
  if (dateStr >= s.term2Start && dateStr <= s.term2End) {
    return {
      semester: '2',
      dateStr,
      headline: 'อยู่ในช่วง "ภาคเรียนที่ 2"',
      detail: `วันที่ตรวจพบ (${formatThaiDate(dateStr)}) อยู่ในช่วงเปิดเทอม 2 (${formatThaiDate(s.term2Start)} ถึง ${formatThaiDate(s.term2End)})`
    };
  }

  // 3. ช่วงรอยต่อระหว่างเทอม 1 กับเทอม 2 (เช่น ปิดเทอมตุลาคม)
  if (dateStr > s.term1End && dateStr < s.term2Start) {
    return {
      semester: '2',
      dateStr,
      headline: 'ช่วงรอยต่อปิดภาคเรียนที่ 1 (เตรียมเข้าภาคเรียนที่ 2)',
      detail: `วันที่ตรวจพบ (${formatThaiDate(dateStr)}) เป็นช่วงปิดเทอมคั่นกลาง ระบบสลับเข้าสู่ "ภาคเรียนที่ 2" อัตโนมัติ เพื่อให้ครูเตรียมการสอนและสมุดคะแนนล่วงหน้า`
    };
  }

  // 4. ก่อนเปิดเทอม 1
  if (dateStr < s.term1Start) {
    return {
      semester: '1',
      dateStr,
      headline: 'ช่วงเตรียมเปิดภาคเรียนที่ 1',
      detail: `วันที่ตรวจพบ (${formatThaiDate(dateStr)}) ยังไม่ถึงวันเปิดเทอม 1 (${formatThaiDate(s.term1Start)}) ระบบกำหนดเป็น "ภาคเรียนที่ 1"`
    };
  }

  // 5. หลังปิดเทอม 2
  return {
    semester: '2',
    dateStr,
    headline: 'สิ้นสุดปีการศึกษา',
    detail: `วันที่ตรวจพบ (${formatThaiDate(dateStr)}) พ้นวันสิ้นสุดเทอม 2 (${formatThaiDate(s.term2End)}) คงค่าไว้ที่ "ภาคเรียนที่ 2" สำหรับสรุปและส่งออกผลการเรียน`
  };
}

function getAutoSemesterByDate(targetDateStr = null) {
  return getAutoSemesterAnalysis(targetDateStr).semester;
}

function updateAutoSemesterUI(analysis = null) {
  const currentAnalysis = analysis || getAutoSemesterAnalysis();
  
  const badgeText = document.getElementById('auto-semester-text');
  if (badgeText) {
    badgeText.innerHTML = `ตรวจพบอัตโนมัติ: ภาคเรียนที่ ${currentAnalysis.semester} (${formatThaiDate(currentAnalysis.dateStr)})`;
  }

  const headlineEl = document.getElementById('auto-status-headline');
  if (headlineEl) {
    headlineEl.textContent = `${currentAnalysis.headline}:`;
  }

  const detailEl = document.getElementById('auto-status-detail');
  if (detailEl) {
    detailEl.textContent = currentAnalysis.detail;
  }

  const topSemText = document.getElementById('top-semester-text');
  if (topSemText) {
    topSemText.textContent = `ภาคเรียนที่ ${currentAnalysis.semester}`;
  }

  const setSemDisplay = document.getElementById('set-semester-display');
  if (setSemDisplay) {
    setSemDisplay.textContent = `ภาคเรียนที่ ${currentAnalysis.semester}`;
  }

  const semSelTop = document.getElementById('semester-selector');
  if (semSelTop) {
    semSelTop.value = currentAnalysis.semester;
  }

  const semSelSetting = document.getElementById('set-semester-select');
  if (semSelSetting) {
    semSelSetting.value = currentAnalysis.semester;
  }
}

function applyAutoSemester(silent = false) {
  const analysis = getAutoSemesterAnalysis();
  const detectedSemester = analysis.semester;

  state.currentSemester = detectedSemester;
  state.settings.currentSemesterSetting = detectedSemester;

  // Update Badge, Banner, and Display Labels in Top Bar & Settings
  updateAutoSemesterUI(analysis);

  if (!silent) {
    showNotification(`⚡ ระบบปรับภาคเรียนอัตโนมัติเป็น "ภาคเรียนที่ ${detectedSemester}" (${formatThaiDate(analysis.dateStr)})`);
  }

  // Re-render current view with the new active semester
  renderCurrentView();
}

// ==========================================
// 4. STORAGE & INITIALIZATION
// ==========================================

function initApp() {
  loadData();
  setupEventListeners();
  initSupabase();

  // Apply auto-detected semester immediately based on current date
  applyAutoSemester(true);

  renderApp();
}

function loadData() {
  const isInit = localStorage.getItem('hist_initialized_v3');
  if (!isInit) {
    state.classrooms = [...DEFAULT_CLASSROOMS];
    state.students = [...DEFAULT_STUDENTS];
    state.attendance = Object.assign({}, DEFAULT_ATTENDANCE);
    state.scores = Object.assign({}, DEFAULT_SCORES);
    state.lessonLogs = [...DEFAULT_LESSON_LOGS];
    state.settings = Object.assign({}, DEFAULT_SETTINGS);
    state.subAssignments = JSON.parse(JSON.stringify(DEFAULT_SUB_ASSIGNMENTS));
    state.subScores = JSON.parse(JSON.stringify(DEFAULT_SUB_SCORES));
    localStorage.setItem('hist_initialized_v3', 'true');
    saveLocalData();
    return;
  }

  const storedClassrooms = localStorage.getItem('hist_classrooms');
  state.classrooms = storedClassrooms ? JSON.parse(storedClassrooms) : [];

  const storedStudents = localStorage.getItem('hist_students');
  state.students = storedStudents ? JSON.parse(storedStudents) : [];

  const storedAttendance = localStorage.getItem('hist_attendance');
  state.attendance = storedAttendance ? JSON.parse(storedAttendance) : {};
  const storedScores = localStorage.getItem('hist_scores');
  state.scores = storedScores ? JSON.parse(storedScores) : DEFAULT_SCORES;

  const storedCustomMax = localStorage.getItem('hist_custom_max_scores');
  state.customIndicatorMax = storedCustomMax ? JSON.parse(storedCustomMax) : {};
  const storedCustomWeight = localStorage.getItem('hist_custom_unit_weights');
  state.customUnitWeight = storedCustomWeight ? JSON.parse(storedCustomWeight) : {};
  const storedHolistic = localStorage.getItem('hist_holistic_assessments');
  state.holisticAssessments = storedHolistic ? JSON.parse(storedHolistic) : {};
  const storedLogs = localStorage.getItem('hist_lesson_logs');
  state.lessonLogs = storedLogs ? JSON.parse(storedLogs) : DEFAULT_LESSON_LOGS;

  const storedSubAssignments = localStorage.getItem('hist_sub_assignments');
  state.subAssignments = storedSubAssignments ? JSON.parse(storedSubAssignments) : JSON.parse(JSON.stringify(DEFAULT_SUB_ASSIGNMENTS));
  if (!state.subAssignments || Object.keys(state.subAssignments).length === 0) {
    state.subAssignments = JSON.parse(JSON.stringify(DEFAULT_SUB_ASSIGNMENTS));
  }
  const storedSubScores = localStorage.getItem('hist_sub_scores');
  state.subScores = storedSubScores ? JSON.parse(storedSubScores) : JSON.parse(JSON.stringify(DEFAULT_SUB_SCORES));
  if (!state.subScores || Object.keys(state.subScores).length === 0) {
    state.subScores = JSON.parse(JSON.stringify(DEFAULT_SUB_SCORES));
  }

  const storedSettings = localStorage.getItem('hist_settings');
  state.settings = storedSettings ? { ...DEFAULT_SETTINGS, ...JSON.parse(storedSettings) } : { ...DEFAULT_SETTINGS };
  if (!state.settings.teachingSchedule) {
    state.settings.teachingSchedule = JSON.parse(JSON.stringify(DEFAULT_SETTINGS.teachingSchedule));
  }
  state.settings.noTeachingDays = [];

  const storedYears = localStorage.getItem('hist_academic_years');
  state.academicYears = storedYears ? JSON.parse(storedYears) : [state.settings.academicYear || '2569'];
  if (!state.academicYears.includes(state.settings.academicYear || '2569')) {
    state.academicYears.push(state.settings.academicYear || '2569');
  }

  const storedArchives = localStorage.getItem('hist_year_archives');
  state.yearArchives = storedArchives ? JSON.parse(storedArchives) : {};
  state.currentAcademicYear = state.settings.academicYear || '2569';
  state.isViewingArchive = false;

  if (!state.classrooms || state.classrooms.length === 0) {
    state.classrooms = [...DEFAULT_CLASSROOMS];
  }
  if (!state.students || state.students.length === 0) {
    state.students = [...DEFAULT_STUDENTS];
    saveLocalData();
  } else {
    // ตรวจสอบและอัปเดตรายชื่อนักเรียน ป.6 ให้เป็นข้อมูลจริง 7 คนตามที่คุณครูส่งมาเสมอ
    const p6Students = state.students.filter(s => s.grade === 'ป.6');
    const hasRealP6Roster = p6Students.length === 7 &&
                            p6Students.some(s => s.name && s.name.includes('แมน พม่า')) &&
                            p6Students.some(s => s.name && s.name.includes('สันติสุข')) &&
                            p6Students.some(s => s.name && s.name.includes('น้อง พม่า')) &&
                            p6Students.some(s => s.name && s.name.includes('กิตตินัน')) &&
                            !p6Students.some(s => s.name && s.name.includes('วรเมธ')) &&
                            !p6Students.some(s => s.name && s.name.includes('ธีรภัทร'));

    if (!hasRealP6Roster) {
      state.students = state.students.filter(s => s.grade !== 'ป.6').concat(DEFAULT_STUDENTS.filter(s => s.grade === 'ป.6'));
    }

    // ซิงค์ชื่อ เลขที่ และสถานะของนักเรียน ป.6 ให้ตรงกับทะเบียนจริง
    state.students.forEach(s => {
      if (s.grade === 'ป.6') {
        const def = DEFAULT_STUDENTS.find(d => d.id === s.id);
        if (def) {
          s.name = def.name;
          s.gender = def.gender;
          s.student_no = def.student_no;
          if (def.status === 'ย้ายออก') s.status = 'ย้ายออก';
        }
      }
      if (!s.status) s.status = 'กำลังศึกษา';
      if (s.name && s.name.includes('แมน พม่า')) s.status = 'ย้ายออก';
    });
    saveLocalData();
  }

  // ล้างข้อมูลบันทึกเวลาเรียนและคะแนนของนักเรียนที่ย้ายออกเพื่อความถูกต้องตามคำสั่ง
  (state.students || []).forEach(s => {
    if (s.status === 'ย้ายออก') {
      Object.keys(state.attendance || {}).forEach(d => {
        if (state.attendance[d] && state.attendance[d][s.id]) {
          delete state.attendance[d][s.id];
        }
      });
      if (state.scores && state.scores[s.id]) {
        delete state.scores[s.id];
      }
    }
  });

  // Restore active classroom from localStorage if saved
  const savedActiveRoom = localStorage.getItem('hist_active_classroom');
  if (savedActiveRoom) {
    const cls = state.classrooms.find(c => c.name === savedActiveRoom || c.id === savedActiveRoom);
    if (cls) {
      state.currentGrade = cls.grade || cls.name;
      state.currentRoom = cls.room || '1';
    } else {
      state.currentGrade = savedActiveRoom;
      state.currentRoom = '1';
    }
    state.selectedMonthlyGrade = state.currentGrade;
    state.selectedSemesterGrade = state.currentGrade;
    state.selectedStudentFilterClass = savedActiveRoom;
  }

  saveLocalData();
}

function saveLocalData(skipCloudSync = false) {
  localStorage.setItem('hist_classrooms', JSON.stringify(state.classrooms));
  localStorage.setItem('hist_students', JSON.stringify(state.students));
  localStorage.setItem('hist_attendance', JSON.stringify(state.attendance));
  localStorage.setItem('hist_scores', JSON.stringify(state.scores));
  localStorage.setItem('hist_sub_assignments', JSON.stringify(state.subAssignments || {}));
  localStorage.setItem('hist_sub_scores', JSON.stringify(state.subScores || {}));
  localStorage.setItem('hist_custom_max_scores', JSON.stringify(state.customIndicatorMax || {}));
  localStorage.setItem('hist_custom_unit_weights', JSON.stringify(state.customUnitWeight || {}));
  localStorage.setItem('hist_holistic_assessments', JSON.stringify(state.holisticAssessments || {}));
  localStorage.setItem('hist_lesson_logs', JSON.stringify(state.lessonLogs));
  localStorage.setItem('hist_settings', JSON.stringify(state.settings));
  localStorage.setItem('hist_academic_years', JSON.stringify(state.academicYears || ['2569']));
  localStorage.setItem('hist_year_archives', JSON.stringify(state.yearArchives || {}));

  if (!skipCloudSync && typeof syncToSupabase === 'function') {
    syncToSupabase();
  }
}

let _supabaseSyncTimer = null;

const DB_STORE_TABLE = 'eduhistory_store';

function syncToSupabase(forceNow = false) {
  if (!state.supabaseClient) return;
  if (_supabaseSyncTimer) clearTimeout(_supabaseSyncTimer);

  const doSync = async () => {
    try {
      updateSyncStatus(true, 'กำลังซิงค์ข้อมูลขึ้น Cloud...');
      const payload = {
        classrooms: state.classrooms,
        students: state.students,
        attendance: state.attendance,
        scores: state.scores,
        subAssignments: state.subAssignments || {},
        subScores: state.subScores || {},
        customIndicatorMax: state.customIndicatorMax || {},
        customUnitWeight: state.customUnitWeight || {},
        holisticAssessments: state.holisticAssessments || {},
        lessonLogs: state.lessonLogs || [],
        settings: state.settings || {},
        academicYears: state.academicYears || ['2569'],
        yearArchives: state.yearArchives || {}
      };
      const { error } = await state.supabaseClient
        .from(DB_STORE_TABLE)
        .upsert({ key: 'eduhistory_state', value: payload, updated_at: new Date().toISOString() });
      if (!error) {
        updateSyncStatus(true, 'เชื่อมต่อ Supabase แล้ว (ซิงค์ล่าสุด ' + new Date().toLocaleTimeString('th-TH') + ')');
      } else {
        console.warn('Supabase upsert warning:', error);
        updateSyncStatus(true, 'เชื่อมต่อ Supabase แล้ว (รอซิงค์)');
      }
    } catch (e) {
      console.warn('Sync to Supabase error:', e);
    }
  };

  if (forceNow) {
    doSync();
  } else {
    _supabaseSyncTimer = setTimeout(doSync, 1500);
  }
}

async function pullFromSupabase() {
  if (!state.supabaseClient) return;
  try {
    updateSyncStatus(true, 'กำลังเชื่อมโยงข้อมูล Cloud...');
    let { data, error } = await state.supabaseClient
      .from(DB_STORE_TABLE)
      .select('value, updated_at')
      .eq('key', 'eduhistory_state')
      .maybeSingle();

    // Fallback check if user created app_store instead
    if ((error || !data) && error?.code !== 'PGRST116') {
      const fallback = await state.supabaseClient
        .from('app_store')
        .select('value, updated_at')
        .eq('key', 'eduhistory_state')
        .maybeSingle();
      if (!fallback.error && fallback.data) {
        data = fallback.data;
        error = null;
      }
    }

    if (!error && data && data.value) {
      const cloud = data.value;
      if (cloud.students && cloud.students.length > 0) state.students = cloud.students;
      if (cloud.classrooms && cloud.classrooms.length > 0) state.classrooms = cloud.classrooms;
      if (cloud.attendance) state.attendance = cloud.attendance;
      if (cloud.scores) state.scores = cloud.scores;
      if (cloud.subAssignments) state.subAssignments = cloud.subAssignments;
      if (cloud.subScores) state.subScores = cloud.subScores;
      if (cloud.customIndicatorMax) state.customIndicatorMax = cloud.customIndicatorMax;
      if (cloud.customUnitWeight) state.customUnitWeight = cloud.customUnitWeight;
      if (cloud.holisticAssessments) state.holisticAssessments = cloud.holisticAssessments;
      if (cloud.lessonLogs) state.lessonLogs = cloud.lessonLogs;
      if (cloud.settings) state.settings = Object.assign({}, DEFAULT_SETTINGS, cloud.settings);
      if (cloud.academicYears && cloud.academicYears.length > 0) state.academicYears = cloud.academicYears;
      if (cloud.yearArchives) state.yearArchives = cloud.yearArchives;
      saveLocalData(true);
      if (typeof renderActiveView === 'function') renderActiveView();
      updateSyncStatus(true, 'เชื่อมต่อ Supabase แล้ว (ข้อมูลอัปเดต)');
    } else {
      // First time initialization on Supabase: upload current local state
      syncToSupabase(true);
    }
  } catch (e) {
    console.warn('Pull from Supabase error:', e);
  }
}

function initSupabase() {
  if (state.supabaseUrl && state.supabaseKey && window.supabase) {
    try {
      state.supabaseClient = window.supabase.createClient(state.supabaseUrl, state.supabaseKey);
      updateSyncStatus(true, 'เชื่อมต่อ Supabase แล้ว');
      pullFromSupabase();
    } catch (err) {
      console.warn('Supabase init failed:', err);
      updateSyncStatus(false, 'โหมดออฟไลน์ (LocalStorage)');
    }
  } else {
    updateSyncStatus(false, 'โหมดออฟไลน์ (LocalStorage)');
  }
}

function updateSyncStatus(connected, text) {
  state.isCloudSynced = connected;
  const badge = document.getElementById('sync-status-badge');
  const dot = document.getElementById('sync-status-dot');
  const label = document.getElementById('sync-status-label');

  if (badge && dot && label) {
    label.textContent = text;
    if (connected) {
      dot.className = 'w-2 h-2 rounded-full bg-emerald-500 pulse-subtle';
      badge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200';
    } else {
      dot.className = 'w-2 h-2 rounded-full bg-amber-500';
      badge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200';
    }
  }
}

// ==========================================
// 5. COMPUTATION (Grades & Day Guard)
// ==========================================

function getCurriculumKey() {
  const g = state.currentGrade === 'ป.6' ? 'p6' : 'p5';
  return `${state.currentSubjectKey}_${g}`;
}

function getActiveCurriculum() {
  const key = getCurriculumKey();
  if (CURRICULUM_DATA[key]) return CURRICULUM_DATA[key];
  
  // Dynamic fallback for any grade (e.g. ป.4, ป.3)
  const base = (state.currentSubjectKey === 'social' ? CURRICULUM_DATA['social_p6'] : (CURRICULUM_DATA['history_p5'] || CURRICULUM_DATA['history_p6']));
  const gradeDigit = (state.currentGrade && state.currentGrade.replace(/[^0-9]/g, '')) || '5';
  const subjectDigit = state.currentSubjectKey === 'social' ? '01' : '02';
  return {
    ...base,
    code: `ส 1${gradeDigit}1${subjectDigit}`,
    grade: state.currentGrade,
    title: base.title
  };
}

function getActiveUnits() {
  const cur = getActiveCurriculum();
  return cur.units || [];
}

function getIndicatorMaxScore(indId, defaultMax) {
  const subjKey = state.currentSubjectKey || 'history';
  const grade = state.currentGrade || 'ป.6';
  const k = `${subjKey}_${grade}_${indId}`;
  if (state.customIndicatorMax && state.customIndicatorMax[k] !== undefined) {
    const val = Number(state.customIndicatorMax[k]);
    if (!isNaN(val) && val > 0) return val;
  }
  return Number(defaultMax) || 10;
}

function setIndicatorMaxScore(indId, newMax) {
  const subjKey = state.currentSubjectKey || 'history';
  const grade = state.currentGrade || 'ป.6';
  const k = `${subjKey}_${grade}_${indId}`;
  if (!state.customIndicatorMax) state.customIndicatorMax = {};
  state.customIndicatorMax[k] = Number(newMax);
  saveLocalData();
}

function resetIndicatorMaxScore(indId) {
  const subjKey = state.currentSubjectKey || 'history';
  const grade = state.currentGrade || 'ป.6';
  const k = `${subjKey}_${grade}_${indId}`;
  if (state.customIndicatorMax && state.customIndicatorMax[k] !== undefined) {
    delete state.customIndicatorMax[k];
    saveLocalData();
  }
}

function getUnitWeightScore(unitObj) {
  const subjKey = state.currentSubjectKey || 'history';
  const grade = state.currentGrade || 'ป.6';
  const uKey = unitObj.unitNo !== undefined ? String(unitObj.unitNo) : unitObj.name;
  const k = `${subjKey}_${grade}_${uKey}`;
  if (state.customUnitWeight && state.customUnitWeight[k] !== undefined) {
    const val = Number(state.customUnitWeight[k]);
    if (!isNaN(val) && val >= 0) return val;
  }
  return Number(unitObj.score) || 0;
}

function setUnitWeightScore(unitKey, newWeight) {
  const subjKey = state.currentSubjectKey || 'history';
  const grade = state.currentGrade || 'ป.6';
  const k = `${subjKey}_${grade}_${unitKey}`;
  if (!state.customUnitWeight) state.customUnitWeight = {};
  state.customUnitWeight[k] = Number(newWeight);
  saveLocalData();
}

function resetUnitWeightScore(unitKey) {
  const subjKey = state.currentSubjectKey || 'history';
  const grade = state.currentGrade || 'ป.6';
  const k = `${subjKey}_${grade}_${unitKey}`;
  if (state.customUnitWeight && state.customUnitWeight[k] !== undefined) {
    delete state.customUnitWeight[k];
    saveLocalData();
  }
}

function getActiveUnitsForSemester(sem) {
  const targetSem = sem || 'all';
  const units = getActiveUnits();
  return units.filter(u => {
    return targetSem === 'all' || 
           u.semesterKey === targetSem || 
           u.semesterKey === 'both' || 
           (u.semester && u.semester.includes(targetSem));
  }).map(u => {
    const weight = getUnitWeightScore(u);
    const indicators = (u.indicators || []).map(ind => ({
      id: ind.code,
      name: ind.desc,
      type: ind.type,
      max: getIndicatorMaxScore(ind.code, ind.max),
      defaultMax: ind.max,
      unitNo: u.unitNo,
      unitName: u.name
    }));
    return {
      ...u,
      weight,
      defaultWeight: u.score,
      indicators
    };
  });
}

function getActiveIndicatorsForSemester(sem) {
  const units = getActiveUnitsForSemester(sem);
  const list = [];
  units.forEach(u => {
    (u.indicators || []).forEach(ind => {
      list.push(ind);
    });
  });
  return list;
}

function calculateStudentUnitScores(studentId, sem) {
  const units = getActiveUnitsForSemester(sem);
  const studentScores = state.scores[studentId] || {};
  
  let grandTotalScaled = 0;
  const unitResults = {};
  units.forEach(u => {
    const uKey = String(u.unitNo !== undefined ? u.unitNo : u.name);
    const indicators = u.indicators || [];
    const totalCount = indicators.length;
    
    let enteredCount = 0;
    let rawScoreTotal = 0;
    let rawMaxTotal = 0;

    indicators.forEach(ind => {
      rawMaxTotal += ind.max;
      const sVal = studentScores[ind.id];
      if (sVal !== undefined && sVal !== '' && sVal !== null && !isNaN(Number(sVal))) {
        enteredCount++;
        rawScoreTotal += Number(sVal);
      }
    });

    const isComplete = totalCount > 0 && enteredCount === totalCount;
    let scaledScore = 0;
    let isPartial = false;

    if (isComplete) {
      scaledScore = rawMaxTotal > 0 ? (rawScoreTotal / rawMaxTotal) * u.weight : 0;
      scaledScore = Math.round(scaledScore);
    } else if (enteredCount > 0) {
      isPartial = true;
      scaledScore = rawMaxTotal > 0 ? (rawScoreTotal / rawMaxTotal) * u.weight : 0;
      scaledScore = Math.round(scaledScore);
    } else {
      scaledScore = 0;
    }

    grandTotalScaled += scaledScore;

    unitResults[uKey] = {
      unitNo: u.unitNo,
      unitName: u.name,
      weight: u.weight,
      rawScoreTotal: Math.round(rawScoreTotal * 10) / 10,
      rawMaxTotal: Math.round(rawMaxTotal * 10) / 10,
      enteredCount,
      totalCount,
      isComplete,
      isPartial,
      scaledScore
    };
  });

  grandTotalScaled = Math.round(grandTotalScaled);
  return {
    units: unitResults,
    grandTotalScaled
  };
}

function getActiveIndicators() {
  const currentSemesterFilter = state.gradebookSemester || state.currentSemester || 'all';
  return getActiveIndicatorsForSemester(currentSemesterFilter);
}

function getActiveTopics() {
  const units = getActiveUnits();
  const topics = [];
  units.forEach(u => {
    if (u.topics) {
      u.topics.forEach(t => topics.push({ unitName: u.name, topic: t }));
    }
  });
  return topics;
}

function calculateGrade(totalScore, maxPossibleScore = 50) {
  const normalized = maxPossibleScore === 100 ? totalScore : (totalScore / maxPossibleScore) * 100;
  const score = Math.round(Number(normalized) * 10) / 10;
  if (score >= 80) return '4';
  if (score >= 75) return '3.5';
  if (score >= 70) return '3';
  if (score >= 65) return '2.5';
  if (score >= 60) return '2';
  if (score >= 55) return '1.5';
  if (score >= 50) return '1';
  return '0';
}

function getStudentAttendanceStats(studentId, term = 'all') {
  const student = (state.students || []).find(st => st.id === studentId);
  const isTransferred = student && student.status === 'ย้ายออก';
  if (isTransferred) {
    return {
      percentage: '-',
      percentageNum: 0,
      isAtRisk: false,
      totalRecorded: 0,
      presentDays: 0,
      absentDays: 0,
      leaveDays: 0,
      sickDays: 0,
      hasRecords: false,
      isTransferred: true
    };
  }

  const s = state.settings || DEFAULT_SETTINGS;
  const term1Start = s.term1Start || '2026-05-18';
  const term1End = s.term1End || '2026-10-12';
  const term2Start = s.term2Start || '2026-11-02';
  const term2End = s.term2End || '2027-03-31';

  const allDates = Object.keys(state.attendance || {});
  let totalRecorded = 0;
  let presentDays = 0;
  let absentDays = 0;
  let leaveDays = 0;
  let sickDays = 0;

  allDates.forEach(date => {
    if (term === '1' && (date < term1Start || date > term1End)) return;
    if (term === '2' && (date < term2Start || date > term2End)) return;
    const dayRecord = state.attendance[date];
    if (dayRecord && dayRecord[studentId]) {
      totalRecorded++;
      const status = dayRecord[studentId];
      if (status === 'มา') presentDays++;
      else if (status === 'ขาด') absentDays++;
      else if (status === 'ลา') leaveDays++;
      else if (status === 'ป่วย') sickDays++;
    }
  });

  if (totalRecorded === 0) {
    return {
      percentage: term === 'all' || term === 'year' ? 100 : '-',
      percentageNum: 100,
      isAtRisk: false,
      totalRecorded: 0,
      presentDays: 0,
      absentDays: 0,
      leaveDays: 0,
      sickDays: 0,
      hasRecords: false
    };
  }

  const percentage = Math.round((presentDays / totalRecorded) * 100);
  return {
    percentage,
    percentageNum: percentage,
    isAtRisk: percentage < 80,
    totalRecorded,
    presentDays,
    absentDays,
    leaveDays,
    sickDays,
    hasRecords: true
  };
}

function isStudentInClassroom(student, classroom) {
  if (!student || !classroom) return false;
  if (classroom.name && classroom.name.includes('/')) {
    const [cg, cr] = classroom.name.split('/');
    return (student.grade === cg || student.grade === classroom.name) && String(student.room || '1') === String(cr);
  }
  if (classroom.room && String(classroom.room) !== '1') {
    return student.grade === classroom.grade && String(student.room) === String(classroom.room);
  }
  if (classroom.room) {
    return (student.grade === classroom.grade || student.grade === classroom.name) &&
           String(student.room || '1') === String(classroom.room);
  }
  return student.grade === classroom.grade || student.grade === classroom.name;
}

function getFilteredStudents() {
  const classrooms = (state.classrooms && state.classrooms.length > 0) ? state.classrooms : DEFAULT_CLASSROOMS;
  const currentCls = classrooms.find(c => c.name === state.currentGrade || c.grade === state.currentGrade) || { grade: state.currentGrade, room: state.currentRoom, name: state.currentGrade };
  return (state.students || []).filter(s => {
    return isStudentInClassroom(s, currentCls) || 
      (s.grade === state.currentGrade && String(s.room || '1') === String(state.currentRoom || '1'));
  }).sort((a, b) => Number(a.student_no) - Number(b.student_no));
}

const THAI_DAY_NAMES = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'];

function formatThaiDateFullDay(dateStr) {
  if (!dateStr) return { day: '', month: '', year: '', dayName: '', text: '', shortText: '', dmyNumeric: '' };
  const parts = String(dateStr).split('-');
  if (parts.length === 3) {
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1;
    const d = parseInt(parts[2], 10);
    const thaiMonthsFull = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];
    const thaiMonthsShort = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const thaiDays = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'];
    const dt = new Date(y, m, d);
    const dayName = !isNaN(dt.getTime()) ? thaiDays[dt.getDay()] : '';
    const thaiYear = y + 543;
    return {
      day: d,
      month: thaiMonthsFull[m],
      year: thaiYear,
      dayName: dayName,
      text: `${d} ${thaiMonthsFull[m]} ${thaiYear}`,
      shortText: `${d} ${thaiMonthsShort[m]} ${thaiYear}`,
      dmyNumeric: `${String(d).padStart(2, '0')}/${String(m + 1).padStart(2, '0')}/${thaiYear}`
    };
  }
  return { day: '', month: '', year: '', dayName: '', text: dateStr, shortText: dateStr, dmyNumeric: dateStr };
}

window.openAttendanceDatePicker = function() {
  const dateInp = document.getElementById('attendance-date-input');
  if (dateInp) {
    if (typeof dateInp.showPicker === 'function') {
      try {
        dateInp.showPicker();
        return;
      } catch (err) {}
    }
    dateInp.focus();
    dateInp.click();
  }
};
window.setAttendanceDateToday = function() {
  const todayStr = new Date().toISOString().split('T')[0];
  state.selectedDate = todayStr;
  const dateInp = document.getElementById('attendance-date-input');
  if (dateInp) dateInp.value = todayStr;
  renderAttendanceView();
};
window.changeAttendanceDayOffset = function(offset) {
  const teachingDates = getTeachingDatesForPeriod('all', state.currentGrade);
  const curDate = state.selectedDate;
  if (teachingDates && teachingDates.length > 0) {
    const idx = teachingDates.indexOf(curDate);
    if (idx !== -1) {
      const nextIdx = idx + offset;
      if (nextIdx >= 0 && nextIdx < teachingDates.length) {
        window.goToAttendanceDate(teachingDates[nextIdx]);
        return;
      }
    } else {
      const nextDates = teachingDates.filter(d => offset > 0 ? d > curDate : d < curDate);
      if (nextDates.length > 0) {
        window.goToAttendanceDate(offset > 0 ? nextDates[0] : nextDates[nextDates.length - 1]);
        return;
      }
    }
  }
  const d = new Date(curDate + 'T00:00:00');
  d.setDate(d.getDate() + offset);
  const nextDateStr = d.toISOString().split('T')[0];
  window.goToAttendanceDate(nextDateStr);
};
function checkDayStatus(dateStr, grade) {
  if (!dateStr) return { isNormal: true };
  const d = new Date(dateStr.includes('T') ? dateStr : (dateStr + 'T00:00:00'));
  const dayOfWeek = d.getDay();
  const dayName = THAI_DAY_NAMES[dayOfWeek];

  // 1. ตรวจสอบว่าวันที่เลือกอยู่ในช่วงเปิดภาคเรียนหรือไม่ (การเช็คชื่อต้องอยู่ในช่วงเปิดเทอม)
  const s = state.settings || DEFAULT_SETTINGS;
  const isTerm1 = s.term1Start && s.term1End && (dateStr >= s.term1Start && dateStr <= s.term1End);
  const isTerm2 = s.term2Start && s.term2End && (dateStr >= s.term2Start && dateStr <= s.term2End);

  if (!isTerm1 && !isTerm2) {
    let reason = 'อยู่นอกช่วงเปิดภาคเรียน (ระบบล็อกการเช็คชื่อ)';
    if (s.term1End && s.term2Start && (dateStr > s.term1End && dateStr < s.term2Start)) {
      reason = 'ช่วงปิดภาคเรียนระหว่างเทอม 1 และเทอม 2';
    } else if (s.term1Start && dateStr < s.term1Start) {
      reason = 'ก่อนวันเปิดภาคเรียนที่ 1';
    } else if (s.term2End && dateStr > s.term2End) {
      reason = 'สิ้นสุดปีการศึกษาแล้ว (ปิดภาคเรียนปลายปี)';
    }
    return {
      isNoTeaching: true,
      isBreak: true,
      dayOfWeek: dayName,
      reason: reason
    };
  }

  const holiday = (state.settings.holidays || []).find(h => h.date === dateStr);
  if (holiday) return { isHoliday: true, name: holiday.name };
  const makeup = (state.settings.makeupDays || []).find(m => m.date === dateStr);
  if (makeup) {
    const subjKey = state.currentSubjectKey || 'history';
    const schedList = (state.settings && state.settings.teachingSchedule && state.settings.teachingSchedule[subjKey] && state.settings.teachingSchedule[subjKey][grade]) || null;
    if (schedList && Array.isArray(schedList) && schedList.length > 0) {
      if (schedList.includes(makeup.useDaySchedule)) {
        return { isMakeup: true, useDaySchedule: makeup.useDaySchedule };
      } else {
        return { 
          isNoTeaching: true, 
          dayOfWeek: makeup.useDaySchedule, 
          reason: `วันชดเชยตาราง${makeup.useDaySchedule} (ชั้น ${grade} ไม่มีคาบสอนใน${makeup.useDaySchedule})` 
        };
      }
    }
    return { isMakeup: true, useDaySchedule: makeup.useDaySchedule };
  }

  // วันหยุดสุดสัปดาห์ (เสาร์-อาทิตย์) หากไม่ได้เป็นวันสอนชดเชย จะไม่มีคาบสอน
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return {
      isNoTeaching: true,
      isWeekend: true,
      dayOfWeek: dayName,
      reason: `วันหยุดสุดสัปดาห์ (${dayName}) ไม่มีตารางสอน`
    };
  }

  // ตรวจสอบตารางสอนประจำสัปดาห์ของวิชานี้ในชั้นเรียนนี้
  const subjKey = state.currentSubjectKey || 'history';
  const schedList = (state.settings && state.settings.teachingSchedule && state.settings.teachingSchedule[subjKey] && state.settings.teachingSchedule[subjKey][grade]) || null;
  if (schedList && Array.isArray(schedList) && schedList.length > 0) {
    if (!schedList.includes(dayName)) {
      return { 
        isNoTeaching: true, 
        dayOfWeek: dayName, 
        reason: `ไม่มีตารางสอนวิชา${subjKey === 'history' ? 'ประวัติศาสตร์' : 'สังคมศึกษา'}ใน${dayName}` 
      };
    }
  }

  return { isNormal: true, dayOfWeek: dayName };
}

// ==========================================
// 6. UI VIEW SWITCHING & RENDERING
// ==========================================

function switchView(viewName) {
  let targetView = viewName;
  let targetSubTab = null;

  if (viewName === 'att_daily') {
    targetView = 'attendance';
    targetSubTab = 'daily';
  } else if (viewName === 'att_monthly') {
    targetView = 'attendance';
    targetSubTab = 'monthly';
  } else if (viewName === 'att_semester') {
    targetView = 'pp5_summary';
  }

  state.currentView = targetView;

  document.querySelectorAll('.nav-btn').forEach(btn => {
    const target = btn.getAttribute('data-view');
    const isMatched = (target === viewName) || 
      (target === targetView) ||
      (targetView === 'attendance' && target === `att_${targetSubTab || state.attendanceSubTab}`);
    if (isMatched) {
      btn.className = 'nav-btn group relative w-14 h-14 rounded-2xl flex flex-col items-center justify-center bg-blue-600 text-white shadow-md shadow-blue-500/25 font-bold transition-all cursor-pointer';
    } else {
      btn.className = 'nav-btn group relative w-14 h-14 rounded-2xl flex flex-col items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all cursor-pointer';
    }
  });

  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    const target = btn.getAttribute('data-view');
    if (target === targetView || (targetView === 'attendance' && target === 'attendance')) {
      btn.className = 'mobile-nav-btn flex-1 py-2 flex flex-col items-center justify-center text-blue-600 font-semibold';
    } else {
      btn.className = 'mobile-nav-btn flex-1 py-2 flex flex-col items-center justify-center text-slate-500 font-normal hover:text-slate-800';
    }
  });

  const vDashboard = document.getElementById('view-dashboard');
  if (vDashboard) vDashboard.classList.toggle('hidden', targetView !== 'dashboard');

  const vCurriculum = document.getElementById('view-curriculum');
  if (vCurriculum) vCurriculum.classList.toggle('hidden', targetView !== 'curriculum');

  const vAttendance = document.getElementById('view-attendance');
  if (vAttendance) vAttendance.classList.toggle('hidden', targetView !== 'attendance');

  const vGradebook = document.getElementById('view-gradebook');
  if (vGradebook) vGradebook.classList.toggle('hidden', targetView !== 'gradebook');

  const vHolistic = document.getElementById('view-holistic');
  if (vHolistic) vHolistic.classList.toggle('hidden', targetView !== 'holistic');

  const vPP5Summary = document.getElementById('view-pp5_summary');
  if (vPP5Summary) vPP5Summary.classList.toggle('hidden', targetView !== 'pp5_summary');

  const vLesson = document.getElementById('view-lesson_logs');
  if (vLesson) vLesson.classList.toggle('hidden', targetView !== 'lesson_logs');

  const vAnalytics = document.getElementById('view-analytics');
  if (vAnalytics) vAnalytics.classList.toggle('hidden', targetView !== 'analytics');

  const vSettings = document.getElementById('view-settings');
  if (vSettings) vSettings.classList.toggle('hidden', targetView !== 'settings');

  const vClassrooms = document.getElementById('view-classrooms');
  if (vClassrooms) vClassrooms.classList.toggle('hidden', targetView !== 'classrooms');
  
  const vStudents = document.getElementById('view-students');
  if (vStudents) vStudents.classList.toggle('hidden', targetView !== 'students');

  if (targetSubTab) {
    window.switchAttendanceSubTab(targetSubTab);
  } else {
    renderCurrentView();
  }
}

function renderApp() {
  populateGlobalYearSelector();
  populateGlobalClassroomSelector();

  const gradeSel = document.getElementById('class-selector-grade');
  if (gradeSel) {
    const grades = getAvailableGrades();
    gradeSel.innerHTML = grades.map(g => `<option value="${g}" ${g === state.currentGrade ? 'selected' : ''}>${g}</option>`).join('');
    gradeSel.value = state.currentGrade;
  }
  const roomSel = document.getElementById('class-selector-room');
  if (roomSel) roomSel.value = state.currentRoom;
  const subjSel = document.getElementById('subject-selector');
  if (subjSel) subjSel.value = state.currentSubjectKey;
  const semSel = document.getElementById('semester-selector');
  if (semSel) semSel.value = state.currentSemester;
  const dateInp = document.getElementById('attendance-date-input');
  if (dateInp) dateInp.value = state.selectedDate;

  renderCurrentView();
}

function populateGlobalClassroomSelector() {
  const globalSel = document.getElementById('global-classroom-selector');
  if (!globalSel) return;
  const classrooms = (state.classrooms && state.classrooms.length > 0) ? state.classrooms : DEFAULT_CLASSROOMS;
  
  globalSel.innerHTML = classrooms.map(c => {
    const isSelected = (c.name === state.currentGrade || (c.grade === state.currentGrade && c.room === state.currentRoom));
    return `<option value="${c.name}" ${isSelected ? 'selected' : ''}>ห้อง ${c.name}</option>`;
  }).join('');

  const matched = classrooms.find(c => c.name === state.currentGrade || (c.grade === state.currentGrade && c.room === state.currentRoom));
  if (matched) {
    globalSel.value = matched.name;
  }
  
  updateSidebarClassroomBadge();
}

function updateSidebarClassroomBadge() {
  const badge = document.getElementById('sidebar-current-room-badge');
  if (!badge) return;
  const count = getFilteredStudents().length;
  badge.textContent = `${state.currentGrade} (${count} คน)`;
}

window.handleGlobalClassroomChange = function(val) {
  if (!val) return;
  const classrooms = (state.classrooms && state.classrooms.length > 0) ? state.classrooms : DEFAULT_CLASSROOMS;
  const cls = classrooms.find(c => c.name === val || c.id === val || c.grade === val);
  if (cls) {
    state.currentGrade = cls.grade || cls.name;
    state.currentRoom = cls.room || '1';
  } else {
    state.currentGrade = val;
    state.currentRoom = '1';
  }
  state.selectedMonthlyGrade = state.currentGrade;
  state.selectedSemesterGrade = state.currentGrade;
  state.selectedStudentFilterClass = val;

  try {
    localStorage.setItem('hist_active_classroom', val);
  } catch (e) {}

  // Sync Global Header Selector
  const globalSel = document.getElementById('global-classroom-selector');
  if (globalSel && globalSel.value !== (cls ? cls.name : val)) {
    globalSel.value = cls ? cls.name : val;
  }

  // Sync hidden inputs for compatibility
  const gradeSel = document.getElementById('class-selector-grade');
  if (gradeSel) gradeSel.value = state.currentGrade;
  const roomSel = document.getElementById('class-selector-room');
  if (roomSel) roomSel.value = state.currentRoom;

  // Sync Monthly Selector
  const mSel = document.getElementById('monthly-att-grade-select');
  if (mSel) mSel.value = state.currentGrade;
  const mDisplay = document.getElementById('monthly-att-room-display');
  if (mDisplay) mDisplay.textContent = `ห้อง ${val}`;

  // Sync Semester Selector
  const sSel = document.getElementById('sem-att-grade-select');
  if (sSel) sSel.value = state.currentGrade;
  const sDisplay = document.getElementById('sem-att-room-display');
  if (sDisplay) sDisplay.textContent = `ห้อง ${val}`;

  // Sync Student Unified Selector & Displays
  const stdUnified = document.getElementById('student-unified-class-select');
  if (stdUnified) stdUnified.value = val;
  const stdLabel = document.getElementById('student-current-target-label');
  if (stdLabel) stdLabel.textContent = `ห้อง ${val}`;
  const stdAddDisplay = document.getElementById('student-add-class-display');
  if (stdAddDisplay) stdAddDisplay.value = `ห้อง ${val}`;
  const stdAddInp = document.getElementById('student-add-class');
  if (stdAddInp) stdAddInp.value = val;
  const stdImportDisplay = document.getElementById('student-import-class-display');
  if (stdImportDisplay) stdImportDisplay.textContent = `ห้อง ${val}`;
  const stdImportInp = document.getElementById('student-import-class');
  if (stdImportInp) stdImportInp.value = val;
  const stdPasteDisplay = document.getElementById('student-paste-class-display');
  if (stdPasteDisplay) stdPasteDisplay.textContent = `ห้อง ${val}`;
  const stdPasteInp = document.getElementById('student-paste-class');
  if (stdPasteInp) stdPasteInp.value = val;
  const stdFilterSel = document.getElementById('student-filter-class');
  if (stdFilterSel) stdFilterSel.value = val;

  updateSidebarClassroomBadge();
  if (typeof window.handleStudentAddClassChange === 'function') {
    window.handleStudentAddClassChange();
  }

  renderCurrentView();
  showNotification(`สลับห้องเรียนเป็น "${val}" เรียบร้อย (ข้อมูลทุกหน้าอัปเดตตรงกัน)`);
};
window.handleStudentUnifiedClassChange = function(val) {
  window.handleGlobalClassroomChange(val);
};
window.handleStudentFilterClassChange = function(val) {
  state.selectedStudentFilterClass = val;
  if (val && val !== 'all') {
    window.handleGlobalClassroomChange(val);
  } else {
    renderStudentsView();
  }
};
function renderCurrentView() {
  if (state.currentView === 'dashboard') renderDashboardView();
  else if (state.currentView === 'curriculum') renderCurriculumView();
  else if (state.currentView === 'attendance') renderAttendanceView();
  else if (state.currentView === 'gradebook') renderGradebookView();
  else if (state.currentView === 'holistic') renderHolisticView();
  else if (state.currentView === 'pp5_summary') renderPP5SummaryView();
  else if (state.currentView === 'lesson_logs') renderLessonLogsView();
  else if (state.currentView === 'settings') renderSettingsView();
  else if (state.currentView === 'classrooms') renderClassroomsView();
  else if (state.currentView === 'students') renderStudentsView();
}

// ------------------------------------------
// View 0: Curriculum
// ------------------------------------------
function renderCurriculumView() {
  const cur = getActiveCurriculum();
  const summary = cur.scoresSummary || { accumulated: 70, midterm: 15, final: 15, total: 100 };
  const titleEl = document.getElementById('curriculum-page-title');
  if (titleEl) {
    titleEl.textContent = `${cur.title} (${cur.code} ชั้น ${state.currentGrade})`;
  }

  document.getElementById('stat-accumulated-score').textContent = summary.accumulated;
  document.getElementById('stat-midterm-score').textContent = summary.midterm;
  document.getElementById('stat-final-score').textContent = summary.final;
  document.getElementById('stat-total-score').textContent = summary.total;
  document.getElementById('stat-total-hours').textContent = `${cur.hoursPerYear} / ${cur.hoursPerYear} ชม./ปี`;

  const subCategoryEl = document.getElementById('curriculum-subcategory-name');
  if (subCategoryEl) {
    const icon = state.currentSubjectKey === 'history' ? '🏛️' : '🔬';
    subCategoryEl.innerHTML = `<span>${icon}</span> <span>รายวิชา${cur.name}</span>`;
  }

  const tbody = document.getElementById('curriculum-units-tbody');
  if (!tbody) return;

  const units = cur.units || [];
  tbody.innerHTML = units.map(u => `
    <tr class="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
      <td class="py-4 px-4 text-center text-sm font-bold text-slate-700 w-16 align-top">
        ${u.unitNo === 'midterm' ? 'กลางปี' : (u.unitNo === 'final' ? 'ปลายปี' : u.unitNo)}
      </td>
      <td class="py-4 px-4 align-top min-w-[200px]">
        <span class="text-sm font-semibold text-indigo-700 hover:text-indigo-900 cursor-pointer">${u.name}</span>
        ${u.topics ? `
          <div class="mt-2 text-xs text-slate-500 space-y-1">
            ${u.topics.map(t => `<div class="flex items-start gap-1.5"><span class="text-slate-400">•</span><span>${t}</span></div>`).join('')}
          </div>
        ` : ''}
      </td>
      <td class="py-4 px-4 align-top">
        ${u.indicators && u.indicators.length > 0 ? `
          <div class="space-y-3">
            ${u.indicators.map(ind => `
              <div class="text-xs leading-relaxed text-slate-700 flex items-start gap-2">
                <span class="text-slate-400 font-bold">•</span>
                <div class="flex-1">
                  <span class="font-bold text-slate-900">${ind.code}</span>
                  <span class="${ind.type === 'ระหว่างทาง' ? 'badge-between' : (ind.type === 'ปลายทาง' ? 'badge-end' : 'badge-exam')} ml-1.5 mr-1.5 inline-block">
                    ${ind.type}
                  </span>
                  <span class="text-slate-600">${ind.desc}</span>
                  <span class="text-slate-400 text-[11px] font-semibold ml-1">(เต็ม ${ind.max})</span>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `<span class="text-xs text-slate-400">-</span>`}
      </td>
      <td class="py-4 px-4 text-center align-top w-28">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs">
          ${u.semester}
        </span>
      </td>
      <td class="py-4 px-4 text-center text-sm font-bold text-slate-800 align-top w-20">${u.hours}</td>
      <td class="py-4 px-4 text-center text-sm font-bold text-slate-800 align-top w-20">${u.score}</td>
    </tr>
  `).join('');
}

// ==========================================
// View 1: Attendance & Reporting (3-Sub-Tab Suite)
// ==========================================

const THAI_MONTH_NAMES_LONG = [
  'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
];

const THAI_DAY_SHORT_LABELS = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];

function getAvailableGrades() {
  const fromStudents = (state.students || []).map(s => s.grade);
  const fromClassrooms = (state.classrooms || []).map(c => c.grade || c.name);
  const grades = Array.from(new Set([...fromStudents, ...fromClassrooms])).filter(Boolean);
  if (!grades.includes('ป.5')) grades.push('ป.5');
  if (!grades.includes('ป.6')) grades.push('ป.6');
  return grades.sort((a, b) => a.localeCompare(b, 'th'));
}

window.switchAttendanceSubTab = function(subTab) {
  state.attendanceSubTab = subTab;

  const btnDaily = document.getElementById('subtab-btn-daily');
  const btnMonthly = document.getElementById('subtab-btn-monthly');
  const btnSemester = document.getElementById('subtab-btn-semester');

  const panelDaily = document.getElementById('panel-att-daily');
  const panelMonthly = document.getElementById('panel-att-monthly');
  const panelSemester = document.getElementById('panel-att-semester');

  const activeClasses = ['bg-white', 'text-blue-700', 'shadow-xs', 'font-semibold'];
  const inactiveClasses = ['text-slate-600', 'hover:text-slate-900', 'font-medium'];

  [btnDaily, btnMonthly, btnSemester].forEach(btn => {
    if (btn) {
      btn.classList.remove(...activeClasses);
      btn.classList.add(...inactiveClasses);
    }
  });

  if (panelDaily) panelDaily.classList.add('hidden');
  if (panelMonthly) panelMonthly.classList.add('hidden');
  if (panelSemester) panelSemester.classList.add('hidden');

  if (subTab === 'monthly') {
    if (btnMonthly) {
      btnMonthly.classList.remove(...inactiveClasses);
      btnMonthly.classList.add(...activeClasses);
    }
    if (panelMonthly) panelMonthly.classList.remove('hidden');
    renderMonthlyAttendanceTab();
  } else if (subTab === 'semester') {
    if (btnSemester) {
      btnSemester.classList.remove(...inactiveClasses);
      btnSemester.classList.add(...activeClasses);
    }
    if (panelSemester) panelSemester.classList.remove('hidden');
    renderSemesterAttendanceTab();
  } else {
    if (btnDaily) {
      btnDaily.classList.remove(...inactiveClasses);
      btnDaily.classList.add(...activeClasses);
    }
    if (panelDaily) panelDaily.classList.remove('hidden');
    renderDailyAttendanceTab();
  }

  // Synchronize sidebar nav buttons for attendance sub-views
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const target = btn.getAttribute('data-view');
    if (target === `att_${subTab}`) {
      btn.className = 'nav-btn group relative w-14 h-14 rounded-2xl flex flex-col items-center justify-center bg-blue-600 text-white shadow-md shadow-blue-500/25 font-bold transition-all cursor-pointer';
    } else if (target && target.startsWith('att_')) {
      btn.className = 'nav-btn group relative w-14 h-14 rounded-2xl flex flex-col items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all cursor-pointer';
    }
  });
};
function renderAttendanceView() {
  const currentSubTab = state.attendanceSubTab || 'daily';
  if (currentSubTab === 'monthly') {
    renderMonthlyAttendanceTab();
  } else if (currentSubTab === 'semester') {
    renderSemesterAttendanceTab();
  } else {
    renderDailyAttendanceTab();
  }
}

// ------------------------------------------
// Sub-Tab 1: บันทึกรายวัน (Daily Check-in)
// ------------------------------------------
function renderDailyAttendanceTab() {
  const students = getFilteredStudents();
  const date = state.selectedDate;
  const hasSavedDay = !!(state.attendance[date] && Object.keys(state.attendance[date]).length > 0);
  const dayAttendance = state.attendance[date] || {};
  const guardStatus = checkDayStatus(date, state.currentGrade);
  const isLockedDay = !!(guardStatus.isHoliday || guardStatus.isNoTeaching || guardStatus.isBreak);

  // Update Thai Date Display Label (วัน เดือน ปี พ.ศ.)
  const thaiInfo = formatThaiDateFullDay(date);
  const displayLabel = document.getElementById('attendance-date-thai-display');
  const dayBadge = document.getElementById('attendance-date-day-badge');
  if (displayLabel) {
    displayLabel.textContent = `${thaiInfo.day} ${thaiInfo.month} ${thaiInfo.year}`;
  }
  if (dayBadge) {
    dayBadge.textContent = thaiInfo.dayName || '';
  }

  const dateInp = document.getElementById('attendance-date-input');
  if (dateInp) {
    dateInp.value = date;
    const s = state.settings || DEFAULT_SETTINGS;
    if (s.term1Start) dateInp.min = s.term1Start;
    if (s.term2End) dateInp.max = s.term2End;
  }

  const guardBanner = document.getElementById('attendance-guard-banner');
  if (guardBanner) {
    if (guardStatus.isBreak) {
      guardBanner.innerHTML = `
        <div class="bg-amber-50 border border-amber-300 text-amber-900 px-4 py-3.5 rounded-xl flex items-center justify-between text-xs sm:text-sm shadow-xs">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">🔒</span>
            <div>
              <strong>ช่วงปิดภาคเรียน:</strong> ${guardStatus.reason}
              <div class="text-xs text-amber-700 mt-0.5 font-medium">ระบบล็อกการเช็คชื่ออัตโนมัติ (การเช็คชื่อต้องอยู่ในช่วงเปิดภาคเรียนเท่านั้น)</div>
            </div>
          </div>
          <span class="text-xs bg-amber-200 text-amber-900 px-2.5 py-1 rounded-lg font-bold shrink-0">ปิดภาคเรียน (ล็อก)</span>
        </div>
      `;
      guardBanner.classList.remove('hidden');
    } else if (guardStatus.isHoliday) {
      guardBanner.innerHTML = `
        <div class="bg-amber-50 border border-amber-300 text-amber-900 px-4 py-3.5 rounded-xl flex items-center justify-between text-xs sm:text-sm shadow-xs">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">🔒</span>
            <div>
              <strong>วันหยุดราชการ/สถานศึกษา:</strong> ${guardStatus.name}
              <div class="text-xs text-amber-700 mt-0.5 font-medium">ระบบล็อกการเช็คชื่ออัตโนมัติ เพื่อป้องกันข้อมูลเวลาเรียนใน ปพ.5 คลาดเคลื่อน</div>
            </div>
          </div>
          <span class="text-xs bg-amber-200 text-amber-900 px-2.5 py-1 rounded-lg font-bold shrink-0">วันหยุด (ล็อก)</span>
        </div>
      `;
      guardBanner.classList.remove('hidden');
    } else if (guardStatus.isNoTeaching) {
      guardBanner.innerHTML = `
        <div class="bg-rose-50 border border-rose-300 text-rose-900 px-4 py-3.5 rounded-xl flex items-center justify-between text-xs sm:text-sm shadow-xs">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">🔒</span>
            <div>
              <strong>ไม่มีคาบสอนสำหรับชั้น ${state.currentGrade}:</strong> ${guardStatus.reason || `วันนี้ (${guardStatus.dayOfWeek}) ไม่มีตารางสอนในภาคเรียนนี้`}
              <div class="text-xs text-rose-700 mt-0.5 font-medium">ระบบล็อกการเช็คชื่อตามแบบที่ 2 (สามารถเช็คชื่อได้เฉพาะวันที่มีคาบสอนหรือวันสอนชดเชย)</div>
            </div>
          </div>
          <span class="text-xs bg-rose-200 text-rose-900 px-2.5 py-1 rounded-lg font-bold shrink-0">ไม่มีคาบ (ล็อก)</span>
        </div>
      `;
      guardBanner.classList.remove('hidden');
    } else if (guardStatus.isMakeup) {
      guardBanner.innerHTML = `
        <div class="bg-blue-50 border border-blue-200 text-blue-900 px-4 py-3 rounded-xl flex items-center justify-between text-xs sm:text-sm shadow-xs">
          <div class="flex items-center gap-2.5">
            <span class="text-xl">🔄</span>
            <div><strong>วันสอนชดเชย:</strong> กำลังใช้ตารางสอนของ (${guardStatus.useDaySchedule}) ปลดล็อกให้เช็คชื่อได้ตามปกติ</div>
          </div>
          <span class="text-xs bg-blue-200 text-blue-900 px-2.5 py-1 rounded-lg font-bold shrink-0">ชดเชย</span>
        </div>
      `;
      guardBanner.classList.remove('hidden');
    } else if (!hasSavedDay) {
      guardBanner.innerHTML = `
        <div class="bg-blue-50 border border-blue-200 text-blue-900 px-4 py-3 rounded-xl flex items-center justify-between text-xs sm:text-sm shadow-xs">
          <div class="flex items-center gap-2.5">
            <span class="text-xl">ℹ️</span>
            <div><strong>วันที่นี้ยังไม่ได้บันทึกการเช็คชื่อ:</strong> กดปุ่ม "มาทุกคน" หรือคลิกเลือกสถานะเพื่อบันทึก</div>
          </div>
          <span class="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-lg font-semibold shrink-0">รอเช็คชื่อ</span>
        </div>
      `;
      guardBanner.classList.remove('hidden');
    } else {
      guardBanner.classList.add('hidden');
    }
  }

  // Toggle "มาทุกคน" button based on isLockedDay
  const btnMarkAll = document.getElementById('btn-mark-all-present');
  if (btnMarkAll) {
    if (isLockedDay) {
      btnMarkAll.disabled = true;
      btnMarkAll.className = 'touch-target flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-200 text-slate-400 cursor-not-allowed shadow-none flex items-center justify-center gap-1.5 opacity-60';
      btnMarkAll.title = 'ล็อกการเช็คชื่อ: ' + (guardStatus.isBreak ? guardStatus.reason : (guardStatus.isHoliday ? 'วันหยุด' : 'ไม่มีคาบสอนตามตาราง'));
      btnMarkAll.innerHTML = `<span>🔒</span> <span>มาทุกคน (ล็อก)</span>`;
    } else {
      btnMarkAll.disabled = false;
      btnMarkAll.className = 'touch-target flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer';
      btnMarkAll.title = 'บันทึกสถานะมาทุกคน';
      btnMarkAll.innerHTML = `<span>✅</span> <span>มาทุกคน</span>`;
    }
  }

  // Update Auto-saved Indicator
  const saveBadge = document.getElementById('attendance-auto-save-badge');
  if (saveBadge) {
    if (guardStatus.isBreak) {
      saveBadge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold shadow-2xs';
      saveBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-500"></span><span>ช่วงปิดภาคเรียน</span>`;
    } else if (isLockedDay) {
      saveBadge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 text-xs font-medium shadow-2xs';
      saveBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-slate-400"></span><span>ล็อกคาบเรียน</span>`;
    } else if (hasSavedDay) {
      saveBadge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-2xs transition-all';
      saveBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span><span>บันทึกแล้วอัตโนมัติ</span>`;
    } else {
      saveBadge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 text-xs font-medium shadow-2xs transition-all';
      saveBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400"></span><span>รอเช็คชื่อ</span>`;
    }
  }

  // แจ้งเตือนคาบเรียนตกค้าง (กันลืมเช็คชื่อ)
  const missedBanner = document.getElementById('missed-attendance-banner');
  if (missedBanner) {
    const missedDates = getMissedAttendanceDates(state.currentGrade);
    if (missedDates.length > 0) {
      missedBanner.className = 'bg-amber-50 border border-amber-200/90 rounded-2xl p-4 text-amber-900 shadow-xs mb-3';
      missedBanner.innerHTML = `
        <div class="flex items-start gap-3">
          <span class="text-xl shrink-0">⚠️</span>
          <div class="flex-1">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="font-bold text-sm text-amber-900">แจ้งเตือนคาบเรียนตกค้าง (กันลืมเช็คชื่อ)</span>
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-800">
                ค้างเช็คชื่อ ${missedDates.length} คาบ
              </span>
            </div>
            <p class="text-xs text-amber-800 mt-1">
              มีคาบสอนตามตารางที่ผ่านมาแต่ยังไม่ได้บันทึกการเช็คชื่อสำหรับชั้น ${state.currentGrade} คลิกวันที่ด้านล่างเพื่อไปบันทึกได้ทันที:
            </p>
            <div class="flex flex-wrap items-center gap-1.5 mt-2.5">
              ${missedDates.slice(0, 6).map(dStr => `
                <button type="button" onclick="goToAttendanceDate('${dStr}')" class="touch-target inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-white text-amber-900 border border-amber-300 rounded-lg hover:bg-amber-100 hover:border-amber-400 transition-colors shadow-2xs cursor-pointer">
                  <span>📅</span> <span>${formatDateThaiShort(dStr)}</span>
                </button>
              `).join('')}
              ${missedDates.length > 6 ? `<span class="text-xs text-amber-700 font-medium self-center pl-1">+ อีก ${missedDates.length - 6} คาบ</span>` : ''}
            </div>
          </div>
        </div>
      `;
    } else {
      missedBanner.className = 'hidden';
      missedBanner.innerHTML = '';
    }
  }

  const tbody = document.getElementById('attendance-table-body');
  if (!tbody) return;

  let countPresent = 0, countLeave = 0, countSick = 0, countAbsent = 0;
  const activeStudents = students.filter(s => s.status !== 'ย้ายออก');

  if (students.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-10 text-slate-400">ไม่พบรายชื่อนักเรียนในชั้น ${state.currentGrade}/${state.currentRoom}</td></tr>`;
  } else {
    tbody.innerHTML = students.map(student => {
      const isTransferred = student.status === 'ย้ายออก';
      let status = '';

      if (isTransferred) {
        // หากย้ายออก ให้ตัดการบันทึกเวลาเรียน
        if (dayAttendance[student.id]) {
          delete dayAttendance[student.id];
        }
      } else if (isLockedDay) {
        // วันที่ล็อก ไม่ auto-default เป็น 'มา' เพื่อป้องกันข้อมูลคลาดเคลื่อน
        status = dayAttendance[student.id] || '';
        if (status === 'มา') countPresent++;
        else if (status === 'ลา') countLeave++;
        else if (status === 'ป่วย') countSick++;
        else if (status === 'ขาด') countAbsent++;
      } else {
        status = dayAttendance[student.id] || (hasSavedDay ? 'มา' : '');
        if (hasSavedDay && !dayAttendance[student.id]) {
          dayAttendance[student.id] = 'มา';
        }

        if (status === 'มา') countPresent++;
        else if (status === 'ลา') countLeave++;
        else if (status === 'ป่วย') countSick++;
        else if (status === 'ขาด') countAbsent++;
      }

      const stats1 = getStudentAttendanceStats(student.id, '1');
      const stats2 = getStudentAttendanceStats(student.id, '2');
      const statsAll = getStudentAttendanceStats(student.id, 'all');

      const isAtRisk = !isTransferred && ((stats1.hasRecords && stats1.isAtRisk) || 
                       (stats2.hasRecords && stats2.isAtRisk) || 
                       (statsAll.hasRecords && statsAll.isAtRisk));

      const t1Display = isTransferred ? '-' : (stats1.hasRecords ? `${stats1.percentage}%` : '-');
      const t2Display = isTransferred ? '-' : (stats2.hasRecords ? `${stats2.percentage}%` : '-');
      const allDisplay = isTransferred ? '-' : (statsAll.hasRecords ? `${statsAll.percentage}%` : '-');

      return `
        <tr class="border-b border-slate-100 hover:bg-slate-50/70 transition-colors ${isTransferred ? 'bg-slate-50/40 opacity-75' : ''}">
          <td class="py-3 px-3 font-semibold text-slate-700 text-center w-14">${student.student_no}</td>
          <td class="py-3 px-4">
            <div class="flex items-center gap-2">
              <span class="font-medium ${isTransferred ? 'line-through text-slate-500' : 'text-slate-900'}">${student.name}</span>
              ${isTransferred ? `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-300">🚫 ย้ายออก</span>` : ''}
              ${isAtRisk ? `<span class="badge-ms" title="เวลาเรียนต่ำกว่า 80% (ติด มส.)">มส.</span>` : ''}
            </div>
            <!-- Mobile Percentage Summary (< sm screens) -->
            <div class="text-xs text-slate-500 mt-1 sm:hidden flex flex-wrap items-center gap-1.5">
              <span>เทอม 1: <strong class="${stats1.hasRecords && stats1.isAtRisk ? 'text-rose-600 font-bold' : 'text-blue-700 font-semibold'}">${t1Display}</strong></span>
              <span>•</span>
              <span>เทอม 2: <strong class="${stats2.hasRecords && stats2.isAtRisk ? 'text-rose-600 font-bold' : 'text-emerald-700 font-semibold'}">${t2Display}</strong></span>
              <span>•</span>
              <span>ทั้งปี: <strong class="${statsAll.hasRecords && statsAll.isAtRisk ? 'text-rose-600 font-bold' : 'text-indigo-700 font-semibold'}">${allDisplay}</strong></span>
            </div>
          </td>
          <!-- ร้อยละ เทอม 1 (%) -->
          <td class="py-3 px-2 text-center hidden md:table-cell">
            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
              isTransferred ? 'bg-slate-100 text-slate-500 border border-slate-200' :
              stats1.hasRecords && stats1.isAtRisk 
                ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                : 'bg-blue-50 text-blue-700 border border-blue-200'
            }">
              ${t1Display}
            </span>
          </td>
          <!-- ร้อยละ เทอม 2 (%) -->
          <td class="py-3 px-2 text-center hidden md:table-cell">
            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
              isTransferred ? 'bg-slate-100 text-slate-500 border border-slate-200' :
              stats2.hasRecords && stats2.isAtRisk 
                ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            }">
              ${t2Display}
            </span>
          </td>
          <!-- ร้อยละ ทั้งปีการศึกษา (%) -->
          <td class="py-3 px-2 text-center hidden sm:table-cell">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
              isTransferred ? 'bg-slate-100 text-slate-500 border border-slate-200' :
              statsAll.hasRecords && statsAll.isAtRisk 
                ? 'bg-rose-50 text-rose-700 border border-rose-300' 
                : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
            }">
              ${allDisplay}
            </span>
          </td>
          <td class="py-3 px-4 text-right">
            ${isTransferred ? `
              <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-400 bg-slate-100 border border-slate-200 cursor-not-allowed" title="นักเรียนย้ายออกแล้ว ไม่สามารถเช็คชื่อได้">
                🚫 ย้ายออก (งดเช็คชื่อ)
              </span>
            ` : isLockedDay ? `
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-400 bg-slate-100 border border-slate-200 select-none cursor-not-allowed" title="${guardStatus.isHoliday ? 'วันหยุดตามปฏิทิน ระบบล็อกการเช็คชื่อ' : 'ไม่มีคาบสอนตามตาราง ระบบล็อกการเช็คชื่อ'}">
                🔒 ${guardStatus.isHoliday ? 'วันหยุด (ล็อก)' : 'ไม่มีคาบ (ล็อก)'}
              </span>
            ` : `
              <div class="inline-flex items-center p-1 bg-slate-100 rounded-xl gap-1 border border-slate-200">
                <button onclick="setAttendanceStatus('${student.id}', 'มา')" class="touch-target px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${status === 'มา' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-600 hover:bg-white'}">มา</button>
                <button onclick="setAttendanceStatus('${student.id}', 'ลา')" class="touch-target px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${status === 'ลา' ? 'bg-amber-400 text-slate-900 shadow-sm' : 'text-slate-600 hover:bg-white'}">ลา</button>
                <button onclick="setAttendanceStatus('${student.id}', 'ป่วย')" class="touch-target px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${status === 'ป่วย' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-600 hover:bg-white'}">ป่วย</button>
                <button onclick="setAttendanceStatus('${student.id}', 'ขาด')" class="touch-target px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${status === 'ขาด' ? 'bg-rose-500 text-white shadow-sm' : 'text-slate-600 hover:bg-white'}">ขาด</button>
              </div>
            `}
          </td>
        </tr>
      `;
    }).join('');
  }

  const cp = document.getElementById('count-present');
  const cl = document.getElementById('count-leave');
  const cs = document.getElementById('count-sick');
  const ca = document.getElementById('count-absent');
  const ct = document.getElementById('count-total');
  if (cp) cp.textContent = countPresent;
  if (cl) cl.textContent = countLeave;
  if (cs) cs.textContent = countSick;
  if (ca) ca.textContent = countAbsent;
  if (ct) ct.textContent = activeStudents.length;
}

window.setAttendanceStatus = async function(studentId, newStatus) {
  const guardStatus = checkDayStatus(state.selectedDate, state.currentGrade);
  if (guardStatus.isHoliday || guardStatus.isNoTeaching || guardStatus.isBreak) {
    const reason = guardStatus.isBreak
      ? `🔒 ระบบล็อกการเช็คชื่อ: ${guardStatus.reason} (การเช็คชื่อต้องอยู่ในช่วงเปิดเทอม)`
      : (guardStatus.isHoliday 
        ? `🔒 ระบบล็อกการเช็คชื่อ: วันนี้เป็นวันหยุด (${guardStatus.name})` 
        : `🔒 ระบบล็อกการเช็คชื่อ: ${guardStatus.reason || `ชั้น ${state.currentGrade} ไม่มีคาบสอนในวันนี้`}`);
    showNotification(reason);
    return;
  }
  const student = (state.students || []).find(s => s.id === studentId);
  if (student && student.status === 'ย้ายออก') {
    showNotification('🚫 นักเรียนมีสถานะ "ย้ายออก" ไม่สามารถบันทึกเวลาเรียนได้');
    return;
  }
  const date = state.selectedDate;
  if (!state.attendance[date] || Object.keys(state.attendance[date]).length === 0) {
    state.attendance[date] = {};
    const students = getFilteredStudents();
    students.forEach(s => {
      if (s.status !== 'ย้ายออก') {
        state.attendance[date][s.id] = 'มา';
      }
    });
  }
  state.attendance[date][studentId] = newStatus;
  saveLocalData();
  renderAttendanceView();
};
window.markAllAttendance = async function(status) {
  const guardStatus = checkDayStatus(state.selectedDate, state.currentGrade);
  if (guardStatus.isHoliday || guardStatus.isNoTeaching || guardStatus.isBreak) {
    const reason = guardStatus.isBreak
      ? `🔒 ระบบล็อกการเช็คชื่อ: ${guardStatus.reason} (การเช็คชื่อต้องอยู่ในช่วงเปิดเทอม)`
      : (guardStatus.isHoliday 
        ? `🔒 ระบบล็อกการเช็คชื่อ: วันนี้เป็นวันหยุด (${guardStatus.name})` 
        : `🔒 ระบบล็อกการเช็คชื่อ: ${guardStatus.reason || `ชั้น ${state.currentGrade} ไม่มีคาบสอนในวันนี้`}`);
    showNotification(reason);
    return;
  }
  const students = getFilteredStudents();
  const date = state.selectedDate;
  if (!state.attendance[date]) state.attendance[date] = {};
  students.forEach(s => {
    if (s.status !== 'ย้ายออก') {
      state.attendance[date][s.id] = status;
    } else {
      delete state.attendance[date][s.id];
    }
  });
  saveLocalData();
  renderAttendanceView();
  showNotification(`บันทึกสถานะ "${status}" ให้นักเรียนที่กำลังศึกษาเรียบร้อยแล้ว`);
};
window.clearDailyAttendance = function() {
  const date = state.selectedDate;
  if (!state.attendance[date] || Object.keys(state.attendance[date]).length === 0) {
    showNotification('วันที่เลือกยังไม่มีข้อมูลการเช็คชื่อ');
    return;
  }
  if (!confirm(`คุณต้องการล้างข้อมูลการเช็คชื่อของวันที่ ${formatDateThaiShort(date)} หรือไม่?`)) return;
  delete state.attendance[date];
  saveLocalData();
  renderAttendanceView();
  showNotification(`ล้างข้อมูลการเช็คชื่อวันที่ ${formatDateThaiShort(date)} เรียบร้อย`);
};
window.simulateMissedAttendance = function() {
  const currentGrade = state.currentGrade || 'ป.5';
  const pastDates = getTeachingDatesForPeriod('1', currentGrade);
  if (pastDates.length < 2) {
    showNotification('ไม่พบประวัติคาบสอนสำหรับจำลอง');
    return;
  }
  const targetDates = pastDates.slice(-2);
  targetDates.forEach(dStr => {
    delete state.attendance[dStr];
  });
  saveLocalData();
  renderAttendanceView();
  showNotification(`จำลองลืมเช็คชื่อ 2 วัน (${targetDates.map(formatDateThaiShort).join(', ')}) เรียบร้อย แถบแจ้งเตือนสีส้มจะปรากฏขึ้นแล้วครับ`);
};
// ------------------------------------------
// Sub-Tab 2: รายงานเวลาเรียนประจำเดือน (Monthly Matrix Grid - Image 1)
// ------------------------------------------
window.handleMonthlyFilterChange = function() {
  const monthSelect = document.getElementById('monthly-att-month-select');
  const gradeSelect = document.getElementById('monthly-att-grade-select');
  if (monthSelect) state.selectedMonthlyMonth = monthSelect.value;
  if (gradeSelect && gradeSelect.value) {
    if (gradeSelect.value !== state.currentGrade) {
      window.handleGlobalClassroomChange(gradeSelect.value);
      return;
    }
  }
  renderMonthlyAttendanceTab();
};
function renderMonthlyAttendanceTab() {
  const container = document.getElementById('monthly-matrix-container');
  const monthSelect = document.getElementById('monthly-att-month-select');
  const gradeSelect = document.getElementById('monthly-att-grade-select');
  if (!container) return;

  const currentGrade = state.currentGrade || state.selectedMonthlyGrade || 'ป.5';
  state.selectedMonthlyGrade = currentGrade;
  const currentMonthStr = state.selectedMonthlyMonth || '2026-09';

  // 1. Populate Grade Selector (Multi-grade dynamic support)
  if (gradeSelect) {
    if (gradeSelect.tagName === 'SELECT') {
      const grades = getAvailableGrades();
      gradeSelect.innerHTML = grades.map(g => `<option value="${g}" ${g === currentGrade ? 'selected' : ''}>ชั้น ${g}</option>`).join('');
    }
    gradeSelect.value = currentGrade;
  }
  const monthlyRoomDisplay = document.getElementById('monthly-att-room-display');
  if (monthlyRoomDisplay) {
    monthlyRoomDisplay.textContent = `ห้อง ${currentGrade}`;
  }

  // 2. Populate Month Selector (Academic year months May 2569 - March 2570)
  if (monthSelect && monthSelect.options.length === 0) {
    const academicMonths = [
      { key: '2026-05', label: 'พฤษภาคม 2569' },
      { key: '2026-06', label: 'มิถุนายน 2569' },
      { key: '2026-07', label: 'กรกฎาคม 2569' },
      { key: '2026-08', label: 'สิงหาคม 2569' },
      { key: '2026-09', label: 'กันยายน 2569' },
      { key: '2026-10', label: 'ตุลาคม 2569' },
      { key: '2026-11', label: 'พฤศจิกายน 2569' },
      { key: '2026-12', label: 'ธันวาคม 2569' },
      { key: '2027-01', label: 'มกราคม 2570' },
      { key: '2027-02', label: 'กุมภาพันธ์ 2570' },
      { key: '2027-03', label: 'มีนาคม 2570' }
    ];
    monthSelect.innerHTML = academicMonths.map(m => `<option value="${m.key}" ${m.key === currentMonthStr ? 'selected' : ''}>${m.label}</option>`).join('');
  } else if (monthSelect) {
    monthSelect.value = currentMonthStr;
  }

  // 3. Compute Days in Month
  const [yearStr, monthStr] = currentMonthStr.split('-');
  const year = parseInt(yearStr);
  const month = parseInt(monthStr);
  const daysInMonth = new Date(year, month, 0).getDate();

  const students = (state.students || [])
    .filter(s => isStudentInClassroom(s, { grade: currentGrade, name: currentGrade, room: state.currentRoom }))
    .sort((a, b) => Number(a.student_no) - Number(b.student_no));

  const daysMeta = [];
  let totalTaughtPeriods = 0;

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${yearStr}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const dateObj = new Date(year, month - 1, d);
    const dayOfWeek = dateObj.getDay();
    const dayShort = THAI_DAY_SHORT_LABELS[dayOfWeek];
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    const guardStatus = checkDayStatus(dateStr, currentGrade);

    let isTeachingDay = false;
    let cellType = 'normal';
    let title = '';

    if (guardStatus.isMakeup) {
      isTeachingDay = true;
      cellType = 'makeup';
      title = `วันสอนชดเชย (ใช้ตาราง ${guardStatus.useDaySchedule})`;
    } else if (isWeekend) {
      cellType = 'weekend';
      title = 'วันหยุดสุดสัปดาห์';
    } else if (guardStatus.isHoliday) {
      cellType = 'holiday';
      title = `วันหยุด: ${guardStatus.name}`;
    } else if (guardStatus.isNoTeaching) {
      cellType = 'noTeaching';
      title = `ไม่มีคาบสอน (${guardStatus.dayOfWeek})`;
    } else {
      isTeachingDay = true;
      title = `วันที่ ${d} (${dayShort}) - คาบเรียนปกติ`;
    }

    if (isTeachingDay) {
      totalTaughtPeriods++;
    }

    daysMeta.push({ day: d, dateStr, dayShort, isWeekend, isTeachingDay, cellType, title });
  }

  // 4. Calculate Aggregate Stats
  let totalPresentCount = 0;
  let totalAbsentCount = 0;
  let totalLeaveCount = 0;
  let totalSickCount = 0;

  const activeStudents = students.filter(s => s.status !== 'ย้ายออก');

  const studentSummaries = students.map(student => {
    const isTransferred = student.status === 'ย้ายออก';
    let p = 0, a = 0, l = 0, s = 0;
    if (!isTransferred) {
      daysMeta.forEach(dm => {
        if (dm.isTeachingDay) {
          const record = (state.attendance[dm.dateStr] && state.attendance[dm.dateStr][student.id]) || 'มา';
          if (record === 'มา') p++;
          else if (record === 'ขาด') a++;
          else if (record === 'ลา') l++;
          else if (record === 'ป่วย') s++;
        }
      });

      totalPresentCount += p;
      totalAbsentCount += a;
      totalLeaveCount += l;
      totalSickCount += s;
    }

    return { student, isTransferred, present: p, absent: a, leave: l, sick: s };
  });

  const totalPossibleSlots = totalTaughtPeriods * activeStudents.length;
  const avgRate = totalPossibleSlots > 0 ? Math.round((totalPresentCount / totalPossibleSlots) * 100) : 0;

  // Update Stat Cards (Matching Image 1)
  const elPeriods = document.getElementById('monthly-stat-periods');
  const elRate = document.getElementById('monthly-stat-rate');
  const elAbsent = document.getElementById('monthly-stat-absent');
  const elLeave = document.getElementById('monthly-stat-leave');
  const elSick = document.getElementById('monthly-stat-sick');

  if (elPeriods) elPeriods.textContent = `${totalTaughtPeriods} คาบ`;
  if (elRate) elRate.textContent = `${avgRate}%`;
  if (elAbsent) elAbsent.textContent = `${totalAbsentCount} ครั้ง`;
  if (elLeave) elLeave.textContent = `${totalLeaveCount} ครั้ง`;
  if (elSick) elSick.textContent = `${totalSickCount} ครั้ง`;

  // 5. Render Full Matrix Grid Table
  let html = `
    <table class="w-full text-center border-collapse text-xs select-none">
      <thead>
        <tr class="bg-slate-100/90 text-slate-700 border-b border-slate-200">
          <th class="matrix-col-student py-2 px-3 text-left font-bold text-slate-800 border-r border-slate-200 min-w-[170px] bg-slate-100">
            ชื่อ - นามสกุล
          </th>
          ${daysMeta.map(dm => `
            <th class="matrix-cell font-bold py-2 border-r border-slate-200/80 ${dm.isWeekend ? 'bg-slate-200/50 text-slate-400' : 'text-slate-800'}" title="${dm.title}">
              ${dm.day}
            </th>
          `).join('')}
          <th class="py-2 px-2.5 font-bold text-emerald-700 bg-emerald-50/60 border-r border-slate-200 w-11">มา</th>
          <th class="py-2 px-2.5 font-bold text-rose-700 bg-rose-50/60 border-r border-slate-200 w-11">ขาด</th>
          <th class="py-2 px-2.5 font-bold text-amber-700 bg-amber-50/60 border-r border-slate-200 w-11">ลา</th>
          <th class="py-2 px-2.5 font-bold text-sky-700 bg-sky-50/60 w-11">ป่วย</th>
        </tr>
        <tr class="bg-slate-50 text-[10px] font-semibold text-slate-500 border-b border-slate-200">
          <th class="matrix-col-student py-1 px-3 text-left border-r border-slate-200 bg-slate-50 text-slate-400">
            ลำดับที่ / เลขที่
          </th>
          ${daysMeta.map(dm => {
            let colorCls = 'text-slate-600';
            if (dm.isWeekend) colorCls = 'text-slate-400';
            else if (dm.dayShort === 'จ') colorCls = 'text-amber-600 font-bold';
            else if (dm.dayShort === 'อ') colorCls = 'text-pink-600 font-bold';
            else if (dm.dayShort === 'พ') colorCls = 'text-emerald-600 font-bold';
            else if (dm.dayShort === 'พฤ') colorCls = 'text-orange-600 font-bold';
            else if (dm.dayShort === 'ศ') colorCls = 'text-sky-600 font-bold';
            return `
              <th class="matrix-cell py-1 border-r border-slate-200/60 ${colorCls} ${dm.isWeekend ? 'bg-slate-100/50' : ''}">
                ${dm.dayShort}
              </th>
            `;
          }).join('')}
          <th class="border-r border-slate-200 bg-emerald-50/40"></th>
          <th class="border-r border-slate-200 bg-rose-50/40"></th>
          <th class="border-r border-slate-200 bg-amber-50/40"></th>
          <th class="bg-sky-50/40"></th>
        </tr>
      </thead>
      <tbody>
  `;

  if (studentSummaries.length === 0) {
    html += `
      <tr>
        <td colspan="${daysMeta.length + 5}" class="py-12 text-center text-slate-400">
          ไม่พบรายชื่อนักเรียนในชั้น ${currentGrade}
        </td>
      </tr>
    `;
  } else {
    studentSummaries.forEach(({ student, isTransferred, present, absent, leave, sick }) => {
      html += `
        <tr class="border-b border-slate-100 hover:bg-blue-50/30 transition-colors ${isTransferred ? 'bg-slate-50/40 opacity-75' : ''}">
          <td class="matrix-col-student py-2.5 px-3 text-left font-medium text-slate-800 border-r border-slate-200 text-xs flex items-center gap-1.5 whitespace-nowrap bg-white">
            <span class="inline-block w-5 font-bold text-slate-400 text-center">${student.student_no}</span>
            <span class="truncate max-w-[140px] font-semibold ${isTransferred ? 'line-through text-slate-500' : 'text-slate-900'}" title="${student.name}">${student.name}</span>
            ${isTransferred ? `<span class="text-[9px] px-1 py-0.2 rounded bg-slate-100 text-slate-600 font-bold border border-slate-300 shrink-0">ย้ายออก</span>` : ''}
          </td>
      `;

      daysMeta.forEach(dm => {
        if (dm.isWeekend) {
          html += `<td class="matrix-cell matrix-cell-weekend" title="${dm.title}">-</td>`;
        } else if (dm.cellType === 'holiday') {
          html += `<td class="matrix-cell matrix-cell-blocked bg-amber-50/70 text-amber-700" title="${dm.title}">⛱️</td>`;
        } else if (dm.cellType === 'noTeaching') {
          html += `<td class="matrix-cell matrix-cell-blocked" title="${dm.title}">🚫</td>`;
        } else if (isTransferred) {
          html += `<td class="matrix-cell text-slate-300 bg-slate-50/50 cursor-not-allowed" title="${student.name} (ย้ายออกแล้ว)">-</td>`;
        } else {
          const status = (state.attendance[dm.dateStr] && state.attendance[dm.dateStr][student.id]) || 'มา';
          let symbol = '';
          let badgeColor = '';
          if (status === 'มา') {
            symbol = '✓';
            badgeColor = 'text-emerald-600 font-bold';
          } else if (status === 'ขาด') {
            symbol = 'ข';
            badgeColor = 'text-rose-600 font-bold';
          } else if (status === 'ลา') {
            symbol = 'ล';
            badgeColor = 'text-amber-600 font-bold';
          } else if (status === 'ป่วย') {
            symbol = 'ป';
            badgeColor = 'text-sky-600 font-bold';
          }

          html += `
            <td 
              class="matrix-cell ${badgeColor} hover:bg-blue-100/70 active:scale-95 transition-all cursor-pointer" 
              onclick="toggleMonthlyCellStatus('${dm.dateStr}', '${student.id}')"
              title="แตะเพื่อสลับสถานะ: ${student.name} วันที่ ${dm.day} (${status})"
            >
              ${symbol}
            </td>
          `;
        }
      });

      html += `
          <td class="py-2 px-2.5 font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-emerald-700'} bg-emerald-50/30 border-r border-slate-200">${isTransferred ? '-' : present}</td>
          <td class="py-2 px-2.5 font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-rose-700'} bg-rose-50/30 border-r border-slate-200">${isTransferred ? '-' : absent}</td>
          <td class="py-2 px-2.5 font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-amber-700'} bg-amber-50/30 border-r border-slate-200">${isTransferred ? '-' : leave}</td>
          <td class="py-2 px-2.5 font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-sky-700'} bg-sky-50/30">${isTransferred ? '-' : sick}</td>
        </tr>
      `;
    });
  }

  html += `
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}

window.toggleMonthlyCellStatus = function(dateStr, studentId) {
  const guardStatus = checkDayStatus(dateStr, state.currentGrade);
  if (guardStatus.isHoliday || guardStatus.isNoTeaching) {
    const reason = guardStatus.isHoliday ? `วันที่เลือกเป็นวันหยุด (${guardStatus.name})` : (guardStatus.reason || `ไม่มีคาบสอนในวันนี้`);
    showNotification(`🔒 ระบบล็อกการเช็คชื่อ: ${reason}`);
    return;
  }
  const student = (state.students || []).find(s => s.id === studentId);
  if (student && student.status === 'ย้ายออก') {
    showNotification('🚫 นักเรียนมีสถานะ "ย้ายออก" ไม่สามารถบันทึกเวลาเรียนได้');
    return;
  }
  if (!state.attendance[dateStr]) state.attendance[dateStr] = {};
  const current = state.attendance[dateStr][studentId] || 'มา';
  
  let next = 'มา';
  if (current === 'มา') next = 'ขาด';
  else if (current === 'ขาด') next = 'ลา';
  else if (current === 'ลา') next = 'ป่วย';
  else if (current === 'ป่วย') next = 'มา';

  state.attendance[dateStr][studentId] = next;
  saveLocalData();
  renderMonthlyAttendanceTab();
};
// ------------------------------------------
// Sub-Tab 3: รายงานผลเวลาเรียนตามภาคเรียน (ปพ.5 - Image 2)
// ------------------------------------------

/**
 * คำนวณเวลาเรียนเต็มตามหลักสูตร (จำนวนคาบสอนตามโครงสร้างรายวิชา)
 * - วิชาประวัติศาสตร์: 40 คาบ/ปี (ภาคเรียนละ 20 คาบ)
 * - วิชาสังคมศึกษาฯ: 80 คาบ/ปี (ภาคเรียนละ 40 คาบ)
 */
function getCurriculumHoursForPeriod(term = 'all') {
  const cur = getActiveCurriculum();
  const yearly = Number(cur.hoursPerYear) || 40;
  if (term === '1') {
    return Math.round(yearly / 2);
  }
  if (term === '2') {
    return yearly - Math.round(yearly / 2);
  }
  return yearly;
}

function getTeachingDatesForPeriod(term, grade) {
  const s = state.settings || DEFAULT_SETTINGS;
  const list = [];
  
  function scanRange(startStr, endStr) {
    let d = new Date(startStr);
    const end = new Date(endStr);
    while (d <= end) {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const dateStr = `${y}-${m}-${day}`;
      const dayOfWeek = d.getDay();
      
      const guardStatus = checkDayStatus(dateStr, grade);
      if (guardStatus.isMakeup) {
        list.push(dateStr);
      } else if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        if (!guardStatus.isHoliday && !guardStatus.isNoTeaching) {
          list.push(dateStr);
        }
      }
      d.setDate(d.getDate() + 1);
    }
  }

  if (term === 'all' || term === 'year') {
    scanRange(s.term1Start || '2026-05-18', s.term1End || '2026-10-12');
    scanRange(s.term2Start || '2026-11-02', s.term2End || '2027-03-31');
  } else if (term === '2') {
    scanRange(s.term2Start || '2026-11-02', s.term2End || '2027-03-31');
  } else {
    scanRange(s.term1Start || '2026-05-18', s.term1End || '2026-10-12');
  }

  return list;
}

function formatDateThaiShort(dateStr) {
  if (!dateStr) return '';
  const parts = String(dateStr).split('-');
  if (parts.length === 3) {
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1;
    const d = parseInt(parts[2], 10);
    const thaiMonthsShort = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const thaiYearShort = String((y + 543) % 100).padStart(2, '0');
    return `${d} ${thaiMonthsShort[m]} ${thaiYearShort}`;
  }
  return dateStr;
}

function getMissedAttendanceDates(grade) {
  const currentGrade = grade || state.currentGrade || 'ป.5';
  const todayStr = new Date().toISOString().split('T')[0];
  const allTeachingDates = getTeachingDatesForPeriod('all', currentGrade);
  
  // ตรวจสอบเฉพาะวันที่ผ่านมาแล้วถึงปัจจุบัน
  const pastTeachingDates = allTeachingDates.filter(dStr => dStr <= todayStr);
  
  // หาวันที่ยังไม่มีการบันทึกการเช็คชื่อแม้แต่คนเดียว
  const missedDates = pastTeachingDates.filter(dStr => {
    const rec = state.attendance[dStr];
    return !rec || Object.keys(rec).length === 0;
  });
  
  return missedDates;
}

window.goToAttendanceDate = function(dateStr) {
  if (!dateStr) return;
  state.selectedDate = dateStr;
  const dateInp = document.getElementById('attendance-date-input');
  if (dateInp) dateInp.value = dateStr;
  renderDailyAttendanceTab();
  const thaiInfo = formatThaiDateFullDay(dateStr);
  showNotification(`เปลี่ยนไปวันที่ ${thaiInfo.day} ${thaiInfo.month} ${thaiInfo.year} (${thaiInfo.dayName}) เพื่อเช็คชื่อแล้ว`);
};
function renderSemesterAttendanceTab() {
  const tbody = document.getElementById('semester-att-table-body');
  const thead = document.getElementById('sem-att-table-head');
  const gradeSelect = document.getElementById('sem-att-grade-select');
  const termSelect = document.getElementById('sem-att-semester-select');
  if (!tbody) return;

  const currentGrade = state.currentGrade || state.selectedSemesterGrade || 'ป.5';
  const currentTerm = (termSelect && termSelect.value) || state.selectedSemesterTerm || state.currentSemester || 'all';

  state.selectedSemesterGrade = currentGrade;
  state.selectedSemesterTerm = currentTerm;
  state.currentGrade = currentGrade;

  // Sync Global Classroom Selector in Header
  const globalSel = document.getElementById('global-classroom-selector');
  if (globalSel && globalSel.value !== currentGrade) {
    globalSel.value = currentGrade;
  }
  updateSidebarClassroomBadge();

  if (gradeSelect) {
    if (gradeSelect.tagName === 'SELECT') {
      const grades = getAvailableGrades();
      gradeSelect.innerHTML = grades.map(g => `<option value="${g}" ${g === currentGrade ? 'selected' : ''}>ชั้น ${g}</option>`).join('');
    }
    gradeSelect.value = currentGrade;
  }
  const semRoomDisplay = document.getElementById('sem-att-room-display');
  if (semRoomDisplay) {
    semRoomDisplay.textContent = `ห้อง ${currentGrade}`;
  }

  if (termSelect) termSelect.value = currentTerm;

  const isAllYear = (currentTerm === 'all' || currentTerm === 'year');
  const periodLabel = isAllYear ? 'ตลอดทั้งปีการศึกษา' : `ภาคเรียนที่ ${currentTerm}`;

  // เวลาเรียนเต็มตามการสอนจริง (สูตร: วันที่มีคาบสอนจริงตามปฏิทิน - วันหยุด - วันที่งดสอน + ชดเชย)
  const teachingDates = getTeachingDatesForPeriod(currentTerm, currentGrade);
  const teachingDatesT1 = getTeachingDatesForPeriod('1', currentGrade);
  const teachingDatesT2 = getTeachingDatesForPeriod('2', currentGrade);
  const totalTeachingHours = teachingDates.length;

  // คำนวณจำนวนคาบที่มีการบันทึกการสอนจริงในช่วงเวลานี้
  const actualTaughtSessions = teachingDates.filter(dStr => {
    return state.attendance[dStr] && Object.keys(state.attendance[dStr]).length > 0;
  }).length;
  const unrecordedCount = Math.max(0, totalTeachingHours - actualTaughtSessions);
  const isCompleted = actualTaughtSessions >= totalTeachingHours && totalTeachingHours > 0;

  const elHoursLabel = document.getElementById('sem-stat-hours-label');
  if (elHoursLabel) {
    elHoursLabel.textContent = isAllYear ? 'เวลาเรียนเต็ม (ทั้งปีการศึกษา)' : `เวลาเรียนเต็ม (ภาคเรียนที่ ${currentTerm})`;
  }
  const elHours = document.getElementById('sem-stat-total-hours');
  if (elHours) {
    elHours.innerHTML = `
      <span>${totalTeachingHours} คาบ</span>
      <span class="block text-xs font-semibold ${isCompleted ? 'text-emerald-600' : 'text-amber-600'} mt-1">
        บันทึกแล้ว ${actualTaughtSessions} / ${totalTeachingHours} คาบ ${unrecordedCount > 0 ? `(⚠️ ค้างเช็คชื่อ ${unrecordedCount} คาบ)` : '✅ บันทึกครบถ้วน'}
      </span>
    `;
  }

  const elTableTitle = document.getElementById('sem-att-table-title');
  if (elTableTitle) elTableTitle.innerHTML = `<span>📊</span> <span>ผลการเรียนรวม / สถิติเวลาเรียน (${periodLabel})</span>`;

  const elTableSubtitle = document.getElementById('sem-att-table-subtitle');
  if (elTableSubtitle) {
    elTableSubtitle.textContent = `เวลาเรียนเต็ม ${totalTeachingHours} คาบ (บันทึกแล้ว ${actualTaughtSessions} คาบ)`;
  }

  // Dynamic Table Headers for Semester vs All Year
  if (thead) {
    if (isAllYear) {
      thead.innerHTML = `
        <tr class="bg-slate-100/80 text-xs font-bold text-slate-600 border-b border-slate-200">
          <th class="py-3 px-3 text-center w-14">เลขที่</th>
          <th class="py-3 px-4 min-w-[160px]">ชื่อ - นามสกุล</th>
          <th class="py-3 px-3 text-center text-emerald-700 w-14">มา</th>
          <th class="py-3 px-3 text-center text-rose-700 w-14">ขาด</th>
          <th class="py-3 px-3 text-center text-amber-700 w-14">ลา</th>
          <th class="py-3 px-3 text-center text-sky-700 w-14">ป่วย</th>
          <th class="py-3 px-3 text-center font-bold text-slate-800 w-20">รวมคาบ</th>
          <th class="py-3 px-3 text-center font-bold text-blue-700 w-24">เทอม 1 (%)</th>
          <th class="py-3 px-3 text-center font-bold text-emerald-700 w-24">เทอม 2 (%)</th>
          <th class="py-3 px-3 text-center font-bold text-indigo-700 w-28">ทั้งปี (%)</th>
          <th class="py-3 px-3 text-center w-24">ผลประเมิน</th>
        </tr>
      `;
    } else {
      thead.innerHTML = `
        <tr class="bg-slate-100/80 text-xs font-bold text-slate-600 border-b border-slate-200">
          <th class="py-3 px-3 text-center w-14">เลขที่</th>
          <th class="py-3 px-4 min-w-[180px]">ชื่อ - นามสกุล</th>
          <th class="py-3 px-3 text-center text-emerald-700 w-16">มา</th>
          <th class="py-3 px-3 text-center text-rose-700 w-16">ขาด</th>
          <th class="py-3 px-3 text-center text-amber-700 w-16">ลา</th>
          <th class="py-3 px-3 text-center text-sky-700 w-16">ป่วย</th>
          <th class="py-3 px-3 text-center font-bold text-slate-800 w-24">รวมคาบเรียน</th>
          <th class="py-3 px-4 text-center font-bold text-blue-700 w-28">ร้อยละ (%)</th>
          <th class="py-3 px-4 text-center w-24">ผลประเมิน</th>
        </tr>
      `;
    }
  }

  const students = (state.students || [])
    .filter(st => isStudentInClassroom(st, { grade: currentGrade, name: currentGrade, room: state.currentRoom }))
    .sort((a, b) => Number(a.student_no) - Number(b.student_no));

  const activeStudents = students.filter(s => s.status !== 'ย้ายออก');
  let normalCount = 0;
  let msCount = 0;

  const rowsHtml = students.map(student => {
    const isTransferred = student.status === 'ย้ายออก';
    let p = 0, a = 0, l = 0, s = 0;

    if (!isTransferred) {
      teachingDates.forEach(dateStr => {
        const dayRecord = state.attendance[dateStr];
        if (dayRecord && dayRecord[student.id]) {
          const status = dayRecord[student.id];
          if (status === 'มา') p++;
          else if (status === 'ขาด') a++;
          else if (status === 'ลา') l++;
          else if (status === 'ป่วย') s++;
        }
      });
    }

    const studentTotal = p + a + l + s;
    const percentageNum = studentTotal > 0 ? ((p / studentTotal) * 100) : 0;
    const percentage = isTransferred ? '-' : (studentTotal > 0 ? percentageNum.toFixed(2) + '%' : '-');

    // Calculate Term 1 isolated
    let p1 = 0, t1Count = 0;
    if (!isTransferred) {
      teachingDatesT1.forEach(dateStr => {
        const dayRecord = state.attendance[dateStr];
        if (dayRecord && dayRecord[student.id]) {
          t1Count++;
          if (dayRecord[student.id] === 'มา') p1++;
        }
      });
    }
    const pct1Num = t1Count > 0 ? ((p1 / t1Count) * 100) : 0;
    const pct1 = isTransferred ? '-' : (t1Count > 0 ? pct1Num.toFixed(2) + '%' : '-');

    // Calculate Term 2 isolated
    let p2 = 0, t2Count = 0;
    if (!isTransferred) {
      teachingDatesT2.forEach(dateStr => {
        const dayRecord = state.attendance[dateStr];
        if (dayRecord && dayRecord[student.id]) {
          t2Count++;
          if (dayRecord[student.id] === 'มา') p2++;
        }
      });
    }
    const pct2Num = t2Count > 0 ? ((p2 / t2Count) * 100) : 0;
    const pct2 = isTransferred ? '-' : (t2Count > 0 ? pct2Num.toFixed(2) + '%' : '-');

    const hasRecords = studentTotal > 0;
    const isMS = !isTransferred && hasRecords && (isAllYear ? (percentageNum < 80 || (t1Count > 0 && pct1Num < 80) || (t2Count > 0 && pct2Num < 80)) : (percentageNum < 80));

    if (!isTransferred && hasRecords) {
      if (isMS) msCount++;
      else normalCount++;
    }

    if (isAllYear) {
      return `
        <tr class="border-b border-slate-100 hover:bg-slate-50/80 transition-colors ${isTransferred ? 'bg-slate-50/40 opacity-75' : ''}">
          <td class="py-3 px-3 font-semibold text-slate-700 text-center w-14">${student.student_no}</td>
          <td class="py-3 px-4 font-semibold">
            <span class="${isTransferred ? 'line-through text-slate-500' : 'text-slate-900'}">${student.name}</span>
            ${isTransferred ? `<span class="inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-300 ml-1">ย้ายออก</span>` : ''}
          </td>
          <td class="py-3 px-3 text-center font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-emerald-600'}">${isTransferred ? '-' : p}</td>
          <td class="py-3 px-3 text-center font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-rose-600'}">${isTransferred ? '-' : a}</td>
          <td class="py-3 px-3 text-center font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-amber-600'}">${isTransferred ? '-' : l}</td>
          <td class="py-3 px-3 text-center font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-sky-600'}">${isTransferred ? '-' : s}</td>
          <td class="py-3 px-3 text-center font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-slate-800'}">${isTransferred ? '-' : studentTotal}</td>
          <td class="py-3 px-3 text-center font-semibold ${isTransferred ? 'text-slate-400 font-medium' : (t1Count > 0 && pct1Num < 80 ? 'text-rose-600 bg-rose-50/50' : 'text-blue-700')}">
            ${pct1}
          </td>
          <td class="py-3 px-3 text-center font-semibold ${isTransferred ? 'text-slate-400 font-medium' : (t2Count > 0 && pct2Num < 80 ? 'text-rose-600 bg-rose-50/50' : 'text-emerald-700')}">
            ${pct2}
          </td>
          <td class="py-3 px-3 text-center font-bold ${isTransferred ? 'text-slate-400 font-medium' : (hasRecords && percentageNum < 80 ? 'text-rose-600 bg-rose-50/50' : 'text-indigo-700')}">
            ${percentage}
          </td>
          <td class="py-3 px-3 text-center">
            ${isTransferred 
              ? `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-500 border border-slate-300">🚫 ย้ายออก</span>`
              : (!hasRecords 
                ? `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-slate-400 bg-slate-50 border border-slate-200">รอประเมิน (-)</span>`
                : (isMS 
                  ? `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-300">⚠️ มส.</span>` 
                  : `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">ปกติ</span>`
                )
              )
            }
          </td>
        </tr>
      `;
    }

    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/80 transition-colors ${isTransferred ? 'bg-slate-50/40 opacity-75' : ''}">
        <td class="py-3 px-3 font-semibold text-slate-700 text-center w-14">${student.student_no}</td>
        <td class="py-3 px-4 font-semibold">
          <span class="${isTransferred ? 'line-through text-slate-500' : 'text-slate-900'}">${student.name}</span>
          ${isTransferred ? `<span class="inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-300 ml-1">ย้ายออก</span>` : ''}
        </td>
        <td class="py-3 px-3 text-center font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-emerald-600'}">${isTransferred ? '-' : p}</td>
        <td class="py-3 px-3 text-center font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-rose-600'}">${isTransferred ? '-' : a}</td>
        <td class="py-3 px-3 text-center font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-amber-600'}">${isTransferred ? '-' : l}</td>
        <td class="py-3 px-3 text-center font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-sky-600'}">${isTransferred ? '-' : s}</td>
        <td class="py-3 px-3 text-center font-bold ${isTransferred ? 'text-slate-400 font-medium' : 'text-slate-800'}">${isTransferred ? '-' : studentTotal}</td>
        <td class="py-3 px-4 text-center font-bold ${isTransferred ? 'text-slate-400 font-medium' : (hasRecords && isMS ? 'text-rose-600 bg-rose-50/50' : 'text-slate-800')}">
          ${percentage}
        </td>
        <td class="py-3 px-4 text-center">
          ${isTransferred 
            ? `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-500 border border-slate-300">🚫 ย้ายออก</span>`
            : (!hasRecords 
              ? `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-slate-400 bg-slate-50 border border-slate-200">รอประเมิน (-)</span>`
              : (isMS 
                ? `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-300">⚠️ มส.</span>` 
                : `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">ปกติ</span>`
              )
            )
          }
        </td>
      </tr>
    `;
  }).join('');

  tbody.innerHTML = rowsHtml || `<tr><td colspan="${isAllYear ? 11 : 9}" class="py-10 text-center text-slate-400">ไม่พบรายชื่อนักเรียนในชั้น ${currentGrade}</td></tr>`;

  // Update Overview Stat Cards
  const elTotalStudents = document.getElementById('sem-stat-total-students');
  const elNormal = document.getElementById('sem-stat-normal');
  const elMs = document.getElementById('sem-stat-ms');

  if (elTotalStudents) elTotalStudents.textContent = `${activeStudents.length} คน`;
  if (elNormal) elNormal.textContent = `${normalCount} คน`;
  if (elMs) elMs.textContent = `${msCount} คน`;
}

// ------------------------------------------
// SheetJS Excel Exports for Attendance
// ------------------------------------------
window.exportMonthlyAttendanceExcel = function() {
  if (!window.XLSX) {
    alert('SheetJS Library ยังไม่โหลด');
    return;
  }

  const currentGrade = state.selectedMonthlyGrade || state.currentGrade || 'ป.5';
  const currentMonthStr = state.selectedMonthlyMonth || '2026-09';
  const [yearStr, monthStr] = currentMonthStr.split('-');
  const year = parseInt(yearStr);
  const month = parseInt(monthStr);
  const daysInMonth = new Date(year, month, 0).getDate();
  const thaiYear = year + 543;
  const monthName = THAI_MONTH_NAMES_LONG[month - 1];
  const s = state.settings || DEFAULT_SETTINGS;

  const students = state.students
    .filter(st => st.grade === currentGrade && st.room === state.currentRoom)
    .sort((a, b) => a.student_no - b.student_no);

  const daysMeta = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${yearStr}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const dateObj = new Date(year, month - 1, d);
    const dayOfWeek = dateObj.getDay();
    const dayShort = THAI_DAY_SHORT_LABELS[dayOfWeek];
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    const guardStatus = checkDayStatus(dateStr, currentGrade);

    let isTeachingDay = false;
    let cellType = 'normal';
    if (guardStatus.isMakeup) { isTeachingDay = true; cellType = 'makeup'; }
    else if (isWeekend) { cellType = 'weekend'; }
    else if (guardStatus.isHoliday) { cellType = 'holiday'; }
    else if (guardStatus.isNoTeaching) { cellType = 'noTeaching'; }
    else { isTeachingDay = true; }

    daysMeta.push({ day: d, dateStr, dayShort, isWeekend, isTeachingDay, cellType });
  }

  const header1 = ['เลขที่', 'ชื่อ - สกุล'];
  daysMeta.forEach(dm => header1.push(dm.day.toString()));
  header1.push('มา (ครั้ง)', 'ขาด (ครั้ง)', 'ลา (ครั้ง)', 'ป่วย (ครั้ง)');

  const header2 = ['', ''];
  daysMeta.forEach(dm => header2.push(dm.dayShort));
  header2.push('', '', '', '');

  const rows = students.map(student => {
    if (student.status === 'ย้ายออก') {
      const row = [student.student_no, `${student.name} (ย้ายออก)`];
      daysMeta.forEach(() => row.push('-'));
      row.push(0, 0, 0, 0);
      return row;
    }

    let p = 0, a = 0, l = 0, sk = 0;
    const row = [student.student_no, student.name];
    daysMeta.forEach(dm => {
      if (dm.isWeekend) {
        row.push('-');
      } else if (dm.cellType === 'holiday') {
        row.push('วันหยุด');
      } else if (dm.cellType === 'noTeaching') {
        row.push('ไม่มีคาบ');
      } else {
        const status = (state.attendance[dm.dateStr] && state.attendance[dm.dateStr][student.id]) || 'มา';
        if (status === 'มา') { p++; row.push('✓'); }
        else if (status === 'ขาด') { a++; row.push('ข'); }
        else if (status === 'ลา') { l++; row.push('ล'); }
        else if (status === 'ป่วย') { sk++; row.push('ป'); }
      }
    });
    row.push(p, a, l, sk);
    return row;
  });

  const wb = window.XLSX.utils.book_new();
  const wsData = [
    [`รายงานเวลาเรียนประจำเดือน ${monthName} พ.ศ. ${thaiYear}`],
    [`โรงเรียน: ${s.schoolName || 'โรงเรียน'} | ชั้น: ${currentGrade}/${state.currentRoom} | ครูผู้สอน: ${s.teacherName || '-'}`],
    [],
    header1,
    header2,
    ...rows,
    [],
    ['หมายเหตุ: ✓ = มาเรียน, ข = ขาดเรียน, ล = ลา, ป = ป่วย, - = วันหยุดสุดสัปดาห์']
  ];

  const ws = window.XLSX.utils.aoa_to_sheet(wsData);
  window.XLSX.utils.book_append_sheet(wb, ws, `เวลาเรียน_${monthStr}`);
  window.XLSX.writeFile(wb, `รายงานเวลาเรียน_${monthName}_${currentGrade.replace('.', '')}_ห้อง${state.currentRoom}.xlsx`);
  showNotification(`ดาวน์โหลดรายงานเวลาเรียนประจำเดือน ${monthName} เรียบร้อยแล้ว`);
};
window.exportSemesterAttendanceExcel = function() {
  if (!window.XLSX) {
    alert('SheetJS Library ยังไม่โหลด');
    return;
  }

  const currentGrade = state.currentGrade || state.selectedSemesterGrade || 'ป.5';
  const currentTerm = state.selectedSemesterTerm || state.currentSemester || 'all';
  const s = state.settings || DEFAULT_SETTINGS;
  const isAllYear = (currentTerm === 'all' || currentTerm === 'year');
  const periodLabel = isAllYear ? 'ตลอดทั้งปีการศึกษา' : `ภาคเรียนที่ ${currentTerm}`;
  const fileNameTerm = isAllYear ? 'ทั้งปีการศึกษา' : `เทอม${currentTerm}`;

  const curriculumFullHours = getCurriculumHoursForPeriod(currentTerm);
  const teachingDates = getTeachingDatesForPeriod(currentTerm, currentGrade);
  const teachingDatesT1 = getTeachingDatesForPeriod('1', currentGrade);
  const teachingDatesT2 = getTeachingDatesForPeriod('2', currentGrade);

  const actualTaughtSessions = teachingDates.filter(dStr => state.attendance[dStr] && Object.keys(state.attendance[dStr]).length > 0).length;

  const students = (state.students || [])
    .filter(st => isStudentInClassroom(st, { grade: currentGrade, name: currentGrade, room: state.currentRoom }))
    .sort((a, b) => Number(a.student_no) - Number(b.student_no));

  const headers = isAllYear ? [
    'เลขที่', 'รหัสนักเรียน', 'ชื่อ - สกุล', 
    'มา (คาบ)', 'ขาด (คาบ)', 'ลา (คาบ)', 'ป่วย (คาบ)', 
    'รวมคาบเรียน (คาบ)', 'ร้อยละ เทอม 1 (%)', 'ร้อยละ เทอม 2 (%)', 'ร้อยละ ทั้งปีการศึกษา (%)', 'ผลการประเมินเวลาเรียน'
  ] : [
    'เลขที่', 'รหัสนักเรียน', 'ชื่อ - สกุล', 
    'มา (คาบ)', 'ขาด (คาบ)', 'ลา (คาบ)', 'ป่วย (คาบ)', 
    'รวมคาบเรียน (คาบ)', 'ร้อยละ (%)', 'ผลการประเมินเวลาเรียน'
  ];

  const rows = students.map(student => {
    if (student.status === 'ย้ายออก') {
      const evalResult = 'ย้ายออก';
      if (isAllYear) {
        return [student.student_no, student.id, `${student.name} (ย้ายออก)`, 0, 0, 0, 0, 0, '-', '-', '-', evalResult];
      } else {
        return [student.student_no, student.id, `${student.name} (ย้ายออก)`, 0, 0, 0, 0, 0, '-', evalResult];
      }
    }

    let p = 0, a = 0, l = 0, sk = 0;
    teachingDates.forEach(dateStr => {
      const dayRecord = state.attendance[dateStr];
      if (dayRecord && dayRecord[student.id]) {
        const status = dayRecord[student.id];
        if (status === 'มา') p++;
        else if (status === 'ขาด') a++;
        else if (status === 'ลา') l++;
        else if (status === 'ป่วย') sk++;
      }
    });
    const total = p + a + l + sk;
    const hasRecords = total > 0;
    const pctNum = hasRecords ? ((p / total) * 100) : 0;
    const pct = hasRecords ? pctNum.toFixed(2) + '%' : '-';

    if (isAllYear) {
      let p1 = 0, t1Count = 0;
      teachingDatesT1.forEach(dateStr => {
        const dayRecord = state.attendance[dateStr];
        if (dayRecord && dayRecord[student.id]) {
          t1Count++;
          if (dayRecord[student.id] === 'มา') p1++;
        }
      });
      const pct1 = t1Count > 0 ? ((p1 / t1Count) * 100).toFixed(2) + '%' : '-';
      const pct1Num = t1Count > 0 ? ((p1 / t1Count) * 100) : 0;

      let p2 = 0, t2Count = 0;
      teachingDatesT2.forEach(dateStr => {
        const dayRecord = state.attendance[dateStr];
        if (dayRecord && dayRecord[student.id]) {
          t2Count++;
          if (dayRecord[student.id] === 'มา') p2++;
        }
      });
      const pct2 = t2Count > 0 ? ((p2 / t2Count) * 100).toFixed(2) + '%' : '-';
      const pct2Num = t2Count > 0 ? ((p2 / t2Count) * 100) : 0;

      const isMS = hasRecords && (pctNum < 80 || (t1Count > 0 && pct1Num < 80) || (t2Count > 0 && pct2Num < 80));
      const evalResult = !hasRecords ? 'รอการประเมิน' : (isMS ? 'มส. (เวลาเรียนไม่ถึง 80%)' : 'ผ่านเกณฑ์ (ปกติ)');

      return [student.student_no, student.id, student.name, p, a, l, sk, total, pct1, pct2, pct, evalResult];
    } else {
      const isMS = hasRecords && pctNum < 80;
      const evalResult = !hasRecords ? 'รอการประเมิน' : (isMS ? 'มส. (เวลาเรียนไม่ถึง 80%)' : 'ผ่านเกณฑ์ (ปกติ)');
      return [student.student_no, student.id, student.name, p, a, l, sk, total, pct, evalResult];
    }
  });

  const wb = window.XLSX.utils.book_new();
  const wsData = [
    [`แบบรายงานสรุปผลเวลาเรียน (${periodLabel}) (ปพ.5)`],
    [`โรงเรียน: ${s.schoolName || 'โรงเรียน'} | ช่วงเวลา: ${periodLabel} ปีการศึกษา ${s.academicYear || '2569'}`],
    [`ระดับชั้น: ${currentGrade}/${state.currentRoom} | เวลาเรียนเต็ม (ตามการสอนจริง): ${teachingDates.length} คาบ (สอนแล้ว ${actualTaughtSessions} คาบ) | วันที่ออกเอกสาร: ${new Date().toLocaleDateString('th-TH')}`],
    [],
    headers,
    ...rows,
    [],
    ['', '', 'ลงชื่อ...................................................... ครูผู้สอน', `(${s.teacherName || '......................................................'})`],
    ['', '', 'ลงชื่อ...................................................... หัวหน้าฝ่ายวิชาการ', `(${s.academicHead || '......................................................'})`],
    ['', '', 'ลงชื่อ...................................................... ผู้อำนวยการโรงเรียน', `(${s.directorName || '......................................................'})`]
  ];

  const ws = window.XLSX.utils.aoa_to_sheet(wsData);
  window.XLSX.utils.book_append_sheet(wb, ws, `สรุปเวลาเรียน_${fileNameTerm}`);
  window.XLSX.writeFile(wb, `สรุปเวลาเรียน_ปพ5_${fileNameTerm}_${currentGrade.replace('.', '')}_ห้อง${state.currentRoom}.xlsx`);
  showNotification(`ดาวน์โหลดเอกสารสรุปเวลาเรียน (${periodLabel}) สำหรับ ปพ.5 สำเร็จ`);
};
// ------------------------------------------
// View 2: Gradebook
// ------------------------------------------
window.handleGradebookSemesterChange = function(term) {
  state.gradebookSemester = term;
  updateGradebookTabButtons();
  renderGradebookView();
  const label = term === 'all' ? 'ตลอดทั้งปีการศึกษา (เต็ม 100)' : `ภาคเรียนที่ ${term} (เต็ม 50)`;
  showNotification(`สลับสมุดคะแนนเป็น "${label}" เรียบร้อย`);
};
function updateGradebookTabButtons() {
  const current = state.gradebookSemester || 'all';
  const btn1 = document.getElementById('gb-tab-term1');
  const btn2 = document.getElementById('gb-tab-term2');
  const btnAll = document.getElementById('gb-tab-all');
  
  const activeClass = 'px-3 py-1.5 rounded-lg transition-all bg-white text-blue-700 font-bold shadow-xs cursor-pointer';
  const inactiveClass = 'px-3 py-1.5 rounded-lg transition-all text-slate-600 hover:text-slate-900 cursor-pointer';

  if (btn1) btn1.className = (current === '1' ? activeClass : inactiveClass);
  if (btn2) btn2.className = (current === '2' ? activeClass : inactiveClass);
  if (btnAll) btnAll.className = (current === 'all' ? activeClass : inactiveClass);
}

function renderUnitSummaryBadge(uResult) {
  if (!uResult || uResult.totalCount === 0) return '<span class="text-slate-400 text-xs">-</span>';
  if (uResult.isComplete) {
    return `<span class="inline-flex items-center gap-1 font-bold text-xs text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-lg shadow-2xs" title="คะแนนดิบรวม ${uResult.rawScoreTotal}/${uResult.rawMaxTotal} แปลงเป็นคะแนนหน่วย ${uResult.scaledScore} / ${uResult.weight}">
      <span>⭐</span> <span>${uResult.scaledScore}</span>
    </span>`;
  }
  if (uResult.enteredCount > 0) {
    return `<span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-lg shadow-2xs" title="คะแนนดิบรวม ${uResult.rawScoreTotal}/${uResult.rawMaxTotal} (คำนวณสัดส่วนได้ ${uResult.scaledScore}) รอเก็บให้ครบอีก ${uResult.totalCount - uResult.enteredCount} ตัวชี้วัด">
      <span>รอครบ</span> <span class="text-[10px] text-amber-600">(${uResult.enteredCount}/${uResult.totalCount})</span>
    </span>`;
  }
  return '<span class="text-slate-400 text-xs">-</span>';
}

function renderGradebookView() {
  updateGradebookTabButtons();
  const students = getFilteredStudents();
  const currentSemesterFilter = state.gradebookSemester || 'all';
  const units = getActiveUnitsForSemester(currentSemesterFilter);
  const maxPossible = units.reduce((acc, u) => acc + (u.weight || 0), 0);

  const activeStudents = students.filter(s => s.status !== 'ย้ายออก');
  const gradebookClassBadge = document.getElementById('gradebook-class-badge');
  if (gradebookClassBadge) {
    const termBadgeText = currentSemesterFilter === 'all' 
      ? `ทั้งปีการศึกษา (เต็ม ${maxPossible})` 
      : `ภาคเรียนที่ ${currentSemesterFilter} (เต็ม ${maxPossible})`;
    gradebookClassBadge.textContent = `ห้อง ${state.currentGrade} • ${termBadgeText} (${activeStudents.length} คน)`;
  }

  const unitRowEl = document.getElementById('gradebook-unit-row');
  const headerRowEl = document.getElementById('gradebook-header-row');

  if (unitRowEl && headerRowEl) {
    // Row 1: Group by Units
    unitRowEl.innerHTML = `
      <th rowspan="2" class="col-sticky-1 py-2.5 px-3 text-center text-xs font-bold text-slate-700 bg-slate-100 border-b border-r border-slate-300 w-14">
        เลขที่
      </th>
      <th rowspan="2" class="col-sticky-2 py-2.5 px-4 text-left text-xs font-bold text-slate-700 bg-slate-100 border-b border-r border-slate-300 min-w-[170px]">
        ชื่อ - สกุล
      </th>
      ${units.map(u => {
        const uKey = String(u.unitNo !== undefined ? u.unitNo : u.name);
        const uIndicators = u.indicators || [];
        const hasScaledCol = (uIndicators.length > 1) || (uIndicators.length === 1 && uIndicators[0].max !== u.weight);
        const colspan = uIndicators.length + (hasScaledCol ? 1 : 0);
        return `
          <th colspan="${colspan}" class="th-hover-reveal group py-1.5 px-2.5 text-center text-xs font-bold text-slate-800 bg-slate-100 border-b border-r border-slate-300">
            <div class="flex items-center justify-center gap-1.5 flex-wrap">
              <span class="font-bold text-slate-900">${u.name}</span>
              <button 
                type="button"
                onclick="openEditUnitWeightModal('${uKey}')" 
                title="คลิกเพื่อแก้ไขน้ำหนักคะแนนของหน่วยนี้ (ตาม ปพ.5)"
                class="text-[10px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 px-1.5 py-0.5 rounded border border-blue-200 inline-flex items-center gap-1 transition-all cursor-pointer"
              >
                <span>น้ำหนัก ${u.weight} คะแนน</span>
                <span class="btn-edit-reveal text-[10px] text-blue-600">✏️</span>
              </button>
            </div>
          </th>
        `;
      }).join('')}
      <th rowspan="2" class="py-2.5 px-3 text-center text-xs font-bold text-amber-900 bg-amber-50 border-b border-r border-slate-300 min-w-[95px]">
        รวม (${maxPossible})
      </th>
      <th rowspan="2" class="py-2.5 px-3 text-center text-xs font-bold text-amber-900 bg-amber-100/70 border-b border-slate-300 min-w-[80px]">
        เกรด
      </th>
    `;

    // Row 2: Indicators + Unit Scaled Summary
    headerRowEl.innerHTML = units.map(u => {
      const uIndicators = u.indicators || [];
      const hasScaledCol = (uIndicators.length > 1) || (uIndicators.length === 1 && uIndicators[0].max !== u.weight);
      const indCols = uIndicators.map(ind => {
        const subs = getSubAssignments(ind.id);
        const subCount = subs.length;
        const subBtnText = subCount > 0 ? `📋 งานย่อย (${subCount})` : `📋 + งานย่อย`;
        const subBtnClass = subCount > 0 
          ? 'text-blue-700 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 border-blue-200' 
          : 'text-slate-600 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 border-slate-200';

        return `
        <th class="th-hover-reveal group py-2 px-2.5 text-center text-xs font-bold text-slate-700 bg-slate-50 border-b border-r border-slate-200 min-w-[135px]">
          <div class="text-[11px] font-bold text-slate-900 leading-snug">${ind.id}</div>
          <div class="text-[10px] text-slate-500 font-normal truncate max-w-[125px] mx-auto mt-0.5" title="${ind.name}">${ind.name}</div>
          <div class="mt-1 flex items-center justify-center gap-1 flex-wrap">
            <span class="${ind.type === 'ระหว่างทาง' ? 'badge-between' : (ind.type === 'ปลายทาง' ? 'badge-end' : 'badge-exam')}">${ind.type}</span>
            <button 
              type="button"
              onclick="openEditMaxScoreModal('${ind.id}')" 
              title="คลิกเพื่อแก้ไขคะแนนเต็มดิบของตัวชี้วัดนี้"
              class="text-[10px] font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 hover:border-amber-300 px-1.5 py-0.5 rounded border border-amber-200 inline-flex items-center gap-1 transition-all cursor-pointer"
            >
              <span>เต็ม ${ind.max}</span>
              <span class="btn-edit-reveal text-[9px] text-amber-700">✏️</span>
            </button>
            <button 
              type="button"
              onclick="openSubAssignmentsModal('${ind.id}')" 
              title="จัดการชิ้นงาน/การบ้านย่อยในตัวชี้วัดนี้ (${subCount} ชิ้นงาน)"
              class="text-[9px] font-bold px-1.5 py-0.5 rounded border inline-flex items-center gap-1 transition-all cursor-pointer ${subBtnClass}"
            >
              <span>${subBtnText}</span>
            </button>
          </div>
        </th>
      `;
      }).join('');

      const scaledCol = hasScaledCol ? `
        <th class="py-2 px-2 text-center text-xs font-bold text-indigo-950 bg-indigo-50/80 border-b border-r border-indigo-200 min-w-[100px]" title="แปลงคะแนนดิบตามสัดส่วนน้ำหนักคะแนนของหน่วย (${u.weight} คะแนน)">
          <div class="text-[11px] font-bold text-indigo-900">⭐ รวมแปลง</div>
          <div class="text-[10px] text-indigo-700 font-semibold">(เต็ม ${u.weight})</div>
        </th>
      ` : '';

      return indCols + scaledCol;
    }).join('');
  }

  const tbody = document.getElementById('gradebook-table-body');
  if (!tbody) return;

  if (students.length === 0) {
    tbody.innerHTML = `<tr><td colspan="20" class="text-center py-10 text-slate-400">ไม่พบนักเรียน</td></tr>`;
    return;
  }

  tbody.innerHTML = students.map(student => {
    const isTransferred = student.status === 'ย้ายออก';

    if (isTransferred) {
      return `
        <tr class="border-b border-slate-100 bg-slate-50/40 opacity-75">
          <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white border-r border-slate-200 text-sm">
            ${student.student_no}
          </td>
          <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white border-r border-slate-200 text-sm">
            <div class="flex items-center gap-1.5 truncate max-w-[160px]">
              <span class="line-through text-slate-500 truncate">${student.name}</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold border border-slate-300 shrink-0">ย้ายออก</span>
            </div>
          </td>
          ${units.map(u => {
            const uIndicators = u.indicators || [];
            const hasScaledCol = (uIndicators.length > 1) || (uIndicators.length === 1 && uIndicators[0].max !== u.weight);
            const indCells = uIndicators.map(() => `
              <td class="py-2 px-2 text-center border-r border-slate-100 bg-slate-50/50">
                <span class="text-xs text-slate-400 font-medium cursor-not-allowed" title="ย้ายออก (ไม่ประเมินคะแนน)">-</span>
              </td>
            `).join('');
            const scaledCell = hasScaledCol ? `
              <td class="py-2 px-2 text-center border-r border-slate-100 bg-slate-50/50">
                <span class="text-xs text-slate-400 font-medium">-</span>
              </td>
            ` : '';
            return indCells + scaledCell;
          }).join('')}
          <td class="py-2.5 px-3 text-center font-bold text-slate-400 bg-slate-50 border-r border-slate-200 text-sm" id="total-${student.id}">
            -
          </td>
          <td class="py-2.5 px-3 text-center text-xs font-semibold text-slate-500 bg-slate-50" id="grade-${student.id}">
            <span class="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-300">ย้ายออก</span>
          </td>
        </tr>
      `;
    }

    const studentScores = state.scores[student.id] || {};
    const calcResult = calculateStudentUnitScores(student.id, currentSemesterFilter);
    const grandTotal = calcResult.grandTotalScaled;
    const grade = calculateGrade(grandTotal, maxPossible);
    const isGradeZero = grade === '0';

    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/70 transition-colors">
        <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white border-r border-slate-200 text-sm">
          ${student.student_no}
        </td>
        <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white border-r border-slate-200 text-sm">
          <div class="truncate max-w-[160px]">${student.name}</div>
        </td>
        ${units.map(u => {
          const uKey = String(u.unitNo !== undefined ? u.unitNo : u.name);
          const uResult = calcResult.units[uKey];
          const uIndicators = u.indicators || [];
          const hasScaledCol = (uIndicators.length > 1) || (uIndicators.length === 1 && uIndicators[0].max !== u.weight);

          const indCells = uIndicators.map(ind => {
            const scoreVal = studentScores[ind.id] !== undefined ? studentScores[ind.id] : '';
            const subs = getSubAssignments(ind.id);
            const hasSubs = subs.length > 0;
            
            // Check student's pending sub assignments
            let pendingSubCount = 0;
            if (hasSubs) {
              subs.forEach(s => {
                const sc = getSubScore(student.id, ind.id, s.id);
                if (sc === '' || sc === null || sc === undefined) pendingSubCount++;
              });
            }

            if (hasSubs) {
              // Scaled from sub assignments
              const isPending = pendingSubCount > 0;
              return `
              <td class="py-2 px-2 text-center border-r border-slate-100 ${isPending ? 'bg-amber-50/40' : ''}">
                <div class="flex flex-col items-center gap-0.5">
                  <div class="relative">
                    <input 
                      type="number" 
                      min="0" 
                      max="${ind.max}" 
                      step="0.5"
                      value="${scoreVal}"
                      placeholder="0"
                      readonly
                      onclick="openSubAssignmentsModal('${ind.id}')"
                      title="คะแนนคำนวณจากงานย่อย ${subs.length} ชิ้น (คลิกเพื่อแก้ไขคะแนนงานย่อย)"
                      class="touch-target w-20 text-center font-bold py-1 px-1.5 border rounded-lg text-sm transition-all cursor-pointer ${isPending ? 'border-amber-300 bg-amber-50 text-amber-900 focus:ring-2 focus:ring-amber-400' : 'border-blue-200 bg-blue-50/60 text-blue-900 focus:ring-2 focus:ring-blue-400'}"
                    />
                  </div>
                  ${isPending ? `
                    <button 
                      type="button" 
                      onclick="openSubAssignmentsModal('${ind.id}')"
                      class="text-[9px] font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 px-1 py-0.2 rounded border border-rose-200 inline-flex items-center gap-0.5 transition cursor-pointer"
                      title="ค้างส่ง ${pendingSubCount} งาน (คลิกเพื่อบันทึกงานย่อย)"
                    >
                      <span>⚠️ ค้าง ${pendingSubCount} งาน</span>
                    </button>
                  ` : `
                    <button 
                      type="button" 
                      onclick="openSubAssignmentsModal('${ind.id}')"
                      class="text-[9px] font-semibold text-slate-500 hover:text-blue-700 hover:underline cursor-pointer"
                      title="คลิกเพื่อดูงานย่อย ${subs.length} ชิ้น"
                    >
                      (จาก ${subs.length} งาน)
                    </button>
                  `}
                </div>
              </td>
              `;
            }

            // Normal indicator input without sub assignments
            return `
              <td class="py-2 px-2 text-center border-r border-slate-100">
                <input 
                  type="number" 
                  min="0" 
                  max="${ind.max}" 
                  step="0.5"
                  value="${scoreVal}"
                  placeholder="0"
                  onchange="updateScore('${student.id}', '${ind.id}', this.value, ${ind.max})"
                  class="touch-target w-20 text-center font-medium py-1 px-1.5 border rounded-lg text-sm transition-all focus:ring-2 focus:ring-amber-400 focus:outline-none ${Number(scoreVal) > ind.max ? 'border-red-400 bg-red-50 text-red-600' : 'border-slate-200 bg-white text-slate-800'}"
                />
              </td>
            `;
          }).join('');

          const scaledCell = hasScaledCol ? `
            <td class="py-2 px-2 text-center border-r border-slate-200 bg-indigo-50/30" id="unit-scaled-${uKey}-${student.id}">
              ${renderUnitSummaryBadge(uResult)}
            </td>
          ` : '';

          return indCells + scaledCell;
        }).join('')}
        <td class="py-2.5 px-3 text-center font-bold text-slate-900 bg-amber-50/40 border-r border-slate-200 text-sm" id="total-${student.id}">
          ${grandTotal}
        </td>
        <td class="py-2.5 px-3 text-center text-sm font-bold bg-amber-50/70" id="grade-${student.id}">
          <span class="${isGradeZero ? 'grade-zero' : 'text-slate-800'}">
            ${grade}
          </span>
        </td>
      </tr>
    `;
  }).join('');

  // Update overdue tracker badge in toolbar
  updateGradebookPendingBadge();
}

window.updateScore = async function(studentId, indicatorId, value, maxVal) {
  const student = (state.students || []).find(s => s.id === studentId);
  if (student && student.status === 'ย้ายออก') {
    showNotification('นักเรียนมีสถานะ "ย้ายออก" ไม่สามารถกรอกหรือแก้ไขคะแนนได้');
    return;
  }

  let numVal = parseFloat(value);
  if (isNaN(numVal) || numVal < 0) numVal = 0;
  if (numVal > maxVal) numVal = maxVal;

  if (!state.scores[studentId]) state.scores[studentId] = {};
  state.scores[studentId][indicatorId] = numVal;
  saveLocalData();

  const currentSemesterFilter = state.gradebookSemester || 'all';
  const units = getActiveUnitsForSemester(currentSemesterFilter);
  const maxPossible = units.reduce((acc, u) => acc + (u.weight || 0), 0);
  const calcResult = calculateStudentUnitScores(studentId, currentSemesterFilter);

  // Dynamically update each unit's scaled summary cell for this student
  units.forEach(u => {
    const uKey = String(u.unitNo !== undefined ? u.unitNo : u.name);
    const uResult = calcResult.units[uKey];
    const cell = document.getElementById(`unit-scaled-${uKey}-${studentId}`);
    if (cell) {
      cell.innerHTML = renderUnitSummaryBadge(uResult);
    }
  });

  const totalEl = document.getElementById(`total-${studentId}`);
  const gradeEl = document.getElementById(`grade-${studentId}`);
  if (totalEl) totalEl.textContent = calcResult.grandTotalScaled;

  const grade = calculateGrade(calcResult.grandTotalScaled, maxPossible);
  if (gradeEl) gradeEl.innerHTML = `<span class="${grade === '0' ? 'grade-zero' : 'text-slate-800'}">${grade}</span>`;
};
// ------------------------------------------
// Indicator Max Score Modal Handlers
// ------------------------------------------
window.openEditMaxScoreModal = function(indId) {
  const currentSemesterFilter = state.gradebookSemester || 'all';
  const indicators = getActiveIndicatorsForSemester(currentSemesterFilter);
  const ind = indicators.find(i => i.id === indId);
  if (!ind) return;

  const idInput = document.getElementById('modal-max-score-ind-id');
  const defInput = document.getElementById('modal-max-score-default');
  const titleEl = document.getElementById('modal-max-score-ind-title');
  const valInput = document.getElementById('modal-max-score-input');
  const hintEl = document.getElementById('modal-max-score-default-hint');

  if (idInput) idInput.value = ind.id;
  if (defInput) defInput.value = ind.defaultMax;
  if (titleEl) titleEl.textContent = `${ind.id}: ${ind.name} (${ind.unitName || ''})`;
  if (valInput) {
    valInput.value = ind.max;
    setTimeout(() => { valInput.focus(); valInput.select(); }, 50);
  }
  if (hintEl) hintEl.textContent = `ค่าเริ่มต้นตามโครงสร้างหลักสูตร: เต็ม ${ind.defaultMax} คะแนน`;

  const modal = document.getElementById('edit-max-score-modal');
  if (modal) modal.classList.remove('hidden');
};
window.closeEditMaxScoreModal = function() {
  const modal = document.getElementById('edit-max-score-modal');
  if (modal) modal.classList.add('hidden');
};
window.saveCustomMaxScore = function() {
  const idInput = document.getElementById('modal-max-score-ind-id');
  const valInput = document.getElementById('modal-max-score-input');
  if (!idInput || !valInput) return;

  const indId = idInput.value;
  const newMax = parseFloat(valInput.value);
  if (isNaN(newMax) || newMax <= 0) {
    alert('กรุณากรอกคะแนนเต็มที่ถูกต้อง (ต้องมากกว่า 0)');
    return;
  }

  setIndicatorMaxScore(indId, newMax);
  closeEditMaxScoreModal();
  showNotification(`อัปเดตคะแนนเต็ม "${indId}" เป็น ${newMax} คะแนนเรียบร้อย`);
  renderGradebookView();
};
window.resetDefaultMaxScore = function() {
  const idInput = document.getElementById('modal-max-score-ind-id');
  const defInput = document.getElementById('modal-max-score-default');
  if (!idInput) return;

  const indId = idInput.value;
  const defVal = defInput ? defInput.value : '';
  resetIndicatorMaxScore(indId);
  closeEditMaxScoreModal();
  showNotification(`คืนค่าคะแนนเต็ม "${indId}" เป็นค่าเริ่มต้น (${defVal} คะแนน) เรียบร้อย`);
  renderGradebookView();
};
// ------------------------------------------
// Unit Weight Score Modal Handlers
// ------------------------------------------
window.openEditUnitWeightModal = function(unitKey) {
  const currentSemesterFilter = state.gradebookSemester || 'all';
  const units = getActiveUnitsForSemester(currentSemesterFilter);
  const u = units.find(item => String(item.unitNo !== undefined ? item.unitNo : item.name) === String(unitKey));
  if (!u) return;

  const keyInput = document.getElementById('modal-unit-weight-key');
  const defInput = document.getElementById('modal-unit-weight-default');
  const titleEl = document.getElementById('modal-unit-weight-title');
  const valInput = document.getElementById('modal-unit-weight-input');
  const hintEl = document.getElementById('modal-unit-weight-default-hint');

  if (keyInput) keyInput.value = unitKey;
  if (defInput) defInput.value = u.defaultWeight;
  if (titleEl) titleEl.textContent = `${u.name} (ภาคเรียน: ${u.semester || ''})`;
  if (valInput) {
    valInput.value = u.weight;
    setTimeout(() => { valInput.focus(); valInput.select(); }, 50);
  }
  if (hintEl) hintEl.textContent = `น้ำหนักคะแนนเริ่มต้นตาม ปพ.5: ${u.defaultWeight} คะแนน`;

  const modal = document.getElementById('edit-unit-weight-modal');
  if (modal) modal.classList.remove('hidden');
};
window.closeEditUnitWeightModal = function() {
  const modal = document.getElementById('edit-unit-weight-modal');
  if (modal) modal.classList.add('hidden');
};
window.saveCustomUnitWeight = function() {
  const keyInput = document.getElementById('modal-unit-weight-key');
  const valInput = document.getElementById('modal-unit-weight-input');
  if (!keyInput || !valInput) return;

  const unitKey = keyInput.value;
  const newWeight = parseFloat(valInput.value);
  if (isNaN(newWeight) || newWeight <= 0) {
    alert('กรุณากรอกน้ำหนักคะแนนที่ถูกต้อง (ต้องมากกว่า 0)');
    return;
  }

  setUnitWeightScore(unitKey, newWeight);
  closeEditUnitWeightModal();
  showNotification(`อัปเดตน้ำหนักคะแนนเป็น ${newWeight} คะแนนเรียบร้อย`);
  renderGradebookView();
};
window.resetDefaultUnitWeight = function() {
  const keyInput = document.getElementById('modal-unit-weight-key');
  const defInput = document.getElementById('modal-unit-weight-default');
  if (!keyInput) return;

  const unitKey = keyInput.value;
  const defVal = defInput ? defInput.value : '';
  resetUnitWeightScore(unitKey);
  closeEditUnitWeightModal();
  showNotification(`คืนค่าน้ำหนักคะแนนเป็นค่าเริ่มต้น (${defVal} คะแนน) เรียบร้อย`);
  renderGradebookView();
};

// ==========================================
// SUB-ASSIGNMENTS & OVERDUE WORK TRACKER CONTROLLERS
// (ระบบจัดการชิ้นงาน/การบ้านย่อย & ศูนย์ติดตามงานค้างส่ง)
// ==========================================

function getSubAssignmentsKey(subjectKey, grade, indicatorId) {
  const subj = subjectKey || state.currentSubjectKey || 'history';
  const gr = grade || state.currentGrade || 'ป.6';
  return `${subj}_${gr}_${indicatorId}`;
}

window.getSubAssignments = function(indicatorId) {
  const k = getSubAssignmentsKey(state.currentSubjectKey, state.currentGrade, indicatorId);
  if (!state.subAssignments) state.subAssignments = {};
  return state.subAssignments[k] || [];
};

window.getSubScore = function(studentId, indicatorId, subId) {
  if (!state.subScores) state.subScores = {};
  if (!state.subScores[studentId]) return '';
  if (!state.subScores[studentId][indicatorId]) return '';
  const val = state.subScores[studentId][indicatorId][subId];
  return (val !== undefined && val !== null) ? val : '';
};

window.setSubScore = function(studentId, indicatorId, subId, scoreVal) {
  if (!state.subScores) state.subScores = {};
  if (!state.subScores[studentId]) state.subScores[studentId] = {};
  if (!state.subScores[studentId][indicatorId]) state.subScores[studentId][indicatorId] = {};

  if (scoreVal === '' || scoreVal === null || scoreVal === undefined) {
    state.subScores[studentId][indicatorId][subId] = '';
  } else {
    let num = parseFloat(scoreVal);
    if (isNaN(num) || num < 0) num = 0;
    state.subScores[studentId][indicatorId][subId] = num;
  }
  recalculateIndicatorScoreFromSubs(studentId, indicatorId);
  saveLocalData();
};

window.recalculateIndicatorScoreFromSubs = function(studentId, indicatorId) {
  const subs = getSubAssignments(indicatorId);
  if (!subs || subs.length === 0) return;

  let totalRaw = 0;
  let totalMax = 0;
  let hasAnyScore = false;

  subs.forEach(s => {
    const sMax = Number(s.max) || 0;
    totalMax += sMax;
    const sc = getSubScore(studentId, indicatorId, s.id);
    if (sc !== '' && sc !== null && sc !== undefined && !isNaN(Number(sc))) {
      totalRaw += Number(sc);
      hasAnyScore = true;
    }
  });

  if (!state.scores) state.scores = {};
  if (!state.scores[studentId]) state.scores[studentId] = {};

  if (!hasAnyScore || totalMax === 0) {
    state.scores[studentId][indicatorId] = 0;
    return;
  }

  // Find indicator max
  const allInds = getActiveIndicatorsForSemester('all');
  const ind = allInds.find(i => i.id === indicatorId);
  const indMax = ind ? ind.max : 10;

  // Scale: (totalRaw / totalMax) * indMax
  const scaled = Math.round(((totalRaw / totalMax) * indMax) * 10) / 10;
  state.scores[studentId][indicatorId] = scaled;
};

window.openSubAssignmentsModal = function(indicatorId) {
  state.activeSubModalIndId = indicatorId;
  const modal = document.getElementById('sub-assignments-modal');
  if (!modal) return;

  const allInds = getActiveIndicatorsForSemester('all');
  const ind = allInds.find(i => i.id === indicatorId) || { id: indicatorId, name: '', max: 10 };

  const gradeBadgeEl = document.getElementById('sub-modal-grade-badge');
  const badgeEl = document.getElementById('sub-modal-ind-badge');
  const maxBadgeEl = document.getElementById('sub-modal-max-badge');
  const descEl = document.getElementById('sub-modal-desc');

  if (gradeBadgeEl) gradeBadgeEl.textContent = `ห้อง ${state.currentGrade || 'ป.6'}`;
  if (badgeEl) badgeEl.textContent = ind.id;
  if (maxBadgeEl) maxBadgeEl.textContent = `เข้า ปพ.5 เต็ม ${ind.max} คะแนน`;
  if (descEl) descEl.textContent = `${ind.name || 'ตัวชี้วัด'} (กำหนดชิ้นงาน/การบ้านย่อย แล้วกรอกคะแนนดิบ ระบบจะแปลงสัดส่วนเข้า ปพ.5 อัตโนมัติ)`;

  renderSubAssignmentsModalContent();
  modal.classList.remove('hidden');
};

window.closeSubAssignmentsModal = function() {
  const modal = document.getElementById('sub-assignments-modal');
  if (modal) modal.classList.add('hidden');
  state.activeSubModalIndId = null;
  renderGradebookView();
  if (document.getElementById('view-dashboard') && !document.getElementById('view-dashboard').classList.contains('hidden')) {
    renderDashboardView();
  }
};

window.addNewSubAssignment = function() {
  const indId = state.activeSubModalIndId;
  if (!indId) return;

  const nameInput = document.getElementById('sub-new-name');
  const maxInput = document.getElementById('sub-new-max');
  if (!nameInput || !maxInput) return;

  const name = nameInput.value.trim();
  const max = parseFloat(maxInput.value);

  if (!name) {
    alert('กรุณากรอกชื่องาน เช่น ใบงาน 1.1, ผังความคิด, สมุดเล่มเล็ก');
    nameInput.focus();
    return;
  }
  if (isNaN(max) || max <= 0) {
    alert('กรุณากรอกคะแนนเต็มที่ถูกต้อง (มากกว่า 0)');
    maxInput.focus();
    return;
  }

  const k = getSubAssignmentsKey(state.currentSubjectKey, state.currentGrade, indId);
  if (!state.subAssignments) state.subAssignments = {};
  if (!state.subAssignments[k]) state.subAssignments[k] = [];

  const newSub = {
    id: 'sub_' + Date.now(),
    name: name,
    max: max
  };

  state.subAssignments[k].push(newSub);
  saveLocalData();

  nameInput.value = '';
  maxInput.value = '10';

  showNotification(`เพิ่มงาน "${name}" เรียบร้อยแล้ว`);
  renderSubAssignmentsModalContent();
};

window.deleteSubAssignment = function(subId) {
  const indId = state.activeSubModalIndId;
  if (!indId) return;

  const subs = getSubAssignments(indId);
  const targetSub = subs.find(s => s.id === subId);
  const name = targetSub ? targetSub.name : 'งานย่อยนี้';

  if (!confirm(`คุณต้องการลบ "${name}" ใช่หรือไม่? (คะแนนที่กรอกไว้ในงานนี้จะถูกลบด้วย)`)) {
    return;
  }

  const k = getSubAssignmentsKey(state.currentSubjectKey, state.currentGrade, indId);
  state.subAssignments[k] = subs.filter(s => s.id !== subId);

  // Clean sub scores and recalculate
  const roomStudents = (typeof getFilteredStudents === 'function' ? getFilteredStudents() : state.students || []);
  roomStudents.forEach(st => {
    if (state.subScores?.[st.id]?.[indId]?.[subId] !== undefined) {
      delete state.subScores[st.id][indId][subId];
    }
    recalculateIndicatorScoreFromSubs(st.id, indId);
  });

  saveLocalData();
  showNotification(`ลบงาน "${name}" เรียบร้อยแล้ว`);
  renderSubAssignmentsModalContent();
};

window.handleSubScoreChange = function(studentId, subId, value) {
  const indId = state.activeSubModalIndId;
  if (!indId) return;

  setSubScore(studentId, indId, subId, value);

  // Recalculate summary row in modal dynamically
  const subs = getSubAssignments(indId);
  let totalRaw = 0;
  let totalMax = 0;

  subs.forEach(s => {
    const sMax = Number(s.max) || 0;
    totalMax += sMax;
    const sc = getSubScore(studentId, indId, s.id);
    if (sc !== '' && sc !== null && sc !== undefined && !isNaN(Number(sc))) {
      totalRaw += Number(sc);
    }
  });

  const allInds = getActiveIndicatorsForSemester('all');
  const ind = allInds.find(i => i.id === indId) || { max: 10 };
  const scaled = totalMax > 0 ? (Math.round(((totalRaw / totalMax) * ind.max) * 10) / 10) : 0;

  const rawEl = document.getElementById(`sub-raw-total-${studentId}`);
  const scaledEl = document.getElementById(`sub-scaled-total-${studentId}`);
  if (rawEl) rawEl.textContent = totalRaw.toFixed(1);
  if (scaledEl) scaledEl.textContent = scaled.toFixed(1);
};

window.renderSubAssignmentsModalContent = function() {
  const indId = state.activeSubModalIndId;
  if (!indId) return;

  const thead = document.getElementById('sub-table-thead');
  const tbody = document.getElementById('sub-table-tbody');
  if (!thead || !tbody) return;

  const subs = getSubAssignments(indId);
  const allInds = getActiveIndicatorsForSemester('all');
  const ind = allInds.find(i => i.id === indId) || { max: 10 };
  const students = (typeof getFilteredStudents === 'function' ? getFilteredStudents() : state.students || []).filter(s => s.status !== 'ย้ายออก');

  if (subs.length === 0) {
    thead.innerHTML = `
      <tr class="text-slate-700 bg-slate-100">
        <th class="py-2.5 px-3 text-center w-12">เลขที่</th>
        <th class="py-2.5 px-3 min-w-[180px]">ชื่อ - นามสกุล</th>
        <th class="py-2.5 px-3 text-center">สถานะ</th>
      </tr>
    `;
    tbody.innerHTML = `
      <tr>
        <td colspan="3" class="py-12 text-center text-slate-400">
          <div class="text-3xl mb-2">📋</div>
          <div class="text-sm font-bold text-slate-700">ยังไม่มีชิ้นงาน/การบ้านย่อยในตัวชี้วัดนี้</div>
          <div class="text-xs text-slate-400 mt-1">พิมพ์ชื่องานและคะแนนเต็มด้านบน แล้วกดปุ่ม <strong>"+ เพิ่มงาน"</strong> ได้เลย</div>
        </td>
      </tr>
    `;
    return;
  }

  const totalPossibleRaw = subs.reduce((acc, s) => acc + (Number(s.max) || 0), 0);

  // Header row
  thead.innerHTML = `
    <tr class="text-slate-700 bg-slate-100 font-bold border-b border-slate-200">
      <th class="py-2.5 px-2.5 text-center w-12 border-r border-slate-200">เลขที่</th>
      <th class="py-2.5 px-3 min-w-[160px] border-r border-slate-200">ชื่อ - สกุล</th>
      ${subs.map((s, idx) => `
        <th class="py-2 px-2 text-center border-r border-slate-200 min-w-[130px] group">
          <div class="flex items-center justify-between gap-1">
            <span class="text-[10px] text-blue-600 bg-blue-50 px-1 rounded font-bold">งานที่ ${idx + 1}</span>
            <button 
              type="button" 
              onclick="deleteSubAssignment('${s.id}')" 
              class="text-rose-400 hover:text-rose-600 font-bold text-xs p-0.5 rounded transition cursor-pointer" 
              title="ลบงานนี้"
            >
              🗑️
            </button>
          </div>
          <div class="text-xs font-bold text-slate-800 mt-1 truncate max-w-[120px] mx-auto" title="${s.name}">${s.name}</div>
          <div class="text-[10px] text-amber-700 font-semibold mt-0.5">(เต็ม ${s.max})</div>
        </th>
      `).join('')}
      <th class="py-2.5 px-2 text-center border-r border-slate-200 bg-slate-200/60 w-24">
        <div class="text-[11px] font-bold text-slate-800">รวมดิบ</div>
        <div class="text-[10px] text-slate-500">(เต็ม ${totalPossibleRaw})</div>
      </th>
      <th class="py-2.5 px-2 text-center bg-amber-100/70 text-amber-900 w-28">
        <div class="text-[11px] font-bold">⭐ เข้า ปพ.5</div>
        <div class="text-[10px] text-amber-800 font-bold">(เต็ม ${ind.max})</div>
      </th>
    </tr>
  `;

  // Body rows
  tbody.innerHTML = students.map(st => {
    let totalRaw = 0;
    let hasAnyScore = false;
    let pendingCount = 0;

    const subCells = subs.map(s => {
      const sc = getSubScore(st.id, indId, s.id);
      const isMissing = (sc === '' || sc === null || sc === undefined);
      if (!isMissing && !isNaN(Number(sc))) {
        totalRaw += Number(sc);
        hasAnyScore = true;
      } else {
        pendingCount++;
      }

      return `
        <td class="py-1.5 px-1.5 text-center border-r border-slate-100 ${isMissing ? 'bg-amber-50/50' : ''}">
          <input 
            type="number" 
            min="0" 
            max="${s.max}" 
            step="0.5" 
            value="${isMissing ? '' : sc}"
            placeholder="ค้าง"
            onchange="handleSubScoreChange('${st.id}', '${s.id}', this.value)"
            class="touch-target w-16 text-center font-bold py-1 px-1 border rounded-lg text-xs transition-all focus:ring-2 focus:ring-blue-400 focus:outline-none ${isMissing ? 'border-amber-300 bg-amber-50/80 text-amber-900 placeholder:text-amber-500 placeholder:font-normal' : 'border-slate-200 bg-white text-slate-800'}"
          />
        </td>
      `;
    }).join('');

    const scaled = (totalPossibleRaw > 0 && hasAnyScore)
      ? (Math.round(((totalRaw / totalPossibleRaw) * ind.max) * 10) / 10)
      : 0;

    return `
      <tr class="hover:bg-slate-50/60 transition-colors">
        <td class="py-2 px-2 text-center font-bold text-slate-700 border-r border-slate-100 text-xs">
          ${st.student_no}
        </td>
        <td class="py-2 px-3 font-semibold text-slate-900 border-r border-slate-100 text-xs">
          <div class="flex items-center justify-between gap-1">
            <span class="truncate max-w-[130px]">${st.name}</span>
            ${pendingCount > 0 ? `<span class="text-[9px] bg-rose-100 text-rose-700 px-1 rounded-full font-bold">ค้าง ${pendingCount}</span>` : `<span class="text-[9px] text-emerald-600 font-bold">ครบ✓</span>`}
          </div>
        </td>
        ${subCells}
        <td class="py-2 px-2 text-center font-bold text-slate-800 bg-slate-50 border-r border-slate-100 text-xs" id="sub-raw-total-${st.id}">
          ${totalRaw.toFixed(1)}
        </td>
        <td class="py-2 px-2 text-center font-bold text-amber-900 bg-amber-50/60 text-xs" id="sub-scaled-total-${st.id}">
          ${scaled.toFixed(1)}
        </td>
      </tr>
    `;
  }).join('');
};

window.getPendingWorkData = function() {
  const currentSem = state.gradebookSemester || 'all';
  const inds = getActiveIndicatorsForSemester(currentSem);
  const students = (typeof getFilteredStudents === 'function' ? getFilteredStudents() : state.students || []).filter(s => s.status !== 'ย้ายออก');

  const byStudent = [];
  const taskMap = {}; // key: `${ind.id}__${sub.id}` -> { ind, sub, pendingStudents: [] }

  students.forEach(st => {
    const pendingItems = [];
    inds.forEach(ind => {
      const subs = getSubAssignments(ind.id);
      subs.forEach(sub => {
        const sc = getSubScore(st.id, ind.id, sub.id);
        if (sc === '' || sc === null || sc === undefined) {
          pendingItems.push({
            indicatorId: ind.id,
            indicatorName: ind.name,
            subId: sub.id,
            subName: sub.name,
            subMax: sub.max
          });

          const taskKey = `${ind.id}__${sub.id}`;
          if (!taskMap[taskKey]) {
            taskMap[taskKey] = {
              indicatorId: ind.id,
              indicatorName: ind.name,
              sub: sub,
              pendingStudents: []
            };
          }
          taskMap[taskKey].pendingStudents.push(st);
        }
      });
    });

    if (pendingItems.length > 0) {
      byStudent.push({
        student: st,
        pendingItems: pendingItems
      });
    }
  });

  const byTask = Object.values(taskMap);
  let totalPendingTasksCount = 0;
  byStudent.forEach(s => totalPendingTasksCount += s.pendingItems.length);

  return {
    byStudent,
    byTask,
    totalStudentsWithPending: byStudent.length,
    totalPendingTasksCount
  };
};

window.updateGradebookPendingBadge = function() {
  const badgeEl = document.getElementById('gradebook-pending-badge');
  if (!badgeEl) return;

  const data = getPendingWorkData();
  const count = data.totalStudentsWithPending;

  if (count === 0) {
    badgeEl.textContent = 'ครบทุกงาน ✓';
    badgeEl.className = 'px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px]';
  } else {
    badgeEl.textContent = `${count} คน`;
    badgeEl.className = 'px-1.5 py-0.5 rounded-full bg-rose-500 text-white font-extrabold text-[10px]';
  }
};

window.openPendingWorkModal = function() {
  const modal = document.getElementById('pending-work-modal');
  if (!modal) return;

  const gradeBadge = document.getElementById('pending-modal-grade-badge');
  if (gradeBadge) gradeBadge.textContent = `ห้อง ${state.currentGrade || 'ป.6'}`;

  state.pendingWorkTab = state.pendingWorkTab || 'student';
  state.pendingSelectedStudentId = null;
  state.pendingStudentFilter = state.pendingStudentFilter || 'all';

  renderPendingWorkModalContent();
  modal.classList.remove('hidden');
};

window.closePendingWorkModal = function() {
  const modal = document.getElementById('pending-work-modal');
  if (modal) modal.classList.add('hidden');
  state.pendingSelectedStudentId = null;
};

window.switchPendingWorkTab = function(tab) {
  state.pendingWorkTab = tab;
  state.pendingSelectedStudentId = null;
  const btnStudent = document.getElementById('pending-tab-student');
  const btnTask = document.getElementById('pending-tab-task');

  if (tab === 'student') {
    if (btnStudent) btnStudent.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 cursor-pointer';
    if (btnTask) btnTask.className = 'px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100 cursor-pointer';
  } else {
    if (btnStudent) btnStudent.className = 'px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100 cursor-pointer';
    if (btnTask) btnTask.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 cursor-pointer';
  }

  renderPendingWorkModalContent();
};

window.viewStudentPendingDetail = function(studentId) {
  state.pendingSelectedStudentId = studentId;
  renderPendingWorkModalContent();
};

window.backToPendingStudentList = function() {
  state.pendingSelectedStudentId = null;
  renderPendingWorkModalContent();
};

window.filterPendingStudentList = function(filter) {
  state.pendingStudentFilter = filter;
  renderPendingWorkModalContent();
};

window.renderPendingWorkModalContent = function() {
  const listContainer = document.getElementById('pending-modal-content-list');
  const summaryText = document.getElementById('pending-modal-summary-text');
  if (!listContainer) return;

  const data = getPendingWorkData();
  const tab = state.pendingWorkTab || 'student';

  if (summaryText) {
    if (data.totalStudentsWithPending === 0) {
      summaryText.textContent = 'ยอดเยี่ยม! นักเรียนทุกคนส่งงานครบถ้วนสมบูรณ์ 🎉';
      summaryText.className = 'text-emerald-700 font-extrabold';
    } else {
      summaryText.textContent = `พบค้างส่ง ${data.totalStudentsWithPending} คน (รวม ${data.totalPendingTasksCount} ชิ้นงาน)`;
      summaryText.className = 'text-rose-700 font-extrabold';
    }
  }

  // If in By-Task tab
  if (tab === 'task') {
    if (data.totalStudentsWithPending === 0) {
      listContainer.innerHTML = `
        <div class="py-12 text-center bg-white rounded-2xl border border-dashed border-emerald-300">
          <div class="text-4xl mb-2">🎉</div>
          <div class="text-sm font-bold text-emerald-800">ไม่มีงานค้างในห้องเรียนนี้!</div>
          <div class="text-xs text-slate-500 mt-1">นักเรียนทุกคนได้ส่งงานและมีคะแนนเก็บครบถ้วนทุกตัวชี้วัดแล้ว</div>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = data.byTask.map(item => `
      <div class="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs hover:border-blue-300 transition-all">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100">
          <div>
            <div class="flex items-center gap-2">
              <span class="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-xs border border-blue-200">${item.indicatorId}</span>
              <span class="font-bold text-slate-900 text-sm">${item.sub.name}</span>
              <span class="text-xs text-slate-500 font-medium">(เต็ม ${item.sub.max} คะแนน)</span>
            </div>
            <div class="text-[11px] text-slate-400 mt-0.5 truncate max-w-md">${item.indicatorName || ''}</div>
          </div>
          <button 
            type="button" 
            onclick="closePendingWorkModal(); openSubAssignmentsModal('${item.indicatorId}')"
            class="text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-xl shadow-2xs transition cursor-pointer shrink-0"
          >
            📋 จัดการคะแนนงานนี้
          </button>
        </div>

        <div class="mt-2.5">
          <div class="text-[11px] font-bold text-rose-700 mb-1.5">
            🚨 นักเรียนที่ยังไม่ได้ส่งงาน (${item.pendingStudents.length} คน):
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${item.pendingStudents.map(st => `
              <span class="inline-flex items-center gap-1 text-xs font-medium text-slate-800 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-lg">
                <span class="font-bold text-rose-800">#${st.student_no}</span>
                <span>${st.name}</span>
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
    return;
  }

  // TAB: BY STUDENT
  const allStudents = (typeof getFilteredStudents === 'function' ? getFilteredStudents() : state.students || []).filter(s => s.status !== 'ย้ายออก');

  // LEVEL 2: DETAIL VIEW (When a student is clicked)
  if (state.pendingSelectedStudentId) {
    const student = allStudents.find(s => s.id === state.pendingSelectedStudentId);
    const studentEntry = data.byStudent.find(s => s.student.id === state.pendingSelectedStudentId);

    if (!student) {
      state.pendingSelectedStudentId = null;
      renderPendingWorkModalContent();
      return;
    }

    if (!studentEntry || studentEntry.pendingItems.length === 0) {
      listContainer.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <button 
              type="button" 
              onclick="backToPendingStudentList()"
              class="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
            >
              <span>←</span> <span>กลับไปรายชื่อนักเรียน</span>
            </button>
          </div>
          <div class="py-10 text-center bg-white rounded-2xl border border-dashed border-emerald-300">
            <div class="text-4xl mb-2">🎉</div>
            <div class="text-base font-bold text-emerald-800">${student.name} ส่งงานครบทุกชิ้นแล้ว!</div>
            <div class="text-xs text-slate-500 mt-1">ไม่มีงานค้างสำหรับนักเรียนคนนี้</div>
            <button 
              type="button" 
              onclick="backToPendingStudentList()"
              class="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition cursor-pointer"
            >
              ดูรายชื่อนักเรียนคนอื่น
            </button>
          </div>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = `
      <div class="space-y-3.5">
        <!-- Navigation Header Bar -->
        <div class="flex items-center justify-between pb-2 border-b border-slate-100 gap-2">
          <button 
            type="button" 
            onclick="backToPendingStudentList()"
            class="touch-target px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
          >
            <span>←</span> <span>กลับไปรายชื่อนักเรียน</span>
          </button>
          
          <button 
            type="button" 
            onclick="copySingleStudentPendingLineText('${student.id}')"
            class="touch-target px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-2xs transition flex items-center gap-1.5 cursor-pointer"
            title="คัดลอกข้อความแจ้งเตือนเฉพาะนักเรียนคนนี้ เพื่อส่ง LINE ส่วนตัวให้ผู้ปกครอง"
          >
            <span>💬</span> <span>คัดลอก LINE เฉพาะคนนี้</span>
          </button>
        </div>

        <!-- Student Profile Card in Detail View -->
        <div class="p-4 bg-gradient-to-r from-amber-50 to-orange-50/70 rounded-2xl border border-amber-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0">
              #${student.student_no}
            </div>
            <div>
              <div class="font-bold text-slate-900 text-base flex items-center gap-2">
                <span>${student.name}</span>
                <span class="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-amber-200">
                  เลขที่ ${student.student_no}
                </span>
              </div>
              <div class="text-xs text-amber-800 font-medium mt-0.5">
                ชั้น ${state.currentGrade} • กำลังติดตามงานค้างส่ง
              </div>
            </div>
          </div>
          
          <div class="flex items-center gap-2 self-start sm:self-auto">
            <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-rose-100 text-rose-800 border border-rose-200 shadow-2xs">
              ⚠️ ค้างส่ง ${studentEntry.pendingItems.length} ชิ้นงาน
            </span>
          </div>
        </div>

        <!-- Overdue Tasks List Header -->
        <div class="flex items-center justify-between text-xs font-bold text-slate-800 pt-1 px-1">
          <div class="flex items-center gap-1.5">
            <span>📝</span> <span>รายการชิ้นงานที่ยังไม่ได้ส่ง:</span>
          </div>
          <span class="text-[11px] font-normal text-slate-400">
            คลิก "กรอกคะแนน" เพื่อเปิดหน้าต่างบันทึกคะแนนงานนั้นๆ
          </span>
        </div>

        <!-- Overdue Tasks Items -->
        <div class="space-y-2">
          ${studentEntry.pendingItems.map((p, idx) => `
            <div class="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs hover:border-amber-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="flex items-start sm:items-center gap-3">
                <span class="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center border border-blue-200 shrink-0 mt-0.5 sm:mt-0">
                  ${idx + 1}
                </span>
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-[11px] border border-blue-200">
                      ${p.indicatorId}
                    </span>
                    <span class="font-bold text-slate-900 text-sm">
                      ${p.subName}
                    </span>
                    <span class="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      เต็ม ${p.subMax} คะแนน
                    </span>
                  </div>
                  <div class="text-[11px] text-slate-400 mt-1 truncate max-w-md">
                    ${p.indicatorName || ''}
                  </div>
                </div>
              </div>

              <button 
                type="button" 
                onclick="closePendingWorkModal(); openSubAssignmentsModal('${p.indicatorId}')"
                class="touch-target px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-2xs transition cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>✏️</span> <span>กรอกคะแนน</span>
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    return;
  }

  // LEVEL 1: MASTER VIEW (Clean List of All Students in Class)
  const filter = state.pendingStudentFilter || 'all';

  // Build full student status list
  const studentListWithStatus = allStudents.map(student => {
    const studentEntry = data.byStudent.find(s => s.student.id === student.id);
    const pendingCount = studentEntry ? studentEntry.pendingItems.length : 0;
    const isComplete = (pendingCount === 0);
    return {
      student,
      pendingCount,
      isComplete,
      pendingItems: studentEntry ? studentEntry.pendingItems : []
    };
  });

  const filteredList = studentListWithStatus.filter(item => {
    if (filter === 'pending') return !item.isComplete;
    if (filter === 'complete') return item.isComplete;
    return true;
  });

  const completeCount = studentListWithStatus.filter(s => s.isComplete).length;
  const pendingCountTotal = studentListWithStatus.filter(s => !s.isComplete).length;

  listContainer.innerHTML = `
    <div class="space-y-3">
      
      <!-- Sub-filter buttons (All / Pending / Complete) -->
      <div class="flex items-center justify-between flex-wrap gap-2 pb-1">
        <div class="inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold shadow-2xs">
          <button 
            type="button" 
            onclick="filterPendingStudentList('all')"
            class="px-3 py-1 rounded-lg transition-all cursor-pointer ${filter === 'all' ? 'bg-white text-blue-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'}"
          >
            ทั้งหมด (${allStudents.length})
          </button>
          <button 
            type="button" 
            onclick="filterPendingStudentList('pending')"
            class="px-3 py-1 rounded-lg transition-all cursor-pointer ${filter === 'pending' ? 'bg-white text-rose-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'}"
          >
            🚨 ค้างงาน (${pendingCountTotal})
          </button>
          <button 
            type="button" 
            onclick="filterPendingStudentList('complete')"
            class="px-3 py-1 rounded-lg transition-all cursor-pointer ${filter === 'complete' ? 'bg-white text-emerald-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'}"
          >
            ✓ ครบแล้ว (${completeCount})
          </button>
        </div>

        <span class="text-[11px] text-slate-400">
          💡 คลิกที่ชื่อนักเรียนที่ค้างเพื่อดูรายละเอียดงาน
        </span>
      </div>

      <!-- Clean List of Students -->
      <div class="divide-y divide-slate-100 bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        ${filteredList.map(item => {
          if (!item.isComplete) {
            // Student with pending work (Clickable to Level 2)
            return `
              <div 
                onclick="viewStudentPendingDetail('${item.student.id}')"
                class="group flex items-center justify-between p-3.5 hover:bg-amber-50/60 transition-colors cursor-pointer border-l-4 border-l-amber-400"
                title="คลิกเพื่อดูงานที่ ${item.student.name} ยังไม่ได้ส่ง"
              >
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 border border-amber-200 group-hover:scale-105 transition-transform">
                    ${item.student.student_no}
                  </div>
                  <div>
                    <div class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      ${item.student.name}
                    </div>
                    <div class="text-[11px] text-slate-400">
                      เลขที่ ${item.student.student_no} • คลิกเพื่อเปิดดูชิ้นงานที่ค้าง
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-2.5">
                  <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 shadow-2xs flex items-center gap-1">
                    <span>⚠️ ค้าง ${item.pendingCount} งาน</span>
                  </span>
                  <span class="text-xs text-blue-600 font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    <span>ดูงาน</span> <span>→</span>
                  </span>
                </div>
              </div>
            `;
          } else {
            // Student who completed all work (Calm, clean, not overflowing)
            return `
              <div class="flex items-center justify-between p-3.5 bg-slate-50/30 opacity-90">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 border border-emerald-200">
                    ${item.student.student_no}
                  </div>
                  <div>
                    <div class="text-sm font-medium text-slate-800">
                      ${item.student.name}
                    </div>
                    <div class="text-[11px] text-slate-400">
                      เลขที่ ${item.student.student_no}
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <span>✓ ครบ</span>
                  </span>
                  <span class="text-[11px] text-emerald-600 font-medium">ส่งครบทุกงาน</span>
                </div>
              </div>
            `;
          }
        }).join('')}
      </div>

    </div>
  `;
};

window.copyPendingWorkLineText = function() {
  const data = getPendingWorkData();
  const subjName = 'วิชาประวัติศาสตร์';
  const grade = state.currentGrade || 'ป.6';
  const todayStr = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });

  if (data.totalStudentsWithPending === 0) {
    showNotification('🎉 นักเรียนส่งงานครบทุกคนแล้ว ไม่มีงานค้างสำหรับส่ง LINE');
    return;
  }

  let text = `📢 [แจ้งเตือนงานค้างและชิ้นงานที่ต้องส่ง]\n`;
  text += `🏫 ${subjName} ห้อง ${grade}\n`;
  text += `📅 ข้อมูล ณ วันที่ ${todayStr}\n\n`;
  text += `รายชื่อนักเรียนที่มีงานค้างส่ง (${data.totalStudentsWithPending} คน):\n`;

  data.byStudent.forEach((item, idx) => {
    text += `\n${idx + 1}. เลขที่ ${item.student.student_no} ${item.student.name} (ค้าง ${item.pendingItems.length} ชิ้นงาน):\n`;
    item.pendingItems.forEach(p => {
      text += `   - [${p.indicatorId}] ${p.subName} (เต็ม ${p.subMax} คะแนน)\n`;
    });
  });

  text += `\n* ขอให้นักเรียนติดต่อส่งงานกับคุณครูผู้สอนเพื่อรักษาสิทธิ์คะแนนเก็บตามระเบียบ ปพ.5 ค่ะ/ครับ 🙏`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showNotification('📋 คัดลอกข้อความสำหรับส่ง LINE เรียบร้อยแล้ว!');
    }).catch(() => {
      copyFallback(text);
    });
  } else {
    copyFallback(text);
  }
};

window.copySingleStudentPendingLineText = function(studentId) {
  const allStudents = (typeof getFilteredStudents === 'function' ? getFilteredStudents() : state.students || []).filter(s => s.status !== 'ย้ายออก');
  const student = allStudents.find(s => s.id === studentId);
  if (!student) return;

  const data = getPendingWorkData();
  const entry = data.byStudent.find(s => s.student.id === studentId);

  if (!entry || entry.pendingItems.length === 0) {
    showNotification(`นักเรียน ${student.name} ส่งงานครบแล้ว ไม่มีงานค้าง`);
    return;
  }

  const subjName = 'วิชาประวัติศาสตร์';
  const grade = state.currentGrade || 'ป.6';
  const todayStr = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });

  let text = `📢 [แจ้งเตือนงานค้างรายบุคคล]\n`;
  text += `🏫 ${subjName} ห้อง ${grade}\n`;
  text += `👤 นักเรียน: เลขที่ ${student.student_no} ${student.name}\n`;
  text += `📅 ข้อมูล ณ วันที่ ${todayStr}\n\n`;
  text += `รายการชิ้นงานที่ค้างส่ง (${entry.pendingItems.length} ชิ้นงาน):\n`;

  entry.pendingItems.forEach((p, idx) => {
    text += `${idx + 1}. [${p.indicatorId}] ${p.subName} (เต็ม ${p.subMax} คะแนน)\n`;
  });

  text += `\n* รบกวนผู้ปกครองช่วยติดตามให้นักเรียนติดต่อส่งงานกับคุณครูผู้สอนเพื่อรักษาสิทธิ์คะแนนเก็บตามระเบียบ ปพ.5 ค่ะ/ครับ 🙏`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showNotification(`📋 คัดลอกข้อความ LINE สำหรับ ${student.name} เรียบร้อยแล้ว!`);
    }).catch(() => {
      copyFallback(text);
    });
  } else {
    copyFallback(text);
  }
};

function copyFallback(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showNotification('📋 คัดลอกข้อความเรียบร้อยแล้ว!');
  } catch (e) {
    alert('ไม่สามารถคัดลอกอัตโนมัติได้ กรุณาคัดลอกด้วยตนเอง');
  }
  document.body.removeChild(ta);
}



// ==========================================
// VIEW: HOLISTIC ASSESSMENTS (ประเมิน 3 ด้านตามเกณฑ์ สพฐ.)
// 1. คุณลักษณะอันพึงประสงค์ (8 ข้อ)
// 2. อ่าน คิดวิเคราะห์ เขียน (3 ด้าน)
// 3. สมรรถนะสำคัญ (5 ด้าน)
// ==========================================

const HOLISTIC_DEFINITIONS = {
  traits: {
    key: 'traits',
    tabName: '⭐ คุณลักษณะอันพึงประสงค์',
    title: 'ประเมินคุณลักษณะอันพึงประสงค์',
    items: [
      { id: 't1', no: 1, name: '1. รักชาติ ศาสน์ กษัตริย์' },
      { id: 't2', no: 2, name: '2. ซื่อสัตย์สุจริต' },
      { id: 't3', no: 3, name: '3. มีวินัย' },
      { id: 't4', no: 4, name: '4. ใฝ่เรียนรู้' },
      { id: 't5', no: 5, name: '5. อยู่อย่างพอเพียง' },
      { id: 't6', no: 6, name: '6. มุ่งมั่นในการทำงาน' },
      { id: 't7', no: 7, name: '7. รักความเป็นไทย' },
      { id: 't8', no: 8, name: '8. มีจิตสาธารณะ' }
    ]
  },
  reading: {
    key: 'reading',
    tabName: '📄 อ่าน คิดวิเคราะห์ เขียน',
    title: 'ประเมินอ่าน คิดวิเคราะห์ เขียน',
    items: [
      { id: 'r1', no: 1, name: '1. การอ่าน' },
      { id: 'r2', no: 2, name: '2. การคิดวิเคราะห์' },
      { id: 'r3', no: 3, name: '3. การเขียน' }
    ]
  },
  competencies: {
    key: 'competencies',
    tabName: '⚖️ สมรรถนะสำคัญ',
    title: 'ประเมินสมรรถนะสำคัญของผู้เรียน',
    items: [
      { id: 'c1', no: 1, name: '1. การสื่อสาร' },
      { id: 'c2', no: 2, name: '2. การคิด' },
      { id: 'c3', no: 3, name: '3. การแก้ปัญหา' },
      { id: 'c4', no: 4, name: '4. ทักษะชีวิต' },
      { id: 'c5', no: 5, name: '5. การใช้เทคโนโลยี' }
    ]
  }
};
function getHolisticStoreKey(sem, tabKey) {
  const subj = state.currentSubjectKey || 'history';
  const grade = state.currentGrade || 'ป.6';
  const targetSem = sem || 'all';
  const tab = tabKey || 'traits';
  return `${subj}_${grade}_${targetSem}_${tab}`;
}

function calculateHolisticSummary(scoreList) {
  if (!scoreList || scoreList.length === 0) {
    return { level: '-', label: 'ยังไม่ประเมิน', badgeClass: 'bg-slate-100 text-slate-500 border-slate-200' };
  }
  const validScores = scoreList.filter(s => s !== null && s !== undefined && s !== '' && !isNaN(Number(s)));
  if (validScores.length === 0) {
    return { level: '-', label: 'ยังไม่ประเมิน', badgeClass: 'bg-slate-100 text-slate-500 border-slate-200' };
  }

  const hasZero = validScores.some(s => Number(s) === 0);
  const sum = validScores.reduce((acc, v) => acc + Number(v), 0);
  const avg = sum / validScores.length;

  if (hasZero || avg < 1.0) {
    return { level: '0', label: 'ไม่ผ่าน (0)', badgeClass: 'bg-rose-50 text-rose-700 border-rose-300 font-extrabold' };
  } else if (avg >= 2.5) {
    return { level: '3', label: 'ดีเยี่ยม (3)', badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-300 font-extrabold' };
  } else if (avg >= 1.5) {
    return { level: '2', label: 'ดี (2)', badgeClass: 'bg-sky-50 text-sky-700 border-sky-300 font-extrabold' };
  } else {
    return { level: '1', label: 'ผ่าน (1)', badgeClass: 'bg-amber-50 text-amber-800 border-amber-300 font-extrabold' };
  }
}

function getHolisticSelectColorClass(val) {
  if (val === undefined || val === null || val === '') return 'holistic-score-empty';
  const num = Number(val);
  if (num === 3) return 'holistic-score-3';
  if (num === 2) return 'holistic-score-2';
  if (num === 1) return 'holistic-score-1';
  if (num === 0) return 'holistic-score-0';
  return 'holistic-score-empty';
}

function getRecommendedLevelByGrade(studentId, sem) {
  const maxPossible = sem === 'all' ? 100 : 50;
  const calcResult = calculateStudentUnitScores(studentId, sem);

  let enteredWeightSum = 0;
  if (calcResult.units) {
    Object.values(calcResult.units).forEach(u => {
      if (u.enteredCount > 0) enteredWeightSum += (u.weight || 0);
    });
  }

  let pct = 0;
  if (enteredWeightSum > 0) {
    pct = (calcResult.grandTotalScaled / enteredWeightSum) * 100;
  } else if (maxPossible > 0) {
    pct = (calcResult.grandTotalScaled / maxPossible) * 100;
  }

  if (pct >= 75) return 3; // เกรด 3.5 - 4 -> ดีเยี่ยม (3)
  if (pct >= 60) return 2; // เกรด 2 - 3 -> ดี (2)
  return 1; // เกรด 1 หรือพื้นฐาน -> ผ่าน (1)
}

window.handleHolisticTabChange = function(tabKey) {
  state.holisticTab = tabKey;
  renderHolisticView();
};
window.handleHolisticSemesterChange = function(sem) {
  state.holisticSemester = sem;
  renderHolisticView();
  const label = sem === 'all' ? 'ตลอดทั้งปีการศึกษา' : `ภาคเรียนที่ ${sem}`;
  showNotification(`สลับภาคเรียนประเมินเป็น "${label}"`);
};
function renderHolisticView() {
  const students = getFilteredStudents();
  const activeStudents = students.filter(s => s.status !== 'ย้ายออก');
  const activeTabKey = state.holisticTab || 'traits';
  const activeSem = state.holisticSemester || 'all';
  const def = HOLISTIC_DEFINITIONS[activeTabKey] || HOLISTIC_DEFINITIONS.traits;
  const storeKey = getHolisticStoreKey(activeSem, activeTabKey);

  if (!state.holisticAssessments) state.holisticAssessments = {};
  if (!state.holisticAssessments[storeKey]) {
    state.holisticAssessments[storeKey] = {};
  }
  const domainData = state.holisticAssessments[storeKey];

  // Auto-seed intelligent defaults based on student academic performance if empty
  activeStudents.forEach(st => {
    if (!domainData[st.id]) {
      domainData[st.id] = {};
      const initLevel = getRecommendedLevelByGrade(st.id, activeSem);
      def.items.forEach(item => {
        domainData[st.id][item.id] = initLevel;
      });
    }
  });

  // 1. Update Tabs styling
  const tabs = ['traits', 'reading', 'competencies'];
  tabs.forEach(tKey => {
    const btn = document.getElementById(`holistic-tab-btn-${tKey}`);
    if (btn) {
      if (tKey === activeTabKey) {
        btn.className = 'px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer bg-slate-800 text-white border border-slate-700 shadow-md ring-1 ring-blue-500/50';
      } else {
        btn.className = 'px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer text-slate-400 hover:text-white hover:bg-slate-800/60';
      }
    }
  });

  // 2. Update Semester Switcher buttons
  const semBtn1 = document.getElementById('holistic-sem-term1');
  const semBtn2 = document.getElementById('holistic-sem-term2');
  const semBtnAll = document.getElementById('holistic-sem-all');
  const activeClass = 'px-3 py-1.5 rounded-lg transition-all bg-white text-blue-700 font-bold shadow-xs cursor-pointer';
  const inactiveClass = 'px-3 py-1.5 rounded-lg transition-all text-slate-600 hover:text-slate-900 cursor-pointer';
  if (semBtn1) semBtn1.className = activeSem === '1' ? activeClass : inactiveClass;
  if (semBtn2) semBtn2.className = activeSem === '2' ? activeClass : inactiveClass;
  if (semBtnAll) semBtnAll.className = activeSem === 'all' ? activeClass : inactiveClass;

  // 3. Update Title & Class Badge
  const titleEl = document.getElementById('holistic-view-title');
  if (titleEl) {
    titleEl.textContent = def.title;
  }
  const badgeEl = document.getElementById('holistic-class-badge');
  if (badgeEl) {
    const termLabel = activeSem === 'all' ? 'ตลอดทั้งปีการศึกษา' : `ภาคเรียนที่ ${activeSem}`;
    badgeEl.textContent = `ห้อง ${state.currentGrade} • ${termLabel} (${activeStudents.length} คน)`;
  }

  // 4. Update Table Header
  const headerRow = document.getElementById('holistic-table-header-row');
  if (headerRow) {
    headerRow.innerHTML = `
      <th class="col-sticky-1 py-3 px-3 text-center text-xs font-bold text-white bg-slate-900 border-b border-r border-slate-800 w-14">
        เลขที่
      </th>
      <th class="col-sticky-2 py-3 px-4 text-left text-xs font-bold text-white bg-slate-900 border-b border-r border-slate-800 min-w-[170px]">
        ชื่อ - นามสกุล
      </th>
      ${def.items.map(item => `
        <th class="py-2.5 px-2 text-center text-xs font-bold text-white bg-slate-900 border-b border-r border-slate-800 min-w-[85px] max-w-[115px]">
          <div class="leading-tight text-white font-bold text-[11px] line-clamp-2" title="${item.name}">${item.name}</div>
        </th>
      `).join('')}
      <th class="py-3 px-3 text-center text-xs font-bold text-amber-400 bg-slate-900 border-b border-slate-800 min-w-[105px]">
        สรุปผล
      </th>
    `;
  }

  // 5. Update Table Body
  const tbody = document.getElementById('holistic-table-body');
  if (!tbody) return;

  if (students.length === 0) {
    tbody.innerHTML = `<tr><td colspan="${def.items.length + 3}" class="text-center py-10 text-slate-400">ไม่พบนักเรียน</td></tr>`;
    return;
  }

  tbody.innerHTML = students.map((student, studentIdx) => {
    const isTransferred = student.status === 'ย้ายออก';

    if (isTransferred) {
      return `
        <tr class="border-b border-slate-100 bg-slate-50/40 opacity-75">
          <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white border-r border-slate-200 text-sm">
            ${student.student_no}
          </td>
          <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white border-r border-slate-200 text-sm">
            <div class="flex items-center gap-1.5 truncate max-w-[160px]">
              <span class="line-through text-slate-500 truncate">${student.name}</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold border border-slate-300 shrink-0">ย้ายออก</span>
            </div>
          </td>
          ${def.items.map(() => `
            <td class="py-2.5 px-2 text-center border-r border-slate-100 bg-slate-50/50">
              <span class="text-xs text-slate-400 font-medium cursor-not-allowed" title="ย้ายออก (ไม่ประเมิน)">-</span>
            </td>
          `).join('')}
          <td class="py-2.5 px-3 text-center text-xs font-semibold text-slate-500 bg-slate-50" id="holistic-summary-${student.id}">
            <span class="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-300">ย้ายออก</span>
          </td>
        </tr>
      `;
    }

    const stScores = domainData[student.id] || {};
    const scoreValues = def.items.map(item => stScores[item.id] !== undefined ? stScores[item.id] : 3);
    const summary = calculateHolisticSummary(scoreValues);

    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/70 transition-colors">
        <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white border-r border-slate-200 text-sm">
          ${student.student_no}
        </td>
        <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white border-r border-slate-200 text-sm">
          <div class="truncate max-w-[160px]">${student.name}</div>
        </td>
        ${def.items.map((item, itemIdx) => {
          const val = stScores[item.id] !== undefined ? stScores[item.id] : 3;
          const displayVal = (val !== undefined && val !== null && val !== '') ? val : '';
          return `
            <td class="py-2 px-1 text-center border-r border-slate-100">
              <input 
                type="text" 
                inputmode="numeric" 
                maxlength="1" 
                pattern="[0-3]*"
                id="holistic-input-${student.id}-${item.id}"
                data-student-id="${student.id}"
                data-item-id="${item.id}"
                data-student-idx="${studentIdx}"
                data-item-idx="${itemIdx}"
                value="${displayVal}"
                onfocus="this.select()"
                oninput="handleHolisticNumberInput(this, '${student.id}', '${item.id}', ${studentIdx}, ${itemIdx})"
                onkeydown="handleHolisticKeyDown(event, this, ${studentIdx}, ${itemIdx})"
                title="ระดับคะแนน: ${displayVal !== '' ? (Number(displayVal) === 3 ? '3 (ดีเยี่ยม)' : (Number(displayVal) === 2 ? '2 (ดี)' : (Number(displayVal) === 1 ? '1 (ผ่าน)' : '0 (ไม่ผ่าน)'))) : 'ยังไม่ระบุ'}"
                class="holistic-score-input ${getHolisticSelectColorClass(displayVal)}"
                autocomplete="off"
              />
            </td>
          `;
        }).join('')}
        <td class="py-2.5 px-3 text-center text-xs font-semibold" id="holistic-summary-${student.id}">
          <span class="px-2.5 py-1 rounded-full text-xs font-extrabold border shadow-2xs ${summary.badgeClass}">
            ${summary.label}
          </span>
        </td>
      </tr>
    `;
  }).join('');
}

function applyHolisticCellUpdate(inputEl, studentId, itemId, val) {
  const activeTabKey = state.holisticTab || 'traits';
  const activeSem = state.holisticSemester || 'all';
  const def = HOLISTIC_DEFINITIONS[activeTabKey] || HOLISTIC_DEFINITIONS.traits;
  const storeKey = getHolisticStoreKey(activeSem, activeTabKey);

  if (!state.holisticAssessments[storeKey]) {
    state.holisticAssessments[storeKey] = {};
  }
  if (!state.holisticAssessments[storeKey][studentId]) {
    state.holisticAssessments[storeKey][studentId] = {};
  }

  if (val === '' || val === null || val === undefined) {
    delete state.holisticAssessments[storeKey][studentId][itemId];
  } else {
    state.holisticAssessments[storeKey][studentId][itemId] = Number(val);
  }
  saveLocalData();

  // Update input styling and tooltip directly
  inputEl.className = `holistic-score-input ${getHolisticSelectColorClass(val)}`;
  const titleText = val === 3 ? 'ระดับคะแนน: 3 (ดีเยี่ยม)' : 
                    val === 2 ? 'ระดับคะแนน: 2 (ดี)' : 
                    val === 1 ? 'ระดับคะแนน: 1 (ผ่าน)' : 
                    val === 0 ? 'ระดับคะแนน: 0 (ไม่ผ่าน)' : 'ยังไม่ระบุคะแนน';
  inputEl.title = titleText;

  // Recalculate summary and update summary cell directly
  const stScores = state.holisticAssessments[storeKey][studentId] || {};
  const scoreValues = def.items.map(item => stScores[item.id] !== undefined ? stScores[item.id] : 3);
  const summary = calculateHolisticSummary(scoreValues);

  const summaryEl = document.getElementById(`holistic-summary-${studentId}`);
  if (summaryEl) {
    summaryEl.innerHTML = `
      <span class="px-2.5 py-1 rounded-full text-xs font-extrabold border shadow-2xs ${summary.badgeClass}">
        ${summary.label}
      </span>
    `;
  }
}

function autoAdvanceHolisticCell(currentInputEl, studentIdx, itemIdx) {
  const allInputs = Array.from(document.querySelectorAll('#holistic-table-body input.holistic-score-input'));
  if (!allInputs.length) return;

  const currentIndex = allInputs.indexOf(currentInputEl);
  if (currentIndex >= 0 && currentIndex + 1 < allInputs.length) {
    const nextInput = allInputs[currentIndex + 1];
    setTimeout(() => {
      nextInput.focus();
      nextInput.select();
    }, 15);
  }
}

window.handleHolisticNumberInput = function(inputEl, studentId, itemId, studentIdx, itemIdx) {
  const student = (state.students || []).find(s => s.id === studentId);
  if (student && student.status === 'ย้ายออก') {
    inputEl.value = '';
    showNotification('นักเรียนมีสถานะ "ย้ายออก" ไม่สามารถประเมินได้');
    return;
  }

  let rawVal = inputEl.value.trim();

  // If user entered more than 1 character, take newest character
  if (rawVal.length > 1) {
    rawVal = rawVal.slice(-1);
    inputEl.value = rawVal;
  }

  // If user cleared the input (empty)
  if (rawVal === '') {
    applyHolisticCellUpdate(inputEl, studentId, itemId, '');
    return;
  }

  // Only allow digits 0, 1, 2, 3
  if (!['0', '1', '2', '3'].includes(rawVal)) {
    // Revert to previously saved value or empty
    const activeTabKey = state.holisticTab || 'traits';
    const activeSem = state.holisticSemester || 'all';
    const storeKey = getHolisticStoreKey(activeSem, activeTabKey);
    const prevVal = state.holisticAssessments?.[storeKey]?.[studentId]?.[itemId];
    inputEl.value = (prevVal !== undefined && prevVal !== null && prevVal !== '') ? prevVal : '';
    return;
  }

  const numVal = parseInt(rawVal, 10);
  applyHolisticCellUpdate(inputEl, studentId, itemId, numVal);

  // Auto-advance focus to next cell!
  autoAdvanceHolisticCell(inputEl, studentIdx, itemIdx);
};
window.handleHolisticKeyDown = function(e, currentInputEl, studentIdx, itemIdx) {
  const allInputs = Array.from(document.querySelectorAll('#holistic-table-body input.holistic-score-input'));
  if (!allInputs.length) return;

  const currentIndex = allInputs.indexOf(currentInputEl);

  if (e.key === 'ArrowRight') {
    e.preventDefault();
    if (currentIndex >= 0 && currentIndex + 1 < allInputs.length) {
      allInputs[currentIndex + 1].focus();
      allInputs[currentIndex + 1].select();
    }
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    if (currentIndex > 0) {
      allInputs[currentIndex - 1].focus();
      allInputs[currentIndex - 1].select();
    }
  } else if (e.key === 'ArrowDown' || e.key === 'Enter') {
    e.preventDefault();
    // Find next student in the same column (itemIdx)
    const nextSameCol = allInputs.find(inp => 
      Number(inp.dataset.itemIdx) === itemIdx && Number(inp.dataset.studentIdx) > studentIdx
    );
    if (nextSameCol) {
      nextSameCol.focus();
      nextSameCol.select();
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    // Find previous student in the same column (itemIdx)
    const prevSameCol = [...allInputs].reverse().find(inp => 
      Number(inp.dataset.itemIdx) === itemIdx && Number(inp.dataset.studentIdx) < studentIdx
    );
    if (prevSameCol) {
      prevSameCol.focus();
      prevSameCol.select();
    }
  } else if (e.key === 'Backspace' || e.key === 'Delete') {
    if (currentInputEl.value === '' && e.key === 'Backspace') {
      if (currentIndex > 0) {
        e.preventDefault();
        allInputs[currentIndex - 1].focus();
        allInputs[currentIndex - 1].select();
      }
    }
  }
};
window.updateHolisticScore = function(studentId, itemId, value) {
  const student = (state.students || []).find(s => s.id === studentId);
  if (student && student.status === 'ย้ายออก') {
    showNotification('นักเรียนมีสถานะ "ย้ายออก" ไม่สามารถประเมินได้');
    return;
  }

  const activeTabKey = state.holisticTab || 'traits';
  const activeSem = state.holisticSemester || 'all';
  const storeKey = getHolisticStoreKey(activeSem, activeTabKey);

  if (!state.holisticAssessments[storeKey]) {
    state.holisticAssessments[storeKey] = {};
  }
  if (!state.holisticAssessments[storeKey][studentId]) {
    state.holisticAssessments[storeKey][studentId] = {};
  }

  const inputEl = document.getElementById(`holistic-input-${studentId}-${itemId}`);
  if (inputEl) {
    inputEl.value = (value !== undefined && value !== null && value !== '') ? value : '';
    applyHolisticCellUpdate(inputEl, studentId, itemId, value);
  } else {
    const numVal = parseInt(value, 10);
    state.holisticAssessments[storeKey][studentId][itemId] = isNaN(numVal) ? 3 : numVal;
    saveLocalData();
  }
};
window.autoEvaluateHolisticByGrade = function() {
  const activeTabKey = state.holisticTab || 'traits';
  const activeSem = state.holisticSemester || 'all';
  const def = HOLISTIC_DEFINITIONS[activeTabKey] || HOLISTIC_DEFINITIONS.traits;
  const storeKey = getHolisticStoreKey(activeSem, activeTabKey);

  const students = getFilteredStudents();
  const activeStudents = students.filter(s => s.status !== 'ย้ายออก');

  if (activeStudents.length === 0) {
    showNotification('ไม่พบนักเรียนสำหรับประเมิน');
    return;
  }

  const maxPossible = activeSem === 'all' ? 100 : 50;
  let count = 0;

  if (!state.holisticAssessments[storeKey]) {
    state.holisticAssessments[storeKey] = {};
  }

  activeStudents.forEach(st => {
    const level = getRecommendedLevelByGrade(st.id, activeSem);

    if (!state.holisticAssessments[storeKey][st.id]) {
      state.holisticAssessments[storeKey][st.id] = {};
    }

    def.items.forEach(item => {
      state.holisticAssessments[storeKey][st.id][item.id] = level;
    });

    count++;
  });

  saveLocalData();
  renderHolisticView();
  showNotification(`⚡ ประเมินอัตโนมัติตามเกรด (${def.title}) สำเร็จ ${count} คน`);
};
window.setAllHolisticLevel = function(level) {
  const activeTabKey = state.holisticTab || 'traits';
  const activeSem = state.holisticSemester || 'all';
  const def = HOLISTIC_DEFINITIONS[activeTabKey] || HOLISTIC_DEFINITIONS.traits;
  const storeKey = getHolisticStoreKey(activeSem, activeTabKey);

  const students = getFilteredStudents();
  const activeStudents = students.filter(s => s.status !== 'ย้ายออก');

  if (!state.holisticAssessments[storeKey]) {
    state.holisticAssessments[storeKey] = {};
  }

  const numLevel = parseInt(level, 10);
  activeStudents.forEach(st => {
    if (!state.holisticAssessments[storeKey][st.id]) {
      state.holisticAssessments[storeKey][st.id] = {};
    }
    def.items.forEach(item => {
      state.holisticAssessments[storeKey][st.id][item.id] = numLevel;
    });
  });

  saveLocalData();
  renderHolisticView();
  showNotification(`⚡ กำหนดระดับ ${numLevel} ให้นักเรียนทุกคนในแท็บนี้เรียบร้อย`);
};
window.saveHolisticAssessments = function() {
  saveLocalData();
  showNotification('💾 บันทึกผลการประเมิน 3 ด้านลงระบบเรียบร้อย');
};
window.exportHolisticExcel = function() {
  if (!window.XLSX) {
    alert('SheetJS Library ยังไม่โหลด');
    return;
  }

  const cur = getActiveCurriculum();
  const currentSemesterFilter = state.holisticSemester || 'all';
  const isAllYear = currentSemesterFilter === 'all';
  const termLabel = isAllYear ? 'ตลอดทั้งปีการศึกษา' : `ภาคเรียนที่ ${currentSemesterFilter}`;
  const fileNameTerm = isAllYear ? 'ทั้งปีการศึกษา' : `เทอม${currentSemesterFilter}`;
  const currentGradeRoom = `${state.currentGrade}/${state.currentRoom}`;
  const students = getFilteredStudents();
  const s = state.settings || DEFAULT_SETTINGS;

  const wb = window.XLSX.utils.book_new();

  // Export all 3 domains as separate sheets
  const tabs = ['traits', 'reading', 'competencies'];
  tabs.forEach(tabKey => {
    const def = HOLISTIC_DEFINITIONS[tabKey];
    const storeKey = getHolisticStoreKey(currentSemesterFilter, tabKey);
    const domainData = state.holisticAssessments[storeKey] || {};
    const headers = ['เลขที่', 'รหัสนักเรียน', 'ชื่อ - สกุล'];
    def.items.forEach(item => {
      headers.push(item.name);
    });
    headers.push('สรุปผลการประเมิน');

    const rows = students.map(student => {
      if (student.status === 'ย้ายออก') {
        const row = [student.student_no, student.id, `${student.name} (ย้ายออก)`];
        def.items.forEach(() => row.push('-'));
        row.push('ย้ายออก');
        return row;
      }

      const stScores = domainData[student.id] || {};
      const row = [student.student_no, student.id, student.name];
      const scoreValues = [];

      def.items.forEach(item => {
        const val = stScores[item.id] !== undefined ? Number(stScores[item.id]) : 3;
        scoreValues.push(val);
        row.push(val);
      });

      const summary = calculateHolisticSummary(scoreValues);
      row.push(summary.label);
      return row;
    });

    const wsData = [
      [`แบบประเมิน${def.title} (${termLabel}) รหัสวิชา ${cur.code} ${cur.name}`],
      [`${s.schoolName || 'โรงเรียนบ้านควนเนียง'} | ปีการศึกษา ${s.academicYear || '2569'} ช่วงเวลา: ${termLabel}`],
      [`ระดับชั้น ${currentGradeRoom} | เกณฑ์ประเมิน: 3=ดีเยี่ยม, 2=ดี, 1=ผ่าน, 0=ไม่ผ่าน | วันที่ออกเอกสาร: ${new Date().toLocaleDateString('th-TH')}`],
      [],
      headers,
      ...rows,
      [],
      ['', '', 'ลงชื่อ...................................................... ครูผู้สอน', `(${s.teacherName || '......................................................'})`],
      ['', '', 'ลงชื่อ...................................................... หัวหน้าฝ่ายวิชาการ', `(${s.academicHeadName || '......................................................'})`],
      ['', '', 'ลงชื่อ...................................................... ผู้อำนวยการโรงเรียน', `(${s.directorName || '......................................................'})`]
    ];

    const ws = window.XLSX.utils.aoa_to_sheet(wsData);
    ws['!cols'] = headers.map((h, i) => i === 2 ? { wch: 28 } : { wch: Math.max(h.length * 2, 12) });
    const safeSheetName = def.title.replace(/[^\u0E00-\u0E7Fa-zA-Z0-9 ]/g, '').trim().substring(0, 31);
    window.XLSX.utils.book_append_sheet(wb, ws, safeSheetName);
  });

  window.XLSX.writeFile(wb, `ปพ5_ประเมิน3ด้าน_${cur.code}_${state.currentGrade.replace('.', '')}_ห้อง${state.currentRoom}_${fileNameTerm}.xlsx`);
  showNotification(`ดาวน์โหลดเอกสารประเมิน 3 ด้าน (${termLabel}) ครบทั้ง 3 แผ่นงานสำเร็จ`);
};
// ------------------------------------------
// View: PP.5 Master Summary (สรุปผล ปพ.5 รวม เกรด & ประเมิน 3 ด้าน)
// ------------------------------------------
function getStudentHolisticSummary(studentId, tabKey) {
  const def = HOLISTIC_DEFINITIONS[tabKey];
  if (!def) return { level: '-', label: 'ยังไม่ประเมิน', badgeClass: 'bg-slate-100 text-slate-500 border-slate-200' };
  const storeKeyAll = getHolisticStoreKey('all', tabKey);
  const storeKey2 = getHolisticStoreKey('2', tabKey);
  const storeKey1 = getHolisticStoreKey('1', tabKey);

  const domainData = state.holisticAssessments?.[storeKeyAll] || 
                     state.holisticAssessments?.[storeKey2] || 
                     state.holisticAssessments?.[storeKey1] || {};
  const stScores = domainData[studentId] || {};
  const scoreValues = def.items.map(item => stScores[item.id] !== undefined ? stScores[item.id] : 3);
  return calculateHolisticSummary(scoreValues);
}

function getGradeBadgeClass(grade) {
  const g = String(grade);
  if (g === '4' || g === '3.5') return 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-black';
  if (g === '3' || g === '2.5') return 'bg-sky-100 text-sky-800 border border-sky-300 font-black';
  if (g === '2' || g === '1.5') return 'bg-blue-100 text-blue-800 border border-blue-300 font-bold';
  if (g === '1') return 'bg-amber-100 text-amber-800 border border-amber-300 font-bold';
  return 'bg-rose-100 text-rose-800 border border-rose-300 font-bold';
}

// PP.5 Control Handlers
window.setPP5SemesterScope = function(scope) {
  state.pp5SemesterScope = scope;
  renderPP5SummaryView();
};
window.setPP5SummaryFilter = function(filter) {
  state.pp5SummaryFilter = filter;
  renderPP5SummaryView();
};
function updatePP5ControlButtons() {
  const scope = state.pp5SemesterScope || 'all';
  const filter = state.pp5SummaryFilter || 'all';

  const scopeActiveCls = 'px-3.5 py-1.5 rounded-lg transition-all bg-white text-blue-700 font-bold shadow-xs cursor-pointer flex items-center gap-1.5';
  const scopeInactiveCls = 'px-3.5 py-1.5 rounded-lg transition-all text-slate-600 hover:text-slate-900 cursor-pointer flex items-center gap-1.5';

  const btnScopeAll = document.getElementById('pp5-scope-btn-all');
  const btnScope1 = document.getElementById('pp5-scope-btn-1');
  const btnScope2 = document.getElementById('pp5-scope-btn-2');

  if (btnScopeAll) btnScopeAll.className = scope === 'all' ? scopeActiveCls : scopeInactiveCls;
  if (btnScope1) btnScope1.className = scope === '1' ? scopeActiveCls : scopeInactiveCls;
  if (btnScope2) btnScope2.className = scope === '2' ? scopeActiveCls : scopeInactiveCls;

  const filterContainer = document.getElementById('pp5-filter-container');
  if (filterContainer) {
    if (scope === 'all') {
      filterContainer.style.display = 'flex';
      filterContainer.style.opacity = '1';
    } else {
      filterContainer.style.display = 'none';
    }
  }

  const filterActiveCls = 'px-3 py-1.5 rounded-lg transition-all bg-white text-slate-900 font-bold shadow-xs cursor-pointer flex items-center gap-1';
  const filterInactiveCls = 'px-3 py-1.5 rounded-lg transition-all text-slate-600 hover:text-slate-900 cursor-pointer flex items-center gap-1';

  const btnFilterAll = document.getElementById('pp5-filter-btn-all');
  const btnFilterScores = document.getElementById('pp5-filter-btn-scores');
  const btnFilterAssess = document.getElementById('pp5-filter-btn-assessments');

  if (btnFilterAll) btnFilterAll.className = filter === 'all' ? filterActiveCls : filterInactiveCls;
  if (btnFilterScores) btnFilterScores.className = filter === 'scores' ? filterActiveCls : filterInactiveCls;
  if (btnFilterAssess) btnFilterAssess.className = filter === 'assessments' ? filterActiveCls : filterInactiveCls;
}

function renderPP5SummaryView() {
  const students = getFilteredStudents();
  const cur = getActiveCurriculum();
  const s = state.settings || DEFAULT_SETTINGS;
  const currentGradeRoom = `${state.currentGrade}/${state.currentRoom}`;
  const scope = state.pp5SemesterScope || 'all';
  const filter = state.pp5SummaryFilter || 'all';

  // 1. Update Dual-Axis Control Buttons
  updatePP5ControlButtons();

  // 2. Dynamic Subtitle & Class Badge
  const subtitleEl = document.getElementById('pp5-summary-sub-title');
  const classBadge = document.getElementById('pp5-summary-class-badge');
  if (scope === '1') {
    if (subtitleEl) {
      subtitleEl.textContent = `โครงสร้างคะแนนภาคเรียนที่ 1: คะแนนเก็บระหว่างภาค (35 คะแนน) + สอบกลางภาค (15 คะแนน) = รวม 50 คะแนนเต็ม • ${cur.title} (${cur.code}) • ระดับชั้น ${currentGradeRoom} • ปีการศึกษา ${s.academicYear || '2569'}`;
    }
    if (classBadge) {
      classBadge.textContent = `ห้อง ${state.currentGrade} • ภาคเรียนที่ 1 (${students.length} คน)`;
    }
  } else if (scope === '2') {
    if (subtitleEl) {
      subtitleEl.textContent = `โครงสร้างคะแนนภาคเรียนที่ 2: คะแนนเก็บระหว่างภาค (35 คะแนน) + สอบปลายภาค (15 คะแนน) = รวม 50 คะแนนเต็ม • ${cur.title} (${cur.code}) • ระดับชั้น ${currentGradeRoom} • ปีการศึกษา ${s.academicYear || '2569'}`;
    }
    if (classBadge) {
      classBadge.textContent = `ห้อง ${state.currentGrade} • ภาคเรียนที่ 2 (${students.length} คน)`;
    }
  } else {
    if (subtitleEl) {
      subtitleEl.textContent = `โครงสร้างสัดส่วนคะแนนรายปี: ภาคเรียนที่ 1 (50 คะแนน) + ภาคเรียนที่ 2 (50 คะแนน) = 100 คะแนนเต็ม • ${cur.title} (${cur.code}) • ระดับชั้น ${currentGradeRoom} • ปีการศึกษา ${s.academicYear || '2569'}`;
    }
    if (classBadge) {
      classBadge.textContent = `ห้อง ${state.currentGrade} • ทั้งปีการศึกษา (${students.length} คน)`;
    }
  }

  // 3. Dynamic Score Proportion KPI Cards
  const kpiContainer = document.getElementById('pp5-kpi-container');
  if (kpiContainer) {
    if (scope === '1') {
      kpiContainer.innerHTML = `
        <div class="bg-blue-950/80 rounded-xl p-3 border border-blue-700 backdrop-blur-xs flex flex-col justify-between">
          <div class="flex items-center justify-between text-xs text-blue-200">
            <span class="font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-blue-400"></span> รวมภาคเรียนที่ 1
            </span>
            <span class="px-1.5 py-0.5 rounded bg-blue-900/80 text-blue-200 font-semibold text-[10px]">เต็มเทอม 1</span>
          </div>
          <div class="mt-2 flex items-baseline justify-between">
            <span class="text-2xl font-black text-white tracking-tight">50 <span class="text-xs font-normal text-blue-300">คะแนน</span></span>
          </div>
          <p class="text-[11px] text-blue-300/80 mt-1">เกณฑ์ผ่าน: 25 คะแนนขึ้นไป (ร้อยละ 50)</p>
        </div>

        <div class="bg-blue-900/50 rounded-xl p-3 border border-blue-600/50 backdrop-blur-xs flex flex-col justify-between">
          <div class="flex items-center justify-between text-xs text-blue-200">
            <span class="font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-cyan-400"></span> คะแนนเก็บระหว่างภาค
            </span>
            <span class="px-1.5 py-0.5 rounded bg-blue-950/80 text-cyan-200 font-semibold text-[10px]">สัดส่วน 70%</span>
          </div>
          <div class="mt-2 flex items-baseline justify-between">
            <span class="text-2xl font-black text-cyan-300 tracking-tight">35 <span class="text-xs font-normal text-cyan-200/80">คะแนน</span></span>
          </div>
          <p class="text-[11px] text-blue-200/80 mt-1">หน่วยการเรียนรู้ที่ 1 - 3</p>
        </div>

        <div class="bg-indigo-950/60 rounded-xl p-3 border border-indigo-700/60 backdrop-blur-xs flex flex-col justify-between">
          <div class="flex items-center justify-between text-xs text-indigo-200">
            <span class="font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-indigo-400"></span> สอบกลางภาคเรียน
            </span>
            <span class="px-1.5 py-0.5 rounded bg-indigo-900/80 text-indigo-200 font-semibold text-[10px]">สัดส่วน 30%</span>
          </div>
          <div class="mt-2 flex items-baseline justify-between">
            <span class="text-2xl font-black text-indigo-300 tracking-tight">15 <span class="text-xs font-normal text-indigo-200/80">คะแนน</span></span>
          </div>
          <p class="text-[11px] text-indigo-200/80 mt-1">ประเมินวัดผลกลางปี</p>
        </div>

        <div class="bg-slate-900/80 rounded-xl p-3 border border-slate-700 backdrop-blur-xs flex flex-col justify-between">
          <div class="flex items-center justify-between text-xs text-slate-300">
            <span class="font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-amber-400"></span> ข้อมูลผู้เรียน
            </span>
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold text-[10px]">สถานะ</span>
          </div>
          <div class="mt-2 flex items-baseline justify-between">
            <span class="text-2xl font-black text-white tracking-tight">${students.length} <span class="text-xs font-normal text-slate-400">คน</span></span>
          </div>
          <p class="text-[11px] text-slate-400 mt-1">ปกติ ${students.filter(x => x.status !== 'ย้ายออก').length} • ย้าย ${students.filter(x => x.status === 'ย้ายออก').length} คน</p>
        </div>
      `;
    } else if (scope === '2') {
      kpiContainer.innerHTML = `
        <div class="bg-purple-950/80 rounded-xl p-3 border border-purple-700 backdrop-blur-xs flex flex-col justify-between">
          <div class="flex items-center justify-between text-xs text-purple-200">
            <span class="font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-purple-400"></span> รวมภาคเรียนที่ 2
            </span>
            <span class="px-1.5 py-0.5 rounded bg-purple-900/80 text-purple-200 font-semibold text-[10px]">เต็มเทอม 2</span>
          </div>
          <div class="mt-2 flex items-baseline justify-between">
            <span class="text-2xl font-black text-white tracking-tight">50 <span class="text-xs font-normal text-purple-300">คะแนน</span></span>
          </div>
          <p class="text-[11px] text-purple-300/80 mt-1">เกณฑ์ผ่าน: 25 คะแนนขึ้นไป (ร้อยละ 50)</p>
        </div>

        <div class="bg-purple-900/50 rounded-xl p-3 border border-purple-600/50 backdrop-blur-xs flex flex-col justify-between">
          <div class="flex items-center justify-between text-xs text-purple-200">
            <span class="font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-fuchsia-400"></span> คะแนนเก็บระหว่างภาค
            </span>
            <span class="px-1.5 py-0.5 rounded bg-purple-950/80 text-fuchsia-200 font-semibold text-[10px]">สัดส่วน 70%</span>
          </div>
          <div class="mt-2 flex items-baseline justify-between">
            <span class="text-2xl font-black text-fuchsia-300 tracking-tight">35 <span class="text-xs font-normal text-fuchsia-200/80">คะแนน</span></span>
          </div>
          <p class="text-[11px] text-purple-200/80 mt-1">หน่วยการเรียนรู้ที่ 4 - 6</p>
        </div>

        <div class="bg-pink-950/60 rounded-xl p-3 border border-pink-700/60 backdrop-blur-xs flex flex-col justify-between">
          <div class="flex items-center justify-between text-xs text-pink-200">
            <span class="font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-pink-400"></span> สอบปลายภาคเรียน
            </span>
            <span class="px-1.5 py-0.5 rounded bg-pink-900/80 text-pink-200 font-semibold text-[10px]">สัดส่วน 30%</span>
          </div>
          <div class="mt-2 flex items-baseline justify-between">
            <span class="text-2xl font-black text-pink-300 tracking-tight">15 <span class="text-xs font-normal text-pink-200/80">คะแนน</span></span>
          </div>
          <p class="text-[11px] text-pink-200/80 mt-1">ประเมินวัดผลปลายปี</p>
        </div>

        <div class="bg-slate-900/80 rounded-xl p-3 border border-slate-700 backdrop-blur-xs flex flex-col justify-between">
          <div class="flex items-center justify-between text-xs text-slate-300">
            <span class="font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-amber-400"></span> ข้อมูลผู้เรียน
            </span>
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold text-[10px]">สถานะ</span>
          </div>
          <div class="mt-2 flex items-baseline justify-between">
            <span class="text-2xl font-black text-white tracking-tight">${students.length} <span class="text-xs font-normal text-slate-400">คน</span></span>
          </div>
          <p class="text-[11px] text-slate-400 mt-1">ปกติ ${students.filter(x => x.status !== 'ย้ายออก').length} • ย้าย ${students.filter(x => x.status === 'ย้ายออก').length} คน</p>
        </div>
      `;
    } else {
      kpiContainer.innerHTML = `
        <div class="bg-blue-950/60 rounded-xl p-3 border border-blue-800/60 backdrop-blur-xs flex flex-col justify-between">
          <div class="flex items-center justify-between text-xs text-blue-200">
            <span class="font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-blue-400"></span> ภาคเรียนที่ 1
            </span>
            <span class="px-1.5 py-0.5 rounded bg-blue-900/80 text-blue-200 font-semibold text-[10px]">สัดส่วน 50%</span>
          </div>
          <div class="mt-2 flex items-baseline justify-between">
            <span class="text-2xl font-black text-white tracking-tight">50 <span class="text-xs font-normal text-blue-300">คะแนน</span></span>
          </div>
          <p class="text-[11px] text-blue-300/80 mt-1">เก็บ 35 • สอบกลางภาค 15</p>
        </div>

        <div class="bg-purple-950/60 rounded-xl p-3 border border-purple-800/60 backdrop-blur-xs flex flex-col justify-between">
          <div class="flex items-center justify-between text-xs text-purple-200">
            <span class="font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-purple-400"></span> ภาคเรียนที่ 2
            </span>
            <span class="px-1.5 py-0.5 rounded bg-purple-900/80 text-purple-200 font-semibold text-[10px]">สัดส่วน 50%</span>
          </div>
          <div class="mt-2 flex items-baseline justify-between">
            <span class="text-2xl font-black text-white tracking-tight">50 <span class="text-xs font-normal text-purple-300">คะแนน</span></span>
          </div>
          <p class="text-[11px] text-purple-300/80 mt-1">เก็บ 35 • สอบปลายภาค 15</p>
        </div>

        <div class="bg-amber-950/40 rounded-xl p-3 border border-amber-600/40 backdrop-blur-xs flex flex-col justify-between">
          <div class="flex items-center justify-between text-xs text-amber-200">
            <span class="font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-amber-400"></span> รวมตลอดปีการศึกษา
            </span>
            <span class="px-1.5 py-0.5 rounded bg-amber-900/80 text-amber-200 font-semibold text-[10px]">100%</span>
          </div>
          <div class="mt-2 flex items-baseline justify-between">
            <span class="text-2xl font-black text-amber-300 tracking-tight">100 <span class="text-xs font-normal text-amber-200/80">คะแนน</span></span>
          </div>
          <p class="text-[11px] text-amber-200/80 mt-1">ตัดเกรด 8 ระดับ (0 - 4)</p>
        </div>

        <div class="bg-emerald-950/50 rounded-xl p-3 border border-emerald-700/50 backdrop-blur-xs flex flex-col justify-between">
          <div class="flex items-center justify-between text-xs text-emerald-200">
            <span class="font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span> ประเมิน 3 ด้าน (สพฐ.)
            </span>
            <span class="px-1.5 py-0.5 rounded bg-emerald-900/80 text-emerald-200 font-semibold text-[10px]">สิ้นปี</span>
          </div>
          <div class="mt-2 flex items-baseline justify-between">
            <span class="text-2xl font-black text-emerald-300 tracking-tight">ผ่านเกณฑ์ <span class="text-xs font-normal text-emerald-200/80">ระดับ 1-3</span></span>
          </div>
          <p class="text-[11px] text-emerald-300/80 mt-1">คุณลักษณะ • อ่านคิดฯ • สมรรถนะ</p>
        </div>
      `;
    }
  }

  // 4. Dynamic Master Table Header
  const theadEl = document.getElementById('pp5-summary-table-head');
  if (theadEl) {
    if (scope === '1') {
      theadEl.innerHTML = `
        <tr>
          <th rowspan="2" class="col-sticky-1 w-12 text-center text-xs font-bold py-2.5 px-3">เลขที่</th>
          <th rowspan="2" class="col-sticky-2 min-w-[170px] text-left text-xs font-bold py-2.5 px-4">ชื่อ - นามสกุล</th>
          <th colspan="2" class="th-term1-group text-center text-xs font-bold py-2 px-3">📘 ภาคเรียนที่ 1 (50 คะแนน)</th>
          <th rowspan="2" class="th-year-group text-center text-xs font-extrabold py-2 px-3 min-w-[90px]">
            รวมเทอม 1<br><span class="text-[10px] text-amber-300 font-normal">(50 คะแนน)</span>
          </th>
          <th rowspan="2" class="th-year-sub text-center text-xs font-bold py-2 px-3 min-w-[70px]">
            ร้อยละ<br><span class="text-[10px] text-amber-200 font-normal">(%)</span>
          </th>
          <th rowspan="2" class="th-verdict text-center text-xs font-bold py-2 px-3 min-w-[90px]">สถานะ</th>
        </tr>
        <tr>
          <th class="th-term1-sub text-center text-[11px] font-semibold py-1.5 px-2.5 min-w-[75px]">เก็บ (35)</th>
          <th class="th-term1-sub text-center text-[11px] font-semibold py-1.5 px-2.5 min-w-[75px]">กลางภาค (15)</th>
        </tr>
      `;
    } else if (scope === '2') {
      theadEl.innerHTML = `
        <tr>
          <th rowspan="2" class="col-sticky-1 w-12 text-center text-xs font-bold py-2.5 px-3">เลขที่</th>
          <th rowspan="2" class="col-sticky-2 min-w-[170px] text-left text-xs font-bold py-2.5 px-4">ชื่อ - นามสกุล</th>
          <th colspan="2" class="th-term2-group text-center text-xs font-bold py-2 px-3">🟣 ภาคเรียนที่ 2 (50 คะแนน)</th>
          <th rowspan="2" class="th-year-group text-center text-xs font-extrabold py-2 px-3 min-w-[90px]">
            รวมเทอม 2<br><span class="text-[10px] text-amber-300 font-normal">(50 คะแนน)</span>
          </th>
          <th rowspan="2" class="th-year-sub text-center text-xs font-bold py-2 px-3 min-w-[70px]">
            ร้อยละ<br><span class="text-[10px] text-amber-200 font-normal">(%)</span>
          </th>
          <th rowspan="2" class="th-verdict text-center text-xs font-bold py-2 px-3 min-w-[90px]">สถานะ</th>
        </tr>
        <tr>
          <th class="th-term2-sub text-center text-[11px] font-semibold py-1.5 px-2.5 min-w-[75px]">เก็บ (35)</th>
          <th class="th-term2-sub text-center text-[11px] font-semibold py-1.5 px-2.5 min-w-[75px]">ปลายภาค (15)</th>
        </tr>
      `;
    } else {
      // Scope: All Year
      if (filter === 'scores') {
        theadEl.innerHTML = `
          <tr>
            <th rowspan="2" class="col-sticky-1 w-12 text-center text-xs font-bold py-2.5 px-3">เลขที่</th>
            <th rowspan="2" class="col-sticky-2 min-w-[170px] text-left text-xs font-bold py-2.5 px-4">ชื่อ - นามสกุล</th>
            <th colspan="2" class="th-term1-group text-center text-xs font-bold py-2 px-3">📘 ภาคเรียนที่ 1 (50 คะแนน)</th>
            <th colspan="2" class="th-term2-group text-center text-xs font-bold py-2 px-3">🟣 ภาคเรียนที่ 2 (50 คะแนน)</th>
            <th colspan="3" class="th-year-group text-center text-xs font-extrabold py-2 px-3">🏆 สรุปตลอดปี (100 คะแนน)</th>
            <th rowspan="2" class="th-verdict text-center text-xs font-bold py-2 px-3 min-w-[90px]">ผลการตัดสิน</th>
          </tr>
          <tr>
            <th class="th-term1-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[65px]">เก็บ (35)</th>
            <th class="th-term1-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[65px]">กลางภาค (15)</th>
            <th class="th-term2-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[65px]">เก็บ (35)</th>
            <th class="th-term2-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[65px]">ปลายภาค (15)</th>
            <th class="th-year-sub text-center text-[11px] font-bold py-1.5 px-2.5 min-w-[65px]">รวม (100)</th>
            <th class="th-year-sub text-center text-[11px] font-bold py-1.5 px-2 min-w-[55px]">เกรด</th>
            <th class="th-year-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[60px]">เวลา (%)</th>
          </tr>
        `;
      } else if (filter === 'assessments') {
        theadEl.innerHTML = `
          <tr>
            <th rowspan="2" class="col-sticky-1 w-12 text-center text-xs font-bold py-2.5 px-3">เลขที่</th>
            <th rowspan="2" class="col-sticky-2 min-w-[170px] text-left text-xs font-bold py-2.5 px-4">ชื่อ - นามสกุล</th>
            <th colspan="3" class="th-year-group text-center text-xs font-extrabold py-2 px-3">🏆 ผลการเรียนตลอดปี (100 คะแนน)</th>
            <th colspan="3" class="th-holistic-group text-center text-xs font-bold py-2 px-3">⭐ การประเมิน 3 ด้าน (สพฐ.)</th>
            <th rowspan="2" class="th-verdict text-center text-xs font-bold py-2 px-3 min-w-[90px]">ผลการตัดสิน</th>
          </tr>
          <tr>
            <th class="th-year-sub text-center text-[11px] font-bold py-1.5 px-2.5 min-w-[65px]">รวม (100)</th>
            <th class="th-year-sub text-center text-[11px] font-bold py-1.5 px-2 min-w-[55px]">เกรด</th>
            <th class="th-year-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[60px]">เวลา (%)</th>
            <th class="th-holistic-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[90px]">คุณลักษณะฯ</th>
            <th class="th-holistic-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[95px]">อ่าน คิดฯ เขียน</th>
            <th class="th-holistic-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[90px]">สมรรถนะสำคัญ</th>
          </tr>
        `;
      } else {
        // Default: Full combined master table
        theadEl.innerHTML = `
          <tr>
            <th rowspan="2" class="col-sticky-1 w-12 text-center text-xs font-bold py-2.5 px-3">เลขที่</th>
            <th rowspan="2" class="col-sticky-2 min-w-[170px] text-left text-xs font-bold py-2.5 px-4">ชื่อ - นามสกุล</th>
            <th colspan="2" class="th-term1-group text-center text-xs font-bold py-2 px-3">📘 ภาคเรียนที่ 1 (50 คะแนน)</th>
            <th colspan="2" class="th-term2-group text-center text-xs font-bold py-2 px-3">🟣 ภาคเรียนที่ 2 (50 คะแนน)</th>
            <th colspan="3" class="th-year-group text-center text-xs font-extrabold py-2 px-3">🏆 สรุปตลอดปี (100 คะแนน)</th>
            <th colspan="3" class="th-holistic-group text-center text-xs font-bold py-2 px-3">⭐ การประเมิน 3 ด้าน (สพฐ.)</th>
            <th rowspan="2" class="th-verdict text-center text-xs font-bold py-2 px-3 min-w-[90px]">ผลการตัดสิน</th>
          </tr>
          <tr>
            <th class="th-term1-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[65px]">เก็บ (35)</th>
            <th class="th-term1-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[65px]">กลางภาค (15)</th>
            <th class="th-term2-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[65px]">เก็บ (35)</th>
            <th class="th-term2-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[65px]">ปลายภาค (15)</th>
            <th class="th-year-sub text-center text-[11px] font-bold py-1.5 px-2.5 min-w-[65px]">รวม (100)</th>
            <th class="th-year-sub text-center text-[11px] font-bold py-1.5 px-2 min-w-[55px]">เกรด</th>
            <th class="th-year-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[60px]">เวลา (%)</th>
            <th class="th-holistic-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[90px]">คุณลักษณะฯ</th>
            <th class="th-holistic-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[95px]">อ่าน คิดฯ เขียน</th>
            <th class="th-holistic-sub text-center text-[11px] font-semibold py-1.5 px-2 min-w-[90px]">สมรรถนะสำคัญ</th>
          </tr>
        `;
      }
    }
  }

  // 5. Dynamic Master Table Body
  const tbody = document.getElementById('pp5-summary-table-body');
  if (!tbody) return;

  const totalCols = scope === '1' ? 7 : scope === '2' ? 7 : (filter === 'scores' ? 10 : (filter === 'assessments' ? 9 : 13));

  if (students.length === 0) {
    tbody.innerHTML = `<tr><td colspan="${totalCols}" class="text-center py-10 text-slate-400">ไม่พบข้อมูลนักเรียน</td></tr>`;
    return;
  }

  const t1Units = getActiveUnitsForSemester('1');
  const t2Units = getActiveUnitsForSemester('2');

  tbody.innerHTML = students.map(student => {
    const isTransferred = student.status === 'ย้ายออก';

    // Transferred Student Handling
    if (isTransferred) {
      if (scope === '1' || scope === '2') {
        return `
          <tr class="border-b border-slate-100 bg-slate-50/40 opacity-75 group">
            <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">${student.student_no}</td>
            <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">
              <div class="flex items-center gap-1.5 truncate max-w-[160px]">
                <span class="line-through text-slate-500 truncate">${student.name}</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold border border-slate-300 shrink-0">ย้ายออก</span>
              </div>
            </td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2.5 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-3 text-center text-xs font-semibold text-slate-500 bg-slate-50">
              <span class="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-300">ย้ายออก</span>
            </td>
          </tr>
        `;
      } else if (filter === 'scores') {
        return `
          <tr class="border-b border-slate-100 bg-slate-50/40 opacity-75 group">
            <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">${student.student_no}</td>
            <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">
              <div class="flex items-center gap-1.5 truncate max-w-[160px]">
                <span class="line-through text-slate-500 truncate">${student.name}</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold border border-slate-300 shrink-0">ย้ายออก</span>
              </div>
            </td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2.5 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-3 text-center text-xs font-semibold text-slate-500 bg-slate-50">
              <span class="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-300">ย้ายออก</span>
            </td>
          </tr>
        `;
      } else if (filter === 'assessments') {
        return `
          <tr class="border-b border-slate-100 bg-slate-50/40 opacity-75 group">
            <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">${student.student_no}</td>
            <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">
              <div class="flex items-center gap-1.5 truncate max-w-[160px]">
                <span class="line-through text-slate-500 truncate">${student.name}</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold border border-slate-300 shrink-0">ย้ายออก</span>
              </div>
            </td>
            <td class="py-2.5 px-2.5 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-3 text-center text-xs font-semibold text-slate-500 bg-slate-50">
              <span class="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-300">ย้ายออก</span>
            </td>
          </tr>
        `;
      } else {
        return `
          <tr class="border-b border-slate-100 bg-slate-50/40 opacity-75 group">
            <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">${student.student_no}</td>
            <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">
              <div class="flex items-center gap-1.5 truncate max-w-[160px]">
                <span class="line-through text-slate-500 truncate">${student.name}</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold border border-slate-300 shrink-0">ย้ายออก</span>
              </div>
            </td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2.5 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-2 text-center text-slate-400 border-r border-slate-100 bg-slate-50/50">-</td>
            <td class="py-2.5 px-3 text-center text-xs font-semibold text-slate-500 bg-slate-50">
              <span class="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-300">ย้ายออก</span>
            </td>
          </tr>
        `;
      }
    }

    // Term 1 calculation
    const calcT1 = calculateStudentUnitScores(student.id, '1');
    let t1Regular = 0;
    let t1Midterm = 0;
    t1Units.forEach(u => {
      const uKey = String(u.unitNo !== undefined ? u.unitNo : u.name);
      const res = calcT1.units[uKey] || {};
      const score = res.scaledScore || 0;
      if (u.unitNo === 'midterm' || u.name.includes('กลาง')) {
        t1Midterm += score;
      } else {
        t1Regular += score;
      }
    });
    t1Regular = Math.round(t1Regular);
    t1Midterm = Math.round(t1Midterm);
    const t1Total = Math.round(t1Regular + t1Midterm);
    const t1Pct = Math.round((t1Total / 50) * 100);

    // Term 2 calculation
    const calcT2 = calculateStudentUnitScores(student.id, '2');
    let t2Regular = 0;
    let t2Final = 0;
    t2Units.forEach(u => {
      const uKey = String(u.unitNo !== undefined ? u.unitNo : u.name);
      const res = calcT2.units[uKey] || {};
      const score = res.scaledScore || 0;
      if (u.unitNo === 'final' || u.name.includes('ปลาย')) {
        t2Final += score;
      } else {
        t2Regular += score;
      }
    });
    t2Regular = Math.round(t2Regular);
    t2Final = Math.round(t2Final);
    const t2Total = Math.round(t2Regular + t2Final);
    const t2Pct = Math.round((t2Total / 50) * 100);

    // Full Year Total & Grade
    const grandTotal = Math.round(t1Total + t2Total);
    const grade = calculateGrade(grandTotal, 100);

    // Attendance
    const attStats = getStudentAttendanceStats(student.id);
    const isAtRisk = attStats.isAtRisk;

    // 3 Holistic Assessment Summaries (Evaluated at Year End)
    const traitsSum = getStudentHolisticSummary(student.id, 'traits');
    const readingSum = getStudentHolisticSummary(student.id, 'reading');
    const compSum = getStudentHolisticSummary(student.id, 'competencies');

    // Final Evaluation Verdict (Full Year)
    let verdict = { label: '✅ ผ่าน', badgeClass: 'bg-emerald-500 text-white shadow-2xs font-bold' };
    if (isAtRisk) {
      verdict = { label: '⚠️ มส.', badgeClass: 'bg-amber-500 text-white shadow-2xs font-bold' };
    } else if (grade === '0' || traitsSum.level === '0' || readingSum.level === '0' || compSum.level === '0') {
      verdict = { label: '❌ ไม่ผ่าน', badgeClass: 'bg-rose-500 text-white shadow-2xs font-bold' };
    }

    // Single Semester 1 View
    if (scope === '1') {
      const isPassT1 = t1Total >= 25;
      return `
        <tr class="border-b border-slate-100 hover:bg-slate-50/70 transition-colors group">
          <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">${student.student_no}</td>
          <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">
            <div class="truncate max-w-[160px] font-medium">${student.name}</div>
          </td>
          <td class="py-2.5 px-2 text-center text-blue-900 font-bold border-r border-blue-100 bg-blue-50/30">${t1Regular}</td>
          <td class="py-2.5 px-2 text-center text-blue-900 font-bold border-r border-slate-200 bg-blue-50/30">${t1Midterm}</td>
          <td class="py-2.5 px-2.5 text-center font-extrabold text-blue-900 border-r border-amber-100 bg-amber-50/30 text-base">${t1Total}</td>
          <td class="py-2.5 px-2 text-center text-xs font-semibold text-slate-700 border-r border-slate-200">${t1Pct}%</td>
          <td class="py-2.5 px-3 text-center text-xs font-semibold">
            <span class="px-2.5 py-1 rounded-full text-xs ${isPassT1 ? 'bg-emerald-500 text-white font-bold' : 'bg-rose-500 text-white font-bold'}">
              ${isPassT1 ? '✅ ผ่าน' : '❌ ต้องปรับปรุง'}
            </span>
          </td>
        </tr>
      `;
    }

    // Single Semester 2 View
    if (scope === '2') {
      const isPassT2 = t2Total >= 25;
      return `
        <tr class="border-b border-slate-100 hover:bg-slate-50/70 transition-colors group">
          <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">${student.student_no}</td>
          <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">
            <div class="truncate max-w-[160px] font-medium">${student.name}</div>
          </td>
          <td class="py-2.5 px-2 text-center text-purple-900 font-bold border-r border-purple-100 bg-purple-50/30">${t2Regular}</td>
          <td class="py-2.5 px-2 text-center text-purple-900 font-bold border-r border-slate-200 bg-purple-50/30">${t2Final}</td>
          <td class="py-2.5 px-2.5 text-center font-extrabold text-purple-900 border-r border-amber-100 bg-amber-50/30 text-base">${t2Total}</td>
          <td class="py-2.5 px-2 text-center text-xs font-semibold text-slate-700 border-r border-slate-200">${t2Pct}%</td>
          <td class="py-2.5 px-3 text-center text-xs font-semibold">
            <span class="px-2.5 py-1 rounded-full text-xs ${isPassT2 ? 'bg-emerald-500 text-white font-bold' : 'bg-rose-500 text-white font-bold'}">
              ${isPassT2 ? '✅ ผ่าน' : '❌ ต้องปรับปรุง'}
            </span>
          </td>
        </tr>
      `;
    }

    // Full Year: Filter = Scores Only
    if (filter === 'scores') {
      return `
        <tr class="border-b border-slate-100 hover:bg-slate-50/70 transition-colors group">
          <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">${student.student_no}</td>
          <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">
            <div class="truncate max-w-[160px] font-medium">${student.name}</div>
          </td>
          <!-- ภาคเรียนที่ 1 -->
          <td class="py-2.5 px-2 text-center text-blue-900 font-bold border-r border-blue-100 bg-blue-50/30">${t1Regular}</td>
          <td class="py-2.5 px-2 text-center text-blue-900 font-bold border-r border-slate-200 bg-blue-50/30">${t1Midterm}</td>
          <!-- ภาคเรียนที่ 2 -->
          <td class="py-2.5 px-2 text-center text-purple-900 font-bold border-r border-purple-100 bg-purple-50/30">${t2Regular}</td>
          <td class="py-2.5 px-2 text-center text-purple-900 font-bold border-r border-slate-200 bg-purple-50/30">${t2Final}</td>
          <!-- สรุปตลอดปี -->
          <td class="py-2.5 px-2.5 text-center font-extrabold text-amber-600 border-r border-amber-100 bg-amber-50/30 text-base">${grandTotal}</td>
          <td class="py-2.5 px-2 text-center border-r border-amber-100 bg-amber-50/30">
            <span class="px-2 py-0.5 rounded-full text-xs font-black ${getGradeBadgeClass(grade)}">${grade}</span>
          </td>
          <td class="py-2.5 px-2 text-center text-xs font-semibold ${isAtRisk ? 'text-rose-600 font-bold' : 'text-slate-600'} border-r border-slate-200">${attStats.percentage}%</td>
          <!-- ผลการตัดสิน -->
          <td class="py-2.5 px-3 text-center text-xs font-semibold">
            <span class="px-2.5 py-1 rounded-full text-xs ${verdict.badgeClass}">
              ${verdict.label}
            </span>
          </td>
        </tr>
      `;
    }

    // Full Year: Filter = Assessments Only
    if (filter === 'assessments') {
      return `
        <tr class="border-b border-slate-100 hover:bg-slate-50/70 transition-colors group">
          <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">${student.student_no}</td>
          <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">
            <div class="truncate max-w-[160px] font-medium">${student.name}</div>
          </td>
          <!-- สรุปตลอดปี -->
          <td class="py-2.5 px-2.5 text-center font-extrabold text-amber-600 border-r border-amber-100 bg-amber-50/30 text-base">${grandTotal}</td>
          <td class="py-2.5 px-2 text-center border-r border-amber-100 bg-amber-50/30">
            <span class="px-2 py-0.5 rounded-full text-xs font-black ${getGradeBadgeClass(grade)}">${grade}</span>
          </td>
          <td class="py-2.5 px-2 text-center text-xs font-semibold ${isAtRisk ? 'text-rose-600 font-bold' : 'text-slate-600'} border-r border-slate-200">${attStats.percentage}%</td>
          <!-- ประเมิน 3 ด้าน -->
          <td class="py-2 px-1 text-center border-r border-emerald-50 bg-emerald-50/20">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-bold border ${traitsSum.badgeClass}">${traitsSum.label}</span>
          </td>
          <td class="py-2 px-1 text-center border-r border-emerald-50 bg-emerald-50/20">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-bold border ${readingSum.badgeClass}">${readingSum.label}</span>
          </td>
          <td class="py-2 px-1 text-center border-r border-slate-200 bg-emerald-50/20">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-bold border ${compSum.badgeClass}">${compSum.label}</span>
          </td>
          <!-- ผลการตัดสิน -->
          <td class="py-2.5 px-3 text-center text-xs font-semibold">
            <span class="px-2.5 py-1 rounded-full text-xs ${verdict.badgeClass}">
              ${verdict.label}
            </span>
          </td>
        </tr>
      `;
    }

    // Full Year: Default All Combined Master Table
    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/70 transition-colors group">
        <td class="col-sticky-1 py-2.5 px-3 font-semibold text-slate-700 text-center bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">${student.student_no}</td>
        <td class="col-sticky-2 py-2.5 px-4 font-medium text-slate-900 bg-white group-hover:bg-slate-50 border-r border-slate-200 text-sm">
          <div class="truncate max-w-[160px] font-medium">${student.name}</div>
        </td>
        
        <!-- ภาคเรียนที่ 1 -->
        <td class="py-2.5 px-2 text-center text-blue-900 font-bold border-r border-blue-100 bg-blue-50/30">${t1Regular}</td>
        <td class="py-2.5 px-2 text-center text-blue-900 font-bold border-r border-slate-200 bg-blue-50/30">${t1Midterm}</td>

        <!-- ภาคเรียนที่ 2 -->
        <td class="py-2.5 px-2 text-center text-purple-900 font-bold border-r border-purple-100 bg-purple-50/30">${t2Regular}</td>
        <td class="py-2.5 px-2 text-center text-purple-900 font-bold border-r border-slate-200 bg-purple-50/30">${t2Final}</td>

        <!-- สรุปตลอดปี -->
        <td class="py-2.5 px-2.5 text-center font-extrabold text-amber-600 border-r border-amber-100 bg-amber-50/30 text-base">${grandTotal}</td>
        <td class="py-2.5 px-2 text-center border-r border-amber-100 bg-amber-50/30">
          <span class="px-2 py-0.5 rounded-full text-xs font-black ${getGradeBadgeClass(grade)}">${grade}</span>
        </td>
        <td class="py-2.5 px-2 text-center text-xs font-semibold ${isAtRisk ? 'text-rose-600 font-bold' : 'text-slate-600'} border-r border-slate-200">${attStats.percentage}%</td>

        <!-- ประเมิน 3 ด้าน -->
        <td class="py-2 px-1 text-center border-r border-emerald-50 bg-emerald-50/20">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-bold border ${traitsSum.badgeClass}">${traitsSum.label}</span>
        </td>
        <td class="py-2 px-1 text-center border-r border-emerald-50 bg-emerald-50/20">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-bold border ${readingSum.badgeClass}">${readingSum.label}</span>
        </td>
        <td class="py-2 px-1 text-center border-r border-slate-200 bg-emerald-50/20">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-bold border ${compSum.badgeClass}">${compSum.label}</span>
        </td>

        <!-- ผลการตัดสิน -->
        <td class="py-2.5 px-3 text-center text-xs font-semibold">
          <span class="px-2.5 py-1 rounded-full text-xs ${verdict.badgeClass}">
            ${verdict.label}
          </span>
        </td>
      </tr>
    `;
  }).join('');

  // 6. Dynamic Legend Footer
  const legendEl = document.getElementById('pp5-summary-legend-footer');
  if (legendEl) {
    if (scope === 'all') {
      legendEl.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="text-amber-500 font-bold">💡</span>
          <span><strong>เกณฑ์ตัดสินผลการเรียน สพฐ.:</strong> 1) เวลาเรียน &ge; 80% (ไม่ติด มส.) • 2) เกรด &ge; 1.0 (คะแนนรวม &ge; 50) • 3) ผลการประเมิน 3 ด้านต้องอยู่ในระดับ "ผ่าน (1)" ขึ้นไปทุกด้าน</span>
        </div>
        <div class="flex items-center gap-3 font-semibold text-[11px]">
          <span class="inline-flex items-center gap-1 text-emerald-600"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> 3=ดีเยี่ยม</span>
          <span class="inline-flex items-center gap-1 text-blue-600"><span class="w-2 h-2 rounded-full bg-blue-500"></span> 2=ดี</span>
          <span class="inline-flex items-center gap-1 text-amber-600"><span class="w-2 h-2 rounded-full bg-amber-500"></span> 1=ผ่าน</span>
          <span class="inline-flex items-center gap-1 text-rose-600"><span class="w-2 h-2 rounded-full bg-rose-500"></span> 0=ไม่ผ่าน</span>
        </div>
      `;
    } else {
      const termLabel = scope === '1' ? 'ภาคเรียนที่ 1' : 'ภาคเรียนที่ 2';
      const examLabel = scope === '1' ? 'กลางภาค' : 'ปลายภาค';
      legendEl.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="text-blue-500 font-bold">💡</span>
          <span><strong>สรุปคะแนน${termLabel}:</strong> คะแนนเต็ม 50 คะแนน (คะแนนเก็บ 35 + สอบ${examLabel} 15) • <em class="text-slate-600 font-medium">หมายเหตุ: ผลการประเมินคุณลักษณะ 3 ด้านจะสรุปและตัดสินใน "ทั้งปีการศึกษา"</em></span>
        </div>
        <div class="flex items-center gap-3 font-semibold text-[11px]">
          <span class="inline-flex items-center gap-1 text-blue-700"><span class="w-2 h-2 rounded-full bg-blue-600"></span> คะแนนเต็ม 50 คะแนน</span>
          <span class="inline-flex items-center gap-1 text-emerald-600"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> เกณฑ์ผ่าน 25 คะแนนขึ้นไป (&ge; 50%)</span>
        </div>
      `;
    }
  }
}

// ------------------------------------------
// View 3: Lesson Logs
// ------------------------------------------
function renderLessonLogsView() {
  const currentGradeRoom = `${state.currentGrade}/${state.currentRoom}`;
  const cur = getActiveCurriculum();

  document.getElementById('log-grade-room-label').textContent = `${cur.code} ${cur.name} (${currentGradeRoom})`;
  document.getElementById('log-date-input').value = new Date().toISOString().split('T')[0];

  const topicSelect = document.getElementById('log-quick-topic-select');
  if (topicSelect) {
    const topics = getActiveTopics();
    topicSelect.innerHTML = `
      <option value="">-- หรือเลือกสาระการเรียนรู้จากโครงสร้างรายวิชา --</option>
      ${topics.map(t => `<option value="${t.topic}">[${t.unitName}] ${t.topic}</option>`).join('')}
    `;
  }

  const listContainer = document.getElementById('lesson-logs-history-list');
  if (!listContainer) return;

  const logs = (state.lessonLogs || []).filter(l => 
    l.grade_room === currentGradeRoom || 
    l.grade_room === state.currentGrade || 
    (l.grade_room && l.grade_room.startsWith(`${state.currentGrade}/`))
  );

  if (logs.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
        <p class="text-slate-500 font-medium">ยังไม่มีบันทึกหลังสอนของห้อง ${currentGradeRoom}</p>
        <p class="text-xs text-slate-400 mt-1">สามารถเลือกเนื้อหาจากโครงสร้างรายวิชา หรือกรอกฟอร์มเพื่อบันทึก</p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = logs.map((log, idx) => `
    <div class="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all">
      <div class="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
            ${log.grade_room}
          </span>
          <span class="text-xs font-medium text-slate-500">
            📅 ${formatThaiDate(log.date)}
          </span>
        </div>
        <button onclick="deleteLessonLog(${log.id || idx})" class="text-slate-400 hover:text-red-500 text-xs p-1 rounded-lg hover:bg-red-50 transition-colors">
          ลบ
        </button>
      </div>

      <div class="space-y-3">
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">เนื้อหาที่จัดการเรียนรู้</h4>
          <p class="text-sm font-semibold text-slate-800 mt-0.5 leading-relaxed">${log.topic}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div class="bg-rose-50/70 p-3 rounded-xl border border-rose-100">
            <h5 class="text-xs font-bold text-rose-800 flex items-center gap-1"><span>⚠️</span> ปัญหา / อุปสรรค</h5>
            <p class="text-xs text-slate-700 mt-1 leading-relaxed">${log.problems || 'ไม่มี'}</p>
          </div>
          <div class="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
            <h5 class="text-xs font-bold text-emerald-800 flex items-center gap-1"><span>💡</span> ข้อเสนอแนะ / แนวทางแก้ไข</h5>
            <p class="text-xs text-slate-700 mt-1 leading-relaxed">${log.suggestions || 'ไม่มี'}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

window.applyQuickTopic = function(selectEl) {
  if (selectEl.value) {
    document.getElementById('log-topic-input').value = selectEl.value;
  }
};
window.saveNewLessonLog = async function(e) {
  if (e) e.preventDefault();
  const cur = getActiveCurriculum();
  const date = document.getElementById('log-date-input').value;
  const gradeRoom = `${state.currentGrade}/${state.currentRoom}`;
  const topic = document.getElementById('log-topic-input').value.trim();
  const problems = document.getElementById('log-problems-input').value.trim();
  const suggestions = document.getElementById('log-suggestions-input').value.trim();

  if (!topic) {
    alert('กรุณากรอกหรือเลือกเนื้อหาที่สอนประจำวัน');
    return;
  }

  const newLog = {
    id: Date.now(),
    date: date || new Date().toISOString().split('T')[0],
    subject_code: cur.code,
    grade_room: gradeRoom,
    topic: topic,
    problems: problems,
    suggestions: suggestions,
    created_at: new Date().toISOString()
  };
  state.lessonLogs.unshift(newLog);
  saveLocalData();

  document.getElementById('log-topic-input').value = '';
  document.getElementById('log-problems-input').value = '';
  document.getElementById('log-suggestions-input').value = '';
  document.getElementById('log-quick-topic-select').value = '';

  renderLessonLogsView();
  showNotification('บันทึกผลการจัดการเรียนรู้สำเร็จ');
};
window.deleteLessonLog = async function(logId) {
  if (!confirm('ต้องการลบบันทึกหลังสอนนี้ใช่หรือไม่?')) return;
  state.lessonLogs = state.lessonLogs.filter(l => (l.id || 0) !== logId);
  saveLocalData();
  renderLessonLogsView();
};
// ==========================================
// View: Dashboard (🏠 แดชบอร์ดภาพรวมและศูนย์ควบคุมงานสอน)
// ==========================================
window.setAttendanceDateToToday = function() {
  const todayStr = new Date().toISOString().split('T')[0];
  state.selectedDate = todayStr;
  const picker = document.getElementById('att-date-picker');
  if (picker) picker.value = todayStr;
  switchView('att_daily');
};
function renderDashboardView() {
  const allStudents = getFilteredStudents();
  const activeStudents = allStudents.filter(s => s.status !== 'ย้ายออก');
  const cur = getActiveCurriculum();
  const s = state.settings || DEFAULT_SETTINGS;
  const todayStr = new Date().toISOString().split('T')[0];
  const thaiToday = formatThaiDateFullDay(todayStr);

  // 1. Header Badges & Info
  const gradeBadge = document.getElementById('dash-grade-badge');
  if (gradeBadge) gradeBadge.textContent = `ห้อง ${state.currentGrade}/${state.currentRoom}`;

  const termBadge = document.getElementById('dash-term-badge');
  if (termBadge) termBadge.textContent = `ภาคเรียนที่ ${state.currentSemester}`;

  const subjName = document.getElementById('dash-subject-name');
  if (subjName) subjName.textContent = `${cur.title} (${cur.code})`;

  const todayDateLabel = document.getElementById('dash-today-thai-date');
  if (todayDateLabel) {
    todayDateLabel.textContent = `${thaiToday.dayName}ที่ ${thaiToday.day} ${thaiToday.month} ${thaiToday.year}`;
  }

  // 2. Today Attendance Status Badge
  const todayBadgeContainer = document.getElementById('dash-today-attendance-badge');
  if (todayBadgeContainer) {
    const todayRecord = state.attendance ? state.attendance[todayStr] : null;
    const isCheckedToday = todayRecord && activeStudents.some(st => todayRecord[st.id] !== undefined);
    const dayStatus = checkDayStatus(todayStr, state.currentGrade);

    if (isCheckedToday) {
      let pCount = 0, lCount = 0, sCount = 0, aCount = 0;
      activeStudents.forEach(st => {
        const val = todayRecord[st.id];
        if (val === '/') pCount++;
        else if (val === 'ล') lCount++;
        else if (val === 'ป') sCount++;
        else if (val === 'ข') aCount++;
      });
      todayBadgeContainer.innerHTML = `
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          ✅ เช็คชื่อวันนี้แล้ว (มา ${pCount} | ขาด ${aCount} | ลา ${lCount} | ป่วย ${sCount})
        </span>
      `;
    } else if (dayStatus && (dayStatus.isNoTeaching || dayStatus.isBreak)) {
      todayBadgeContainer.innerHTML = `
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-300 shadow-2xs">
          🔒 ${dayStatus.reason || 'ไม่มีการเรียนการสอนวันนี้'}
        </span>
      `;
    } else {
      todayBadgeContainer.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shadow-2xs">
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            ⚠️ วันนี้ยังไม่ได้เช็คชื่อ
          </span>
          <button onclick="setAttendanceDateToToday()" class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-2xs transition-all flex items-center gap-1 cursor-pointer">
            <span>📝</span> เช็คชื่อเลย ↗
          </button>
        </div>
      `;
    }
  }

  // 3. KPI Card 1: นักเรียนในห้อง
  const totalStudentsEl = document.getElementById('dash-stat-students-total');
  const detailStudentsEl = document.getElementById('dash-stat-students-detail');
  if (totalStudentsEl) totalStudentsEl.textContent = allStudents.length;
  if (detailStudentsEl) {
    const maleCount = activeStudents.filter(st => st.gender === 'ชาย').length;
    const femaleCount = activeStudents.filter(st => st.gender === 'หญิง').length;
    const transferredCount = allStudents.filter(st => st.status === 'ย้ายออก').length;
    detailStudentsEl.innerHTML = `
      <span>ปกติ ${activeStudents.length} คน (ชาย ${maleCount}, หญิง ${femaleCount})</span>
      ${transferredCount > 0 ? `<span class="text-slate-400">• ย้ายออก ${transferredCount}</span>` : ''}
    `;
  }

  // 4. KPI Card 2: เวลาเรียนเฉลี่ยรวม
  let totalPres = 0, totalLeave = 0, totalSick = 0, totalAbs = 0;
  let sumAttPercent = 0, countAttRecorded = 0;
  const atRiskStudents = [];

  activeStudents.forEach(st => {
    const attStats = getStudentAttendanceStats(st.id);
    if (attStats.hasRecords && attStats.percentageNum !== undefined) {
      sumAttPercent += attStats.percentageNum;
      countAttRecorded++;
    }
    totalPres += (attStats.presentDays || 0);
    totalLeave += (attStats.leaveDays || 0);
    totalSick += (attStats.sickDays || 0);
    totalAbs += (attStats.absentDays || 0);

    if (attStats.isAtRisk) {
      atRiskStudents.push({ ...st, attStats });
    }
  });

  const avgAttRate = countAttRecorded > 0 ? Math.round((sumAttPercent / countAttRecorded) * 10) / 10 : 100;
  const attRateEl = document.getElementById('dash-stat-att-rate');
  const attDetailEl = document.getElementById('dash-stat-att-detail');
  if (attRateEl) {
    attRateEl.textContent = `${avgAttRate}%`;
    attRateEl.className = avgAttRate < 80 ? 'text-3xl font-extrabold text-rose-600' : 'text-3xl font-extrabold text-emerald-600';
  }
  if (attDetailEl) {
    if (atRiskStudents.length > 0) {
      attDetailEl.innerHTML = `<span class="text-rose-600 font-semibold">⚠️ เสี่ยง มส. ${atRiskStudents.length} คน (< 80%)</span>`;
    } else {
      attDetailEl.innerHTML = `<span class="text-emerald-700">✅ เวลาเรียนผ่านเกณฑ์ 80% ทุกคน</span>`;
    }
  }

  // 5. KPI Card 3: ความคืบหน้าตัวชี้วัด (วัดผลแล้วกี่ตัว)
  const indicators = getActiveIndicators();
  let scoredIndCount = 0;
  indicators.forEach(ind => {
    const hasScore = activeStudents.some(st => state.scores[st.id] && state.scores[st.id][ind.id] !== undefined && state.scores[st.id][ind.id] !== '');
    if (hasScore) scoredIndCount++;
  });
  const scoreProgEl = document.getElementById('dash-stat-score-progress');
  const scoreDetailEl = document.getElementById('dash-stat-score-detail');
  const scoreProgPct = Math.round((scoredIndCount / (indicators.length || 1)) * 100);
  if (scoreProgEl) scoreProgEl.textContent = `${scoredIndCount}/${indicators.length}`;
  if (scoreDetailEl) scoreDetailEl.textContent = `บันทึกคะแนนแล้ว ${scoreProgPct}% (${indicators.length - scoredIndCount} ตัวชี้วัดคงเหลือ)`;

  // 6. KPI Card 4: ความพร้อมเล่ม ปพ.5
  const pp5StatusEl = document.getElementById('dash-stat-pp5-status');
  const pp5DetailEl = document.getElementById('dash-stat-pp5-detail');
  if (pp5StatusEl) {
    if (scoreProgPct >= 80 && atRiskStudents.length === 0) {
      pp5StatusEl.textContent = 'พร้อมออก ปพ.5';
      pp5StatusEl.className = 'text-2xl font-extrabold text-emerald-600';
    } else if (scoreProgPct >= 50) {
      pp5StatusEl.textContent = 'กำลังดำเนินการ';
      pp5StatusEl.className = 'text-2xl font-extrabold text-blue-600';
    } else {
      pp5StatusEl.textContent = 'รอกรอกคะแนน';
      pp5StatusEl.className = 'text-2xl font-extrabold text-amber-600';
    }
  }
  if (pp5DetailEl) {
    pp5DetailEl.textContent = `ครอบคลุมประเมินผลภาคเรียนที่ ${state.currentSemester}`;
  }

  // 7. Left Column: คาบเรียนตกค้าง
  const missingBox = document.getElementById('dash-missing-attendance-box');
  if (missingBox) {
    const missedDates = typeof getMissedAttendanceDates === 'function' ? getMissedAttendanceDates(state.currentGrade) : [];
    if (missedDates && missedDates.length > 0) {
      missingBox.innerHTML = `
        <div class="bg-amber-50 rounded-2xl p-4 border border-amber-200/90 text-xs shadow-2xs">
          <div class="flex items-center justify-between font-bold text-amber-900 mb-2">
            <span class="flex items-center gap-1.5">
              <span>⏰</span> แจ้งเตือนคาบเรียนตกค้าง (ยังไม่เช็คชื่อ)
            </span>
            <span class="px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900 font-bold">${missedDates.length} คาบ</span>
          </div>
          <div class="flex flex-wrap gap-1.5 mt-2">
            ${missedDates.slice(0, 5).map(d => `
              <button type="button" onclick="goToAttendanceDate('${d}')" class="px-2.5 py-1 rounded-lg bg-white border border-amber-300 hover:bg-amber-100 text-amber-900 font-medium transition-colors cursor-pointer flex items-center gap-1 shadow-2xs">
                <span>📅</span> ${formatDateThaiShort(d)}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      missingBox.innerHTML = '';
    }
  }

  // 8. Left Column: แจ้งเตือนเวลาเรียนต่ำกว่า 80% (สุ่มเสี่ยง มส.)
  const atRiskContainer = document.getElementById('dash-atrisk-container');
  if (atRiskContainer) {
    if (atRiskStudents.length === 0) {
      atRiskContainer.innerHTML = `
        <div class="p-3 bg-emerald-50 rounded-xl text-emerald-800 text-xs font-medium flex items-center gap-2 border border-emerald-200">
          <span>✅</span> ไม่มีนักเรียนที่เวลาเรียนต่ำกว่า 80% ในห้องนี้ (สถานะปกติทุกคน)
        </div>
      `;
    } else {
      atRiskContainer.innerHTML = `
        <div class="space-y-2">
          <p class="text-xs text-rose-700 font-semibold">พบนักเรียนเวลาเรียนต่ำกว่า 80% (ติด มส.) จำนวน ${atRiskStudents.length} คน:</p>
          <div class="divide-y divide-rose-100 bg-rose-50/50 rounded-xl border border-rose-200 p-2 max-h-48 overflow-y-auto">
            ${atRiskStudents.map(st => `
              <div class="py-1.5 px-2 flex items-center justify-between text-xs">
                <span class="font-medium text-slate-800">เลขที่ ${st.student_no} ${st.name}</span>
                <span class="badge-ms">มส. (${st.attStats.percentage}%)</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  // 9. Left Column: จุดที่ควรสอนซ่อมเสริม (ตัวชี้วัดที่คะแนนเฉลี่ยน้อยสุด)
  const weakestBox = document.getElementById('dash-weakest-insight-box');
  if (weakestBox) {
    const indicatorAverages = indicators.map(ind => {
      let sum = 0, count = 0;
      activeStudents.forEach(st => {
        if (state.scores[st.id] && state.scores[st.id][ind.id] !== undefined && state.scores[st.id][ind.id] !== '') {
          sum += Number(state.scores[st.id][ind.id]);
          count++;
        }
      });
      const avg = count > 0 ? (sum / count) : 0;
      const percent = Math.round((avg / (ind.max || 1)) * 100);
      return { id: ind.id, name: ind.name, max: ind.max, avg: Math.round(avg * 10) / 10, percent };
    });

    let weakest = null;
    if (indicatorAverages.length > 0) {
      weakest = indicatorAverages.reduce((min, curr) => curr.percent < min.percent ? curr : min, indicatorAverages[0]);
    }

    if (weakest && weakest.percent < 100) {
      weakestBox.innerHTML = `
        <div class="bg-amber-50/90 p-4 rounded-3xl border border-amber-200/90 shadow-xs space-y-2">
          <div class="flex items-center gap-2 text-xs font-bold text-amber-900">
            <span class="text-base">💡</span>
            <span>จุดที่ควรจัดสอนซ่อมเสริม (คะแนนเฉลี่ยต่ำสุด)</span>
          </div>
          <div class="bg-white/80 p-3 rounded-2xl border border-amber-200 text-xs">
            <h4 class="font-bold text-slate-800">
              <span class="text-rose-600 underline">${weakest.id}</span>: ${weakest.name}
            </h4>
            <p class="text-slate-600 mt-1">
              คะแนนเฉลี่ย <strong>${weakest.avg} / ${weakest.max} คะแนน</strong> (คิดเป็น ${weakest.percent}%)
            </p>
          </div>
          <p class="text-[11px] text-amber-800 leading-relaxed">
            แนะนำจัดกิจกรรมทบทวน หรือเตรียมใบงานเสริมความเข้าใจก่อนสอบวัดผลกลางภาค/ปลายภาค
          </p>
        </div>
      `;
    } else {
      weakestBox.innerHTML = `
        <div class="bg-blue-50/80 p-4 rounded-3xl border border-blue-200 shadow-xs flex items-center gap-2.5 text-xs text-blue-900">
          <span class="text-lg">✨</span>
          <span>คะแนนผลการเรียนทุกตัวชี้วัดอยู่ในเกณฑ์ดีเยี่ยม</span>
        </div>
      `;
    }
  }

  // 10. Right Column Chart 1: สัดส่วนเวลาเรียน (Chart.js Doughnut)
  const attCanvas = document.getElementById('dashAttRatioChartCanvas');
  if (attCanvas && window.Chart) {
    if (state.dashAttChart) state.dashAttChart.destroy();
    const hasData = (totalPres + totalLeave + totalSick + totalAbs) > 0;
    const chartData = hasData ? [totalPres, totalLeave, totalSick, totalAbs] : [1, 0, 0, 0];
    const bgColors = hasData ? ['#10b981', '#f59e0b', '#0ea5e9', '#ef4444'] : ['#e2e8f0', '#e2e8f0', '#e2e8f0', '#e2e8f0'];

    state.dashAttChart = new window.Chart(attCanvas, {
      type: 'doughnut',
      data: {
        labels: ['มาเรียน', 'ลา', 'ป่วย', 'ขาดเรียน'],
        datasets: [{
          data: chartData,
          backgroundColor: bgColors,
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              font: { family: 'Sarabun', size: 12, weight: 'bold' },
              color: '#334155'
            }
          }
        }
      }
    });

    const legendStats = document.getElementById('dash-att-legend-stats');
    if (legendStats) {
      legendStats.innerHTML = `
        <div>
          <span class="text-emerald-600 font-bold block text-sm">${totalPres}</span>
          <span class="text-slate-400 text-[10px]">มา</span>
        </div>
        <div>
          <span class="text-amber-500 font-bold block text-sm">${totalLeave}</span>
          <span class="text-slate-400 text-[10px]">ลา</span>
        </div>
        <div>
          <span class="text-sky-500 font-bold block text-sm">${totalSick}</span>
          <span class="text-slate-400 text-[10px]">ป่วย</span>
        </div>
        <div>
          <span class="text-rose-600 font-bold block text-sm">${totalAbs}</span>
          <span class="text-slate-400 text-[10px]">ขาด</span>
        </div>
      `;
    }
  }

  // 11. Right Column Chart 2: การกระจายระดับผลการเรียน (Chart.js Bar)
  const gradeCanvas = document.getElementById('dashGradeDistChartCanvas');
  if (gradeCanvas && window.Chart) {
    if (state.dashGradeChart) state.dashGradeChart.destroy();

    const t1Units = getActiveUnitsForSemester('1');
    const t2Units = getActiveUnitsForSemester('2');

    const gradeCounts = { '4': 0, '3.5': 0, '3': 0, '2.5': 0, '2': 0, '1.5': 0, '1': 0, '0': 0 };
    activeStudents.forEach(st => {
      // Calculate Term 1 Total
      const calcT1 = calculateStudentUnitScores(st.id, '1');
      let t1Total = 0;
      t1Units.forEach(u => {
        const uKey = String(u.unitNo !== undefined ? u.unitNo : u.name);
        t1Total += (calcT1.units[uKey] || {}).scaledScore || 0;
      });

      // Calculate Term 2 Total
      const calcT2 = calculateStudentUnitScores(st.id, '2');
      let t2Total = 0;
      t2Units.forEach(u => {
        const uKey = String(u.unitNo !== undefined ? u.unitNo : u.name);
        t2Total += (calcT2.units[uKey] || {}).scaledScore || 0;
      });

      const grandTotal = Math.round(t1Total + t2Total);
      const g = calculateGrade(grandTotal, 100);
      if (gradeCounts[g] !== undefined) gradeCounts[g]++;
    });

    const gradeLabels = ['เกรด 4', 'เกรด 3.5', 'เกรด 3', 'เกรด 2.5', 'เกรด 2', 'เกรด 1.5', 'เกรด 1', 'เกรด 0'];
    const gradeData = ['4', '3.5', '3', '2.5', '2', '1.5', '1', '0'].map(k => gradeCounts[k]);

    state.dashGradeChart = new window.Chart(gradeCanvas, {
      type: 'bar',
      data: {
        labels: gradeLabels,
        datasets: [{
          label: 'จำนวนนักเรียน (คน)',
          data: gradeData,
          backgroundColor: [
            'rgba(16, 185, 129, 0.85)',
            'rgba(52, 211, 153, 0.85)',
            'rgba(59, 130, 246, 0.85)',
            'rgba(96, 165, 250, 0.85)',
            'rgba(245, 158, 11, 0.85)',
            'rgba(251, 191, 36, 0.85)',
            'rgba(249, 115, 22, 0.85)',
            'rgba(239, 68, 68, 0.85)'
          ],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              precision: 0,
              font: { family: 'Sarabun', size: 11 },
              color: '#64748b'
            },
            grid: { color: '#f1f5f9' }
          },
          x: {
            grid: { display: false },
            ticks: {
              font: { family: 'Sarabun', size: 11, weight: 'bold' },
              color: '#334155'
            }
          }
        }
      }
    });
  }
}

// ------------------------------------------
// View 5: Settings (⚙️ ตั้งค่าข้อมูลทั่วไปและระบบ)
// ------------------------------------------
function renderSettingsView() {
  const s = state.settings;

  document.getElementById('set-school-name').value = s.schoolName || '';
  document.getElementById('set-director-name').value = s.directorName || '';
  document.getElementById('set-academic-head').value = s.academicHeadName || '';
  document.getElementById('set-teacher-name').value = s.teacherName || '';

  const logoPreview = document.getElementById('set-logo-preview');
  if (logoPreview) {
    if (s.schoolLogo) {
      logoPreview.src = s.schoolLogo;
      logoPreview.classList.remove('hidden');
    } else {
      logoPreview.classList.add('hidden');
    }
  }

  document.getElementById('set-semester-select').value = s.currentSemesterSetting || '1';
  document.getElementById('set-academic-year').value = s.academicYear || '2569';
  document.getElementById('set-term1-start').value = s.term1Start || '';
  document.getElementById('set-term1-end').value = s.term1End || '';
  document.getElementById('set-term2-start').value = s.term2Start || '';
  document.getElementById('set-term2-end').value = s.term2End || '';

  // Update auto semester indicator badge and banner
  updateAutoSemesterUI();

  // Populate Cloud Settings
  const urlInp = document.getElementById('supabase-url-input');
  const keyInp = document.getElementById('supabase-key-input');
  if (urlInp) urlInp.value = state.supabaseUrl || '';
  if (keyInp) keyInp.value = state.supabaseKey || '';
  updateSyncStatus(state.isCloudSynced, state.isCloudSynced ? 'เชื่อมต่อ Supabase แล้ว' : 'โหมดออฟไลน์ (LocalStorage)');

  renderHolidaysTable();
  renderMakeupDaysTable();
  renderTeachingScheduleSettings();
}

function renderHolidaysTable() {
  const tbody = document.getElementById('settings-holidays-tbody');
  if (!tbody) return;
  const list = state.settings.holidays || [];
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="py-8 text-center text-xs text-slate-400"><div class="flex flex-col items-center gap-1.5"><span class="text-2xl">⛱️</span><span>ยังไม่มีรายการวันหยุดที่กำหนด (สามารถกดปุ่มโหลดวันหยุดราชการอัตโนมัติได้)</span></div></td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(h => `
    <tr class="border-b border-slate-100 hover:bg-slate-50/90 transition-colors">
      <td class="py-3 px-4 text-xs font-bold text-slate-800 w-40">${formatThaiDate(h.date)}</td>
      <td class="py-3 px-4 text-xs text-slate-800 font-medium">${h.name}</td>
      <td class="py-3 px-4 text-right w-24">
        <button onclick="deleteHoliday(${h.id})" class="px-2.5 py-1 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100/80 border border-rose-200 rounded-lg transition-colors">ลบ</button>
      </td>
    </tr>
  `).join('');
}

function renderMakeupDaysTable() {
  const tbody = document.getElementById('settings-makeup-tbody');
  if (!tbody) return;
  const list = state.settings.makeupDays || [];
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="py-8 text-center text-xs text-slate-400"><div class="flex flex-col items-center gap-1.5"><span class="text-2xl">🔄</span><span>ยังไม่มีรายการสอนชดเชย</span></div></td></tr>`;
    return;
  }

  const getDayBadgeClass = (day) => {
    if (day.includes('จันทร์')) return 'badge-day-monday';
    if (day.includes('อังคาร')) return 'badge-day-tuesday';
    if (day.includes('พุธ')) return 'badge-day-wednesday';
    if (day.includes('พฤหัสบดี')) return 'badge-day-thursday';
    if (day.includes('ศุกร์')) return 'badge-day-friday';
    if (day.includes('เสาร์')) return 'badge-day-saturday';
    return 'badge-day-sunday';
  };
  tbody.innerHTML = list.map(m => `
    <tr class="border-b border-slate-100 hover:bg-slate-50/90 transition-colors">
      <td class="py-3 px-4 text-xs font-bold text-slate-800 w-48">${formatThaiDate(m.date)}</td>
      <td class="py-3 px-4 text-xs font-semibold">
        <span class="inline-block px-2.5 py-0.5 rounded-md ${getDayBadgeClass(m.useDaySchedule)}">
          ใช้ตาราง${m.useDaySchedule}
        </span>
      </td>
      <td class="py-3 px-4 text-right w-24">
        <button onclick="deleteMakeupDay(${m.id})" class="px-2.5 py-1 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100/80 border border-rose-200 rounded-lg transition-colors">ลบ</button>
      </td>
    </tr>
  `).join('');
}

function renderTeachingScheduleSettings() {
  const container = document.getElementById('teaching-schedule-container');
  if (!container) return;

  const subjKey = state.currentSubjectKey || 'history';
  const subjName = subjKey === 'history' ? 'วิชาประวัติศาสตร์' : 'วิชาสังคมศึกษา';
  const grades = getAvailableGrades();
  const days = [
    { key: 'วันจันทร์', label: 'จันทร์', short: 'จ.' },
    { key: 'วันอังคาร', label: 'อังคาร', short: 'อ.' },
    { key: 'วันพุธ', label: 'พุธ', short: 'พ.' },
    { key: 'วันพฤหัสบดี', label: 'พฤหัสบดี', short: 'พฤ.' },
    { key: 'วันศุกร์', label: 'ศุกร์', short: 'ศ.' }
  ];

  if (!state.settings.teachingSchedule) state.settings.teachingSchedule = {};
  if (!state.settings.teachingSchedule[subjKey]) state.settings.teachingSchedule[subjKey] = {};
  container.innerHTML = grades.map(grade => {
    const scheduledDays = state.settings.teachingSchedule[subjKey][grade] || [];
    const t1Hours = getTeachingDatesForPeriod('1', grade).length;
    const t2Hours = getTeachingDatesForPeriod('2', grade).length;
    const totalHours = t1Hours + t2Hours;

    return `
      <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between space-y-3 shadow-2xs hover:border-blue-200 transition-colors">
        <div>
          <div class="flex items-center justify-between">
            <h4 class="font-bold text-sm text-slate-900">ชั้น ${grade}</h4>
            <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${scheduledDays.length > 0 ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-600'}">
              สอน ${scheduledDays.length} วัน/สัปดาห์
            </span>
          </div>
          <p class="text-xs text-slate-500 mt-1">${subjName}</p>
        </div>

        <div class="space-y-1.5">
          <label class="text-xs font-semibold text-slate-600 block">วันที่มีคาบสอน:</label>
          <div class="grid grid-cols-5 gap-1">
            ${days.map(d => {
              const isSelected = scheduledDays.includes(d.key);
              return `
                <button 
                  type="button" 
                  onclick="toggleTeachingScheduleDay('${grade}', '${d.key}')" 
                  title="${d.key}"
                  class="touch-target py-1.5 px-1 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-blue-600 text-white shadow-xs' 
                      : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-100'
                  }"
                >
                  ${d.short}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="pt-2 border-t border-slate-200/80 text-xs text-slate-600 space-y-1">
          <div class="flex justify-between">
            <span>เวลาเรียนเต็ม (เทอม 1):</span>
            <span class="font-bold text-slate-800">${t1Hours} คาบ</span>
          </div>
          <div class="flex justify-between">
            <span>เวลาเรียนเต็ม (เทอม 2):</span>
            <span class="font-bold text-slate-800">${t2Hours} คาบ</span>
          </div>
          <div class="flex justify-between font-semibold text-blue-700 pt-0.5 border-t border-slate-200/50">
            <span>รวมทั้งปี:</span>
            <span>${totalHours} คาบ</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.toggleTeachingScheduleDay = function(grade, dayName) {
  const subjKey = state.currentSubjectKey || 'history';
  if (!state.settings.teachingSchedule) state.settings.teachingSchedule = {};
  if (!state.settings.teachingSchedule[subjKey]) state.settings.teachingSchedule[subjKey] = {};
  if (!Array.isArray(state.settings.teachingSchedule[subjKey][grade])) {
    state.settings.teachingSchedule[subjKey][grade] = [];
  }
  const list = state.settings.teachingSchedule[subjKey][grade];
  const idx = list.indexOf(dayName);
  if (idx > -1) {
    if (list.length === 1) {
      if (!confirm(`คุณกำลังจะปิดวันสอนทั้งหมดของชั้น ${grade} ต้องการดำเนินการหรือไม่?`)) return;
    }
    list.splice(idx, 1);
  } else {
    list.push(dayName);
  }
  saveLocalData();
  renderTeachingScheduleSettings();
  showNotification(`อัปเดตตารางสอนชั้น ${grade} เรียบร้อยแล้ว`);
};
// ------------------------------------------
// Settings Actions
// ------------------------------------------
window.saveGeneralSettings = function() {
  state.settings.schoolName = document.getElementById('set-school-name').value.trim();
  state.settings.directorName = document.getElementById('set-director-name').value.trim();
  state.settings.academicHeadName = document.getElementById('set-academic-head').value.trim();
  state.settings.teacherName = document.getElementById('set-teacher-name').value.trim();

  state.settings.academicYear = document.getElementById('set-academic-year').value.trim();
  state.settings.term1Start = document.getElementById('set-term1-start').value;
  state.settings.term1End = document.getElementById('set-term1-end').value;
  state.settings.term2Start = document.getElementById('set-term2-start').value;
  state.settings.term2End = document.getElementById('set-term2-end').value;

  // Recalculate auto-semester immediately with the new dates
  applyAutoSemester(false);

  saveLocalData();
  showNotification('💾 บันทึกข้อมูลทั่วไปและวันเปิด-ปิดภาคเรียนเรียบร้อย');
};
window.handleDateInputChange = function() {
  const t1s = document.getElementById('set-term1-start');
  const t1e = document.getElementById('set-term1-end');
  const t2s = document.getElementById('set-term2-start');
  const t2e = document.getElementById('set-term2-end');

  if (t1s) state.settings.term1Start = t1s.value;
  if (t1e) state.settings.term1End = t1e.value;
  if (t2s) state.settings.term2Start = t2s.value;
  if (t2e) state.settings.term2End = t2e.value;

  const analysis = getAutoSemesterAnalysis();
  updateAutoSemesterUI(analysis);
  state.currentSemester = analysis.semester;
  state.settings.currentSemesterSetting = analysis.semester;
};
window.handleLogoUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    state.settings.schoolLogo = e.target.result;
    saveLocalData();
    const preview = document.getElementById('set-logo-preview');
    if (preview) {
      preview.src = e.target.result;
      preview.classList.remove('hidden');
    }
    showNotification('อัปโหลดโลโก้โรงเรียนสำเร็จ');
  };
  reader.readAsDataURL(file);
};
window.addHoliday = function() {
  const dateInput = document.getElementById('new-holiday-date');
  const nameInput = document.getElementById('new-holiday-name');
  const date = dateInput.value;
  const name = nameInput.value.trim();

  if (!date || !name) {
    alert('กรุณากรอกทั้งวันที่และชื่อวันหยุด');
    return;
  }

  if (!state.settings.holidays) state.settings.holidays = [];
  state.settings.holidays.push({ id: Date.now(), date, name });
  state.settings.holidays.sort((a, b) => new Date(a.date) - new Date(b.date));

  saveLocalData();
  dateInput.value = '';
  nameInput.value = '';
  renderHolidaysTable();
  showNotification(`เพิ่มวันหยุด "${name}" สำเร็จ`);
};
window.deleteHoliday = function(id) {
  state.settings.holidays = (state.settings.holidays || []).filter(h => h.id !== id);
  saveLocalData();
  renderHolidaysTable();
};
window.loadDefaultThaiHolidays = function() {
  state.settings.holidays = [
    { id: 1, date: '2026-06-01', name: 'วันหยุดชดเชยวัดวิสาขบูชา' },
    { id: 2, date: '2026-06-03', name: 'วันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าฯ พระบรมราชินี' },
    { id: 3, date: '2026-07-28', name: 'วันเฉลิมพระชนมพรรษา พระบาทสมเด็จพระเจ้าอยู่หัว' },
    { id: 4, date: '2026-07-29', name: 'วันอาสาฬหบูชา' },
    { id: 5, date: '2026-07-30', name: 'วันเข้าพรรษา' },
    { id: 6, date: '2026-07-31', name: 'วันหยุดกรณีพิเศษ' },
    { id: 7, date: '2026-08-12', name: 'วันแม่แห่งชาติ' },
    { id: 8, date: '2026-10-13', name: 'วันนวมินทรมหาราช' },
    { id: 9, date: '2026-10-23', name: 'วันปิยมหาราช' },
    { id: 10, date: '2026-12-05', name: 'วันคล้ายวันพระบรมราชสมภพ ร.9 และวันพ่อแห่งชาติ' },
    { id: 11, date: '2026-12-10', name: 'วันรัฐธรรมนูญ' }
  ];
  saveLocalData();
  renderHolidaysTable();
  showNotification('โหลดวันหยุดราชการประจำปีอัตโนมัติสำเร็จ');
};
window.addMakeupDay = function() {
  const date = document.getElementById('new-makeup-date').value;
  const useDaySchedule = document.getElementById('new-makeup-day').value;

  if (!date) {
    alert('กรุณาเลือกวันที่สอนชดเชย');
    return;
  }

  if (!state.settings.makeupDays) state.settings.makeupDays = [];
  state.settings.makeupDays.push({ id: Date.now(), date, useDaySchedule });
  state.settings.makeupDays.sort((a, b) => new Date(a.date) - new Date(b.date));

  saveLocalData();
  document.getElementById('new-makeup-date').value = '';
  renderMakeupDaysTable();
  showNotification('เพิ่มรายการวันสอนชดเชยสำเร็จ');
};
window.deleteMakeupDay = function(id) {
  state.settings.makeupDays = (state.settings.makeupDays || []).filter(m => m.id !== id);
  saveLocalData();
  renderMakeupDaysTable();
};
// ------------------------------------------
// Multi-Sheet Full System Backup (Excel)
// ------------------------------------------
window.exportAllSystemExcel = function() {
  if (!window.XLSX) {
    alert('SheetJS Library ยังไม่พร้อมใช้งาน');
    return;
  }

  const wb = window.XLSX.utils.book_new();
  const s = state.settings;

  const genData = [
    ['ข้อมูลทั่วไปโรงเรียนและระบบ'],
    ['ชื่อโรงเรียน', s.schoolName || ''],
    ['ผู้อำนวยการโรงเรียน', s.directorName || ''],
    ['หัวหน้าฝ่ายวิชาการ', s.academicHeadName || ''],
    ['ครูประจำวิชา', s.teacherName || ''],
    ['ปีการศึกษา', s.academicYear || '2569'],
    ['ภาคเรียนที่ 1', `${s.term1Start} ถึง ${s.term1End}`],
    ['ภาคเรียนที่ 2', `${s.term2Start} ถึง ${s.term2End}`],
    ['วันที่ส่งออกข้อมูลสำรอง', new Date().toLocaleDateString('th-TH')]
  ];
  const wsGen = window.XLSX.utils.aoa_to_sheet(genData);
  wsGen['!cols'] = [{ wch: 25 }, { wch: 45 }];
  window.XLSX.utils.book_append_sheet(wb, wsGen, 'ข้อมูลทั่วไป');

  const stHeaders = ['รหัสนักเรียน', 'เลขที่', 'ชื่อ - สกุล', 'ระดับชั้น', 'ห้อง'];
  const stRows = state.students.map(st => [st.id, st.student_no, st.name, st.grade, st.room]);
  const wsSt = window.XLSX.utils.aoa_to_sheet([stHeaders, ...stRows]);
  wsSt['!cols'] = [{ wch: 15 }, { wch: 8 }, { wch: 30 }, { wch: 12 }, { wch: 8 }];
  window.XLSX.utils.book_append_sheet(wb, wsSt, 'รายชื่อนักเรียน');

  const logHeaders = ['ลำดับ', 'วันที่', 'รหัสวิชา', 'ระดับชั้น/ห้อง', 'เนื้อหาที่สอน', 'ปัญหา/อุปสรรค', 'ข้อเสนอแนะ'];
  const logRows = state.lessonLogs.map((l, i) => [i + 1, l.date, l.subject_code || '', l.grade_room, l.topic, l.problems || '', l.suggestions || '']);
  const wsLog = window.XLSX.utils.aoa_to_sheet([logHeaders, ...logRows]);
  wsLog['!cols'] = [{ wch: 8 }, { wch: 14 }, { wch: 12 }, { wch: 14 }, { wch: 40 }, { wch: 30 }, { wch: 30 }];
  window.XLSX.utils.book_append_sheet(wb, wsLog, 'บันทึกหลังสอน');

  const holHeaders = ['ประเภท', 'วันที่/วันในสัปดาห์', 'รายละเอียด / การชดเชย'];
  const schedRows = [];
  if (s.teachingSchedule) {
    Object.keys(s.teachingSchedule).forEach(subj => {
      const subjName = subj === 'history' ? 'วิชาประวัติศาสตร์' : 'วิชาสังคมศึกษา';
      Object.keys(s.teachingSchedule[subj]).forEach(grade => {
        const days = s.teachingSchedule[subj][grade];
        schedRows.push(['ตารางสอนประจำสัปดาห์', `${subjName} ชั้น ${grade}`, (days && days.length > 0) ? days.join(', ') : 'ไม่มีตารางสอน']);
      });
    });
  }
  const holRows = [
    ...(s.holidays || []).map(h => ['วันหยุด', h.date, h.name]),
    ...schedRows,
    ...(s.makeupDays || []).map(m => ['วันสอนชดเชย', m.date, `ใช้ตารางของ ${m.useDaySchedule}`])
  ];
  const wsHol = window.XLSX.utils.aoa_to_sheet([holHeaders, ...holRows]);
  wsHol['!cols'] = [{ wch: 16 }, { wch: 25 }, { wch: 40 }];
  window.XLSX.utils.book_append_sheet(wb, wsHol, 'ปฏิทินวันหยุดและตารางสอน');

  const fileName = `สำรองข้อมูลระบบ_${s.schoolName || 'โรงเรียน'}_${new Date().toISOString().split('T')[0]}.xlsx`;
  window.XLSX.writeFile(wb, fileName);
  showNotification('ดาวน์โหลดไฟล์สำรองข้อมูลระบบทั้งหมด (Excel) เรียบร้อย');
};
// ------------------------------------------
// Export ปพ.5 (ฉบับสมบูรณ์ 5 แผ่นงาน)
// ------------------------------------------
window.exportPP5Excel = function() {
  if (!window.XLSX) {
    alert('SheetJS Library ยังไม่โหลด');
    return;
  }

  const cur = getActiveCurriculum();
  const currentGradeRoom = `${state.currentGrade}/${state.currentRoom}`;
  const students = getFilteredStudents();
  const s = state.settings || DEFAULT_SETTINGS;

  const wb = window.XLSX.utils.book_new();

  // ----------------------------------------------------
  // Sheet 1: สรุปผล ปพ.5 (Master Summary)
  // ----------------------------------------------------
  const t1Units = getActiveUnitsForSemester('1');
  const t2Units = getActiveUnitsForSemester('2');

  const headersRow1 = [
    'เลขที่', 'รหัสนักเรียน', 'ชื่อ - สกุล',
    'ภาคเรียนที่ 1 (50 คะแนน)', '',
    'ภาคเรียนที่ 2 (50 คะแนน)', '',
    'สรุปผลตลอดปีการศึกษา (100 คะแนน)', '', '',
    'การประเมิน 3 ด้าน (สพฐ.)', '', '',
    'ผลการตัดสิน'
  ];

  const headersRow2 = [
    '', '', '',
    'เก็บ (35)', 'กลางภาค (15)',
    'เก็บ (35)', 'ปลายภาค (15)',
    'รวม (100)', 'เกรด', 'ร้อยละเวลาเรียน',
    'คุณลักษณะอันพึงประสงค์', 'การอ่าน คิดวิเคราะห์ เขียน', 'สมรรถนะสำคัญ',
    ''
  ];

  const summaryRows = students.map(student => {
    if (student.status === 'ย้ายออก') {
      return [
        student.student_no, student.id, `${student.name} (ย้ายออก)`,
        '-', '-', '-', '-', '-', '-', '-',
        '-', '-', '-', 'ย้ายออก'
      ];
    }

    const calcT1 = calculateStudentUnitScores(student.id, '1');
    let t1Regular = 0, t1Midterm = 0;
    t1Units.forEach(u => {
      const uKey = String(u.unitNo !== undefined ? u.unitNo : u.name);
      const score = calcT1.units[uKey]?.scaledScore || 0;
      if (u.unitNo === 'midterm' || u.name.includes('กลาง')) t1Midterm += score;
      else t1Regular += score;
    });
    t1Regular = Math.round(t1Regular);
    t1Midterm = Math.round(t1Midterm);
    const t1Total = Math.round(t1Regular + t1Midterm);

    const calcT2 = calculateStudentUnitScores(student.id, '2');
    let t2Regular = 0, t2Final = 0;
    t2Units.forEach(u => {
      const uKey = String(u.unitNo !== undefined ? u.unitNo : u.name);
      const score = calcT2.units[uKey]?.scaledScore || 0;
      if (u.unitNo === 'final' || u.name.includes('ปลาย')) t2Final += score;
      else t2Regular += score;
    });
    t2Regular = Math.round(t2Regular);
    t2Final = Math.round(t2Final);
    const t2Total = Math.round(t2Regular + t2Final);

    const grandTotal = Math.round(t1Total + t2Total);
    const grade = calculateGrade(grandTotal, 100);
    const attStats = getStudentAttendanceStats(student.id);

    const traitsSum = getStudentHolisticSummary(student.id, 'traits');
    const readingSum = getStudentHolisticSummary(student.id, 'reading');
    const compSum = getStudentHolisticSummary(student.id, 'competencies');

    let verdict = 'ผ่าน';
    if (attStats.isAtRisk) verdict = 'มส.';
    else if (grade === '0' || traitsSum.level === '0' || readingSum.level === '0' || compSum.level === '0') verdict = 'ไม่ผ่าน';

    return [
      student.student_no, student.id, student.name,
      t1Regular, t1Midterm,
      t2Regular, t2Final,
      grandTotal, Number(grade), `${attStats.percentage}%`,
      traitsSum.label, readingSum.label, compSum.label,
      verdict
    ];
  });

  const wsSummaryData = [
    [`แบบสรุปผลการพัฒนาคุณภาพผู้เรียน (ปพ.5) รหัสวิชา ${cur.code} ${cur.name}`],
    [`${s.schoolName || 'โรงเรียนบ้านควนเนียง'} | ปีการศึกษา ${s.academicYear || '2569'} | สัดส่วนคะแนนรายปี: เทอม 1 (50) + เทอม 2 (50) = 100 คะแนน`],
    [`ระดับชั้น ${currentGradeRoom} | วันที่ออกเอกสาร: ${new Date().toLocaleDateString('th-TH')}`],
    [],
    headersRow1,
    headersRow2,
    ...summaryRows,
    [],
    ['', '', 'ลงชื่อ...................................................... ครูผู้สอน', `(${s.teacherName || '......................................................'})`],
    ['', '', 'ลงชื่อ...................................................... หัวหน้าฝ่ายวิชาการ', `(${s.academicHeadName || '......................................................'})`],
    ['', '', 'ลงชื่อ...................................................... ผู้อำนวยการโรงเรียน', `(${s.directorName || '......................................................'})`]
  ];

  const wsSummary = window.XLSX.utils.aoa_to_sheet(wsSummaryData);
  wsSummary['!cols'] = [
    { wch: 8 },  // เลขที่
    { wch: 14 }, // รหัส
    { wch: 28 }, // ชื่อ-สกุล
    { wch: 12 }, // เก็บ 1
    { wch: 14 }, // กลางภาค
    { wch: 12 }, // เก็บ 2
    { wch: 14 }, // ปลายภาค
    { wch: 12 }, // รวม 100
    { wch: 10 }, // เกรด
    { wch: 16 }, // ร้อยละเวลา
    { wch: 24 }, // คุณลักษณะ
    { wch: 24 }, // อ่านคิดเขียน
    { wch: 24 }, // สมรรถนะ
    { wch: 14 }  // ผลการตัดสิน
  ];
  wsSummary['!merges'] = [
    { s: { r: 4, c: 0 }, e: { r: 5, c: 0 } }, // เลขที่
    { s: { r: 4, c: 1 }, e: { r: 5, c: 1 } }, // รหัส
    { s: { r: 4, c: 2 }, e: { r: 5, c: 2 } }, // ชื่อ
    { s: { r: 4, c: 3 }, e: { r: 4, c: 4 } }, // ภาคเรียนที่ 1
    { s: { r: 4, c: 5 }, e: { r: 4, c: 6 } }, // ภาคเรียนที่ 2
    { s: { r: 4, c: 7 }, e: { r: 4, c: 9 } }, // สรุปผลตลอดปี
    { s: { r: 4, c: 10 }, e: { r: 4, c: 12 } }, // ประเมิน 3 ด้าน
    { s: { r: 4, c: 13 }, e: { r: 5, c: 13 } }  // ผลการตัดสิน
  ];
  window.XLSX.utils.book_append_sheet(wb, wsSummary, 'สรุปผล ปพ.5');

  // ----------------------------------------------------
  // Sheet 2: คะแนนตัวชี้วัด (Gradebook)
  // ----------------------------------------------------
  const allUnits = getActiveUnitsForSemester('all');
  const maxPossible = allUnits.reduce((acc, u) => acc + (u.weight || 0), 0);
  const gbHeaders = ['เลขที่', 'รหัสนักเรียน', 'ชื่อ - สกุล'];
  allUnits.forEach(u => {
    const uIndicators = u.indicators || [];
    const hasScaledCol = (uIndicators.length > 1) || (uIndicators.length === 1 && uIndicators[0].max !== u.weight);
    uIndicators.forEach(ind => gbHeaders.push(`${ind.id} (${ind.max})`));
    if (hasScaledCol) gbHeaders.push(`⭐ รวม [${u.name}] (${u.weight})`);
  });
  gbHeaders.push(`รวม (${maxPossible})`, 'เกรด', 'เวลาเรียน', 'สถานะ');

  const gbRows = students.map(student => {
    if (student.status === 'ย้ายออก') {
      const row = [student.student_no, student.id, `${student.name} (ย้ายออก)`];
      allUnits.forEach(u => {
        const uIndicators = u.indicators || [];
        const hasScaledCol = (uIndicators.length > 1) || (uIndicators.length === 1 && uIndicators[0].max !== u.weight);
        uIndicators.forEach(() => row.push('-'));
        if (hasScaledCol) row.push('-');
      });
      row.push('-', '-', '-', 'ย้ายออก');
      return row;
    }
    const studentScores = state.scores[student.id] || {};
    const calcResult = calculateStudentUnitScores(student.id, 'all');
    const row = [student.student_no, student.id, student.name];
    allUnits.forEach(u => {
      const uKey = String(u.unitNo !== undefined ? u.unitNo : u.name);
      const uResult = calcResult.units[uKey] || {};
      const uIndicators = u.indicators || [];
      const hasScaledCol = (uIndicators.length > 1) || (uIndicators.length === 1 && uIndicators[0].max !== u.weight);
      uIndicators.forEach(ind => {
        const val = studentScores[ind.id];
        row.push(val !== undefined && val !== '' ? Number(val) : 0);
      });
      if (hasScaledCol) row.push(uResult.scaledScore !== undefined ? uResult.scaledScore : 0);
    });
    const totalScore = calcResult.grandTotalScaled;
    const grade = calculateGrade(totalScore, maxPossible);
    const attStats = getStudentAttendanceStats(student.id);
    const status = attStats.isAtRisk ? 'มส.' : (grade === '0' ? 'ไม่ผ่าน' : 'ผ่าน');
    row.push(totalScore, Number(grade), `${attStats.percentage}%`, status);
    return row;
  });

  const wsGbData = [
    [`แบบบันทึกคะแนนตัวชี้วัด (ปพ.5) รหัสวิชา ${cur.code} ${cur.name}`],
    [`${s.schoolName || 'โรงเรียนบ้านควนเนียง'} | ปีการศึกษา ${s.academicYear || '2569'} | คะแนนเต็ม: ${maxPossible} คะแนน`],
    [],
    gbHeaders,
    ...gbRows
  ];
  const wsGb = window.XLSX.utils.aoa_to_sheet(wsGbData);
  wsGb['!cols'] = gbHeaders.map((h, i) => i === 2 ? { wch: 28 } : { wch: Math.max(h.length * 2, 12) });
  window.XLSX.utils.book_append_sheet(wb, wsGb, 'คะแนนตัวชี้วัด');

  // ----------------------------------------------------
  // Sheets 3, 4, 5: Holistic Assessments (คุณลักษณะ, อ่านคิดเขียน, สมรรถนะ)
  // ----------------------------------------------------
  const holisticTabs = [
    { key: 'traits', name: 'คุณลักษณะอันพึงประสงค์' },
    { key: 'reading', name: 'อ่าน คิดวิเคราะห์ เขียน' },
    { key: 'competencies', name: 'สมรรถนะสำคัญ' }
  ];
  holisticTabs.forEach(hTab => {
    const def = HOLISTIC_DEFINITIONS[hTab.key];
    const storeKey = getHolisticStoreKey('all', hTab.key);
    const domainData = state.holisticAssessments?.[storeKey] || {};
    const hHeaders = ['เลขที่', 'รหัสนักเรียน', 'ชื่อ - สกุล'];
    def.items.forEach(item => hHeaders.push(item.name));
    hHeaders.push('สรุปผลการประเมิน');

    const hRows = students.map(student => {
      if (student.status === 'ย้ายออก') {
        const row = [student.student_no, student.id, `${student.name} (ย้ายออก)`];
        def.items.forEach(() => row.push('-'));
        row.push('ย้ายออก');
        return row;
      }
      const stScores = domainData[student.id] || {};
      const row = [student.student_no, student.id, student.name];
      const scoreValues = [];
      def.items.forEach(item => {
        const val = stScores[item.id] !== undefined ? Number(stScores[item.id]) : 3;
        scoreValues.push(val);
        row.push(val);
      });
      const summary = calculateHolisticSummary(scoreValues);
      row.push(summary.label);
      return row;
    });

    const wsHData = [
      [`แบบประเมิน${def.title} (ตลอดทั้งปีการศึกษา) รหัสวิชา ${cur.code} ${cur.name}`],
      [`${s.schoolName || 'โรงเรียนบ้านควนเนียง'} | ปีการศึกษา ${s.academicYear || '2569'} | เกณฑ์: 3=ดีเยี่ยม, 2=ดี, 1=ผ่าน, 0=ไม่ผ่าน`],
      [],
      hHeaders,
      ...hRows
    ];
    const wsH = window.XLSX.utils.aoa_to_sheet(wsHData);
    wsH['!cols'] = hHeaders.map((h, i) => i === 2 ? { wch: 28 } : { wch: Math.max(h.length * 2, 12) });
    const safeSheetName = hTab.name.substring(0, 31);
    window.XLSX.utils.book_append_sheet(wb, wsH, safeSheetName);
  });

  const fileName = `ปพ5_ฉบับสมบูรณ์_${cur.code}_${state.currentGrade.replace('.', '')}_ห้อง${state.currentRoom}_ทั้งปีการศึกษา.xlsx`;
  window.XLSX.writeFile(wb, fileName);
  showNotification('ดาวน์โหลดเล่ม ปพ.5 ฉบับสมบูรณ์ (ครบทั้ง 5 แผ่นงาน) สำเร็จ');
};
window.exportLessonLogsExcel = function() {
  if (!window.XLSX) {
    alert('SheetJS Library ยังไม่โหลด');
    return;
  }

  const cur = getActiveCurriculum();
  const logs = state.lessonLogs;
  const s = state.settings;
  if (logs.length === 0) {
    alert('ไม่มีข้อมูลบันทึกหลังสอน');
    return;
  }

  const headers = ['ลำดับ', 'วันที่', 'รหัสวิชา', 'ระดับชั้น/ห้อง', 'สาระ/เนื้อหาที่จัดการเรียนรู้', 'ปัญหาและอุปสรรค', 'ข้อเสนอแนะและแนวทางแก้ไข'];
  const rows = logs.map((log, idx) => [
    idx + 1,
    log.date,
    log.subject_code || cur.code,
    log.grade_room,
    log.topic,
    log.problems || '-',
    log.suggestions || '-'
  ]);

  const wb = window.XLSX.utils.book_new();
  const wsData = [
    [`บันทึกผลการจัดการเรียนรู้ประจำวัน (บันทึกหลังสอน) วิชา${cur.name}`],
    [`${s.schoolName || 'โรงเรียนบ้านควนเนียง'} | ครูผู้สอน: ${s.teacherName || ''}`],
    [`วันที่ส่งออกข้อมูล: ${new Date().toLocaleDateString('th-TH')}`],
    [],
    headers,
    ...rows
  ];

  const ws = window.XLSX.utils.aoa_to_sheet(wsData);
  ws['!cols'] = [{ wch: 8 }, { wch: 14 }, { wch: 12 }, { wch: 14 }, { wch: 42 }, { wch: 35 }, { wch: 35 }];

  window.XLSX.utils.book_append_sheet(wb, ws, 'บันทึกหลังสอน');
  window.XLSX.writeFile(wb, `บันทึกหลังสอน_${cur.code}_${new Date().toISOString().split('T')[0]}.xlsx`);

  showNotification('ดาวน์โหลดไฟล์บันทึกหลังสอนเรียบร้อย');
};
// ==========================================
// 8. EVENT LISTENERS
// ==========================================

function setupEventListeners() {
  document.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      if (view) switchView(view);
    });
  });

  const subjectSel = document.getElementById('subject-selector');
  if (subjectSel) {
    subjectSel.addEventListener('change', (e) => {
      state.currentSubjectKey = e.target.value;
      renderCurrentView();
    });
  }

  const semSel = document.getElementById('semester-selector');
  if (semSel) {
    semSel.addEventListener('change', (e) => {
      state.currentSemester = e.target.value;
      renderCurrentView();
    });
  }

  const gradeSel = document.getElementById('class-selector-grade');
  const roomSel = document.getElementById('class-selector-room');
  if (gradeSel) {
    gradeSel.addEventListener('change', (e) => {
      state.currentGrade = e.target.value;
      renderCurrentView();
    });
  }
  if (roomSel) {
    roomSel.addEventListener('change', (e) => {
      state.currentRoom = e.target.value;
      renderCurrentView();
    });
  }

  const dateInput = document.getElementById('attendance-date-input');
  if (dateInput) {
    dateInput.addEventListener('change', (e) => {
      state.selectedDate = e.target.value;
      renderAttendanceView();
    });
  }

  // Cloud (Supabase) Settings Save from Settings View
  const saveCloudBtn = document.getElementById('save-cloud-settings-btn');
  if (saveCloudBtn) {
    saveCloudBtn.addEventListener('click', () => {
      window.saveCloudSettings();
    });
  }
}

window.saveCloudSettings = function() {
  const urlInp = document.getElementById('supabase-url-input');
  const keyInp = document.getElementById('supabase-key-input');
  if (!urlInp || !keyInp) return;
  const url = urlInp.value.trim();
  const key = keyInp.value.trim();
  state.supabaseUrl = url;
  state.supabaseKey = key;
  localStorage.setItem('hist_sb_url', url);
  localStorage.setItem('hist_sb_key', key);
  initSupabase();
  showNotification('บันทึกการตั้งค่า Cloud (Supabase) เรียบร้อย');
  renderSettingsView();
};

window.manualSyncCloud = function() {
  if (!state.supabaseClient) {
    showNotification('กรุณาบันทึก URL และ Anon Key เพื่อเชื่อมต่อ Supabase ก่อนครับ', 'error');
    return;
  }
  showNotification('กำลังส่งข้อมูลขึ้น Supabase Cloud...');
  if (typeof syncToSupabase === 'function') {
    syncToSupabase(true);
  }
};
function formatThaiDate(dateStr) {
  if (!dateStr) return '';
  const parts = String(dateStr).split('-');
  if (parts.length === 3) {
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1;
    const d = parseInt(parts[2], 10);
    const localDate = new Date(y, m, d);
    if (!isNaN(localDate.getTime())) {
      return localDate.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
    }
  }
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
}

function showNotification(msg) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-24 sm:bottom-6 right-6 z-50 bg-slate-900 text-white text-xs sm:text-sm font-medium px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2 transform transition-all duration-300 translate-y-10 opacity-0';
  toast.innerHTML = `<span>✨</span><span>${msg}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.remove('translate-y-10', 'opacity-0'), 50);
  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ==========================================
// 7. CLASSROOM & STUDENT REGISTRY MANAGEMENT
// ==========================================

// Gender Auto-Detection (คำนวณ ชาย/หญิง อัตโนมัติจากคำนำหน้า)
function detectGenderFromName(name) {
  if (!name) return 'ชาย';
  const trimmed = name.trim();
  if (
    trimmed.startsWith('ด.ญ.') ||
    trimmed.startsWith('ด.ญ') ||
    trimmed.startsWith('เด็กหญิง') ||
    trimmed.startsWith('นางสาว') ||
    trimmed.startsWith('น.ส.') ||
    trimmed.startsWith('น.ส') ||
    trimmed.startsWith('นาง')
  ) {
    return 'หญิง';
  }
  return 'ชาย';
}


// ------------------------------------------
// 7.1 CLASSROOMS VIEW
// ------------------------------------------
function renderClassroomsView() {
  const tbody = document.getElementById('classrooms-table-body');
  if (!tbody) return;

  const classrooms = state.classrooms || DEFAULT_CLASSROOMS;

  let totalBoys = 0;
  let totalGirls = 0;

  state.students.forEach(s => {
    const g = s.gender || detectGenderFromName(s.name);
    if (g === 'หญิง') totalGirls++;
    else totalBoys++;
  });

  const elRooms = document.getElementById('cls-stat-total-rooms');
  const elStudents = document.getElementById('cls-stat-total-students');
  const elBoys = document.getElementById('cls-stat-boys');
  const elGirls = document.getElementById('cls-stat-girls');

  if (elRooms) elRooms.textContent = `${classrooms.length} ห้อง`;
  if (elStudents) elStudents.textContent = `${state.students.length} คน`;
  if (elBoys) elBoys.textContent = `${totalBoys} คน`;
  if (elGirls) elGirls.textContent = `${totalGirls} คน`;

  if (classrooms.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="py-10 text-center text-slate-400">ยังไม่มีข้อมูลห้องเรียนในระบบ</td></tr>`;
    return;
  }

  tbody.innerHTML = classrooms.map(c => {
    const roomStudents = state.students.filter(s => isStudentInClassroom(s, c));

    let boys = 0;
    let girls = 0;
    roomStudents.forEach(s => {
      const g = s.gender || detectGenderFromName(s.name);
      if (g === 'หญิง') girls++;
      else boys++;
    });

    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
        <td class="py-3.5 px-4 font-bold text-slate-900">
          <span class="badge-classroom">${c.name}</span>
        </td>
        <td class="py-3.5 px-4 text-center font-bold text-slate-800 text-sm">
          ${roomStudents.length}
        </td>
        <td class="py-3.5 px-4 text-center font-semibold text-indigo-700">
          ${boys}
        </td>
        <td class="py-3.5 px-4 text-center font-semibold text-pink-700">
          ${girls}
        </td>
        <td class="py-3.5 px-4 text-right">
          <div class="inline-flex items-center gap-1.5">
            <button 
              onclick="jumpToClassStudents('${c.name}')" 
              class="touch-target px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
              title="ดูรายชื่อนักเรียนห้องนี้"
            >
              👥 ดูนักเรียน
            </button>
            <button 
              onclick="openEditClassroomModal('${c.id}')" 
              class="touch-target p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              title="แก้ไขชื่อห้องเรียน"
            >
              ✏️
            </button>
            <button 
              onclick="deleteClassroom('${c.id}')" 
              class="touch-target p-1.5 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 transition-colors"
              title="ลบห้องเรียนและนักเรียนในห้อง"
            >
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.saveNewClassroom = function() {
  const input = document.getElementById('new-classroom-name-input');
  if (!input) return;
  const name = input.value.trim();
  if (!name) {
    alert('กรุณากรอกชื่อห้องเรียน เช่น ป.4/1 หรือ ป.3');
    return;
  }

  if (!state.classrooms) state.classrooms = [...DEFAULT_CLASSROOMS];
  if (state.classrooms.some(c => c.name.toLowerCase() === name.toLowerCase())) {
    alert('ชื่อห้องเรียนนี้มีอยู่ในระบบแล้ว');
    return;
  }

  let grade = name;
  let room = '1';
  if (name.includes('/')) {
    const parts = name.split('/');
    grade = parts[0].trim();
    room = parts[1].trim();
  }

  state.classrooms.push({
    id: 'cls-' + Date.now(),
    name,
    grade,
    room
  });

  saveLocalData();
  input.value = '';
  renderClassroomsView();
  renderStudentsView();
  renderApp();
  showNotification(`เพิ่มห้องเรียน "${name}" สำเร็จ`);
};
window.openEditClassroomModal = function(id) {
  const c = (state.classrooms || []).find(x => x.id === id);
  if (!c) return;
  const modal = document.getElementById('edit-classroom-modal');
  const idInput = document.getElementById('edit-classroom-id');
  const nameInput = document.getElementById('edit-classroom-name-input');
  if (modal && idInput && nameInput) {
    idInput.value = c.id;
    nameInput.value = c.name;
    modal.classList.remove('hidden');
  }
};
window.closeEditClassroomModal = function() {
  const modal = document.getElementById('edit-classroom-modal');
  if (modal) modal.classList.add('hidden');
};
window.saveEditClassroom = function() {
  const idInput = document.getElementById('edit-classroom-id');
  const nameInput = document.getElementById('edit-classroom-name-input');
  if (!idInput || !nameInput) return;
  const id = idInput.value;
  const newName = nameInput.value.trim();
  if (!newName) {
    alert('กรุณากรอกชื่อห้องเรียน');
    return;
  }

  const c = (state.classrooms || []).find(x => x.id === id);
  if (c) {
    const oldName = c.name;
    c.name = newName;
    if (newName.includes('/')) {
      const parts = newName.split('/');
      c.grade = parts[0].trim();
      c.room = parts[1].trim();
    } else {
      c.grade = newName;
      c.room = '1';
    }

    // อัปเดตข้อมูลนักเรียนในห้องที่ถูกเปลี่ยนชื่อให้เชื่อมโยงตรงกันเสมอ
    let updatedCount = 0;
    state.students.forEach(s => {
      if (oldName.includes('/') && s.grade + '/' + s.room === oldName) {
        s.grade = c.grade;
        s.room = c.room;
        updatedCount++;
      } else if (s.grade === oldName) {
        s.grade = c.grade;
        s.room = c.room;
        updatedCount++;
      }
    });

    saveLocalData();
    closeEditClassroomModal();
    renderClassroomsView();
    renderStudentsView();
    renderApp();
    showNotification(`แก้ไขห้องเรียน "${newName}" และอัปเดตนักเรียน ${updatedCount} คน สำเร็จ`);
  }
};
// ลบห้องเรียน พร้อม Cascade Delete ลบนักเรียนในห้องนั้นทั้งหมดอัตโนมัติ
window.deleteClassroom = function(id) {
  const c = (state.classrooms || []).find(x => x.id === id);
  if (!c) return;

  // ค้นหารายชื่อนักเรียนทั้งหมดที่ผูกกับห้องเรียนนี้
  const linkedStudents = state.students.filter(s => isStudentInClassroom(s, c));
  const studentCount = linkedStudents.length;

  const confirmMsg = studentCount > 0
    ? `ยืนยันการลบห้องเรียน "${c.name}" ใช่หรือไม่?\n\n⚠️ มีนักเรียนในห้องนี้จำนวน ${studentCount} คน ซึ่งข้อมูลนักเรียนทั้งหมดจะถูกลบออกจากระบบไปด้วยตามเงื่อนไข!`
    : `ยืนยันการลบห้องเรียน "${c.name}" ใช่หรือไม่?`;

  if (!confirm(confirmMsg)) return;

  // 1. ลบห้องเรียน
  state.classrooms = (state.classrooms || []).filter(x => x.id !== id);

  // 2. Cascade Delete: ลบนักเรียนทั้งหมดที่อยู่ในห้องนี้
  if (studentCount > 0) {
    const studentIdsToDelete = new Set(linkedStudents.map(s => s.id));
    state.students = state.students.filter(s => !studentIdsToDelete.has(s.id));

    // 3. ทำความสะอาดคะแนนและสถิติการเช็คชื่อของนักเรียนที่ถูกลบ
    studentIdsToDelete.forEach(sid => {
      if (state.scores && state.scores[sid]) {
        delete state.scores[sid];
      }
      if (state.attendance) {
        Object.keys(state.attendance).forEach(date => {
          if (state.attendance[date] && state.attendance[date][sid]) {
            delete state.attendance[date][sid];
          }
        });
      }
    });
  }

  // 4. รีเซ็ตตัวกรองที่อาจชี้ไปยังห้องเรียนที่ถูกลบ
  if (state.selectedStudentFilterClass === c.name || state.selectedStudentFilterClass === c.grade) {
    state.selectedStudentFilterClass = 'all';
  }
  const remainingGrades = getAvailableGrades();
  if (state.currentGrade === c.grade || state.currentGrade === c.name) {
    state.currentGrade = remainingGrades[0] || 'ป.5';
    state.currentRoom = '1';
  }
  if (state.selectedMonthlyGrade === c.grade || state.selectedMonthlyGrade === c.name) {
    state.selectedMonthlyGrade = remainingGrades[0] || 'ป.5';
  }
  if (state.selectedSemesterGrade === c.grade || state.selectedSemesterGrade === c.name) {
    state.selectedSemesterGrade = remainingGrades[0] || 'ป.5';
  }

  saveLocalData();
  renderClassroomsView();
  renderStudentsView();
  renderApp();

  showNotification(`ลบห้องเรียน "${c.name}" และข้อมูลนักเรียน ${studentCount} คน เรียบร้อยแล้ว`);
};
window.jumpToClassStudents = function(className) {
  state.selectedStudentFilterClass = className;
  state.currentGrade = className;
  const globalSel = document.getElementById('global-classroom-selector');
  if (globalSel) globalSel.value = className;
  updateSidebarClassroomBadge();
  switchView('students');
};
// ------------------------------------------
// 7.2 STUDENT REGISTRY VIEW
// ------------------------------------------
window.handleStudentNameInputLive = function(val) {
  const pill = document.getElementById('student-detected-gender-pill');
  if (!pill) return;
  if (!val || val.trim().length === 0) {
    pill.textContent = 'ตรวจเพศอัตโนมัติ';
    pill.className = 'text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-semibold transition-all';
    return;
  }
  const gender = detectGenderFromName(val);
  if (gender === 'หญิง') {
    pill.textContent = '👧 เพศหญิง';
    pill.className = 'text-[10px] px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold transition-all';
  } else {
    pill.textContent = '👦 เพศชาย';
    pill.className = 'text-[10px] px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold transition-all';
  }
};
window.handleStudentAddClassChange = function() {
  const classSel = document.getElementById('student-add-class');
  const noInp = document.getElementById('student-add-no');
  if (!classSel || !noInp) return;

  const targetClass = classSel.value;
  const students = state.students.filter(s => {
    const fullClass = s.room ? `${s.grade}/${s.room}` : s.grade;
    return fullClass === targetClass || s.grade === targetClass;
  });

  const maxNo = students.reduce((max, s) => Math.max(max, s.student_no || 0), 0);
  noInp.value = maxNo + 1;
};
function parseStudentNameAndStatus(rawName) {
  let name = (rawName || '').trim();
  let status = 'กำลังศึกษา';
  if (name.includes('ย้ายออก')) {
    status = 'ย้ายออก';
    name = name.replace(/[\(\[\{]?\s*ย้ายออก\s*[\)\]\}]?/g, '').trim();
  }
  return { name, status };
}

window.saveSingleStudent = function() {
  const classSel = document.getElementById('student-add-class');
  const noInp = document.getElementById('student-add-no');
  const nameInp = document.getElementById('student-add-name');
  const statusSel = document.getElementById('student-add-status');
  if (!classSel || !noInp || !nameInp) return;

  const fullClassName = classSel.value;
  const no = parseInt(noInp.value);
  const rawName = nameInp.value.trim();

  if (!fullClassName) {
    alert('กรุณาเลือกห้องเรียน');
    return;
  }
  if (!no || no < 1) {
    alert('กรุณากรอกเลขที่ให้ถูกต้อง');
    return;
  }
  if (!rawName) {
    alert('กรุณากรอกชื่อ - นามสกุลนักเรียน');
    return;
  }

  let grade = fullClassName;
  let room = '1';
  if (fullClassName.includes('/')) {
    const parts = fullClassName.split('/');
    grade = parts[0].trim();
    room = parts[1].trim();
  }

  const { name, status: parsedStatus } = parseStudentNameAndStatus(rawName);
  const chosenStatus = statusSel ? statusSel.value : parsedStatus;
  const gender = detectGenderFromName(name);
  const newStudent = {
    id: `std-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    student_no: no,
    name,
    grade,
    room,
    gender,
    status: chosenStatus
  };
  state.students.push(newStudent);
  saveLocalData();

  nameInp.value = '';
  if (statusSel) statusSel.value = 'กำลังศึกษา';
  if (typeof window.handleStudentNameInputLive === 'function') window.handleStudentNameInputLive('');
  if (typeof window.handleStudentAddClassChange === 'function') window.handleStudentAddClassChange();
  renderStudentsView();
  showNotification(`เพิ่มนักเรียน "${name}" (เลขที่ ${no} • ${chosenStatus}) สำเร็จ`);
};
window.switchImportTab = function(tab) {
  state.importTab = tab;
  const btnFile = document.getElementById('btn-import-tab-file');
  const btnPaste = document.getElementById('btn-import-tab-paste');
  const panelFile = document.getElementById('panel-import-file');
  const panelPaste = document.getElementById('panel-import-paste');

  if (tab === 'paste') {
    if (btnPaste) {
      btnPaste.className = 'px-3 py-1.5 rounded-lg bg-white text-blue-700 font-semibold shadow-2xs transition-all';
    }
    if (btnFile) {
      btnFile.className = 'px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition-all';
    }
    if (panelPaste) panelPaste.classList.remove('hidden');
    if (panelFile) panelFile.classList.add('hidden');
  } else {
    if (btnFile) {
      btnFile.className = 'px-3 py-1.5 rounded-lg bg-white text-blue-700 font-semibold shadow-2xs transition-all';
    }
    if (btnPaste) {
      btnPaste.className = 'px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition-all';
    }
    if (panelFile) panelFile.classList.remove('hidden');
    if (panelPaste) panelPaste.classList.add('hidden');
  }
};
window.handleQuickPasteImport = function() {
  const classSel = document.getElementById('student-paste-class');
  const textEl = document.getElementById('student-paste-textarea');
  if (!classSel || !textEl) return;

  const targetClass = classSel.value;
  const text = textEl.value.trim();

  if (!targetClass) {
    alert('กรุณาเลือกห้องเรียน');
    return;
  }
  if (!text) {
    alert('กรุณาวางรายชื่อนักเรียนในกล่องข้อความ');
    return;
  }

  let grade = targetClass;
  let room = '1';
  if (targetClass.includes('/')) {
    const parts = targetClass.split('/');
    grade = parts[0].trim();
    room = parts[1].trim();
  }

  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) {
    alert('ไม่พบรายชื่อในข้อความที่วาง');
    return;
  }

  const existingInRoom = state.students.filter(s => {
    const fullClass = s.room ? `${s.grade}/${s.room}` : s.grade;
    return fullClass === targetClass || s.grade === targetClass;
  });
  let maxNo = existingInRoom.reduce((max, s) => Math.max(max, s.student_no || 0), 0);

  let addedCount = 0;
  lines.forEach(line => {
    let no = ++maxNo;
    let name = line;

    const commaParts = line.split(/[,;\t]/);
    if (commaParts.length >= 2 && !isNaN(parseInt(commaParts[0].trim()))) {
      no = parseInt(commaParts[0].trim());
      name = commaParts.slice(1).join(' ').trim();
    } else {
      const match = line.match(/^(\d+)[\.\s\t]+(.+)$/);
      if (match) {
        no = parseInt(match[1]);
        name = match[2].trim();
      }
    }

    if (name) {
      const { name: cleanName, status: parsedStatus } = parseStudentNameAndStatus(name);
      const gender = detectGenderFromName(cleanName);
      state.students.push({
        id: `std-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
        student_no: no,
        name: cleanName,
        grade,
        room,
        gender,
        status: parsedStatus
      });
      addedCount++;
    }
  });

  saveLocalData();
  textEl.value = '';
  renderStudentsView();
  showNotification(`นำเข้านักเรียนห้อง ${targetClass} จำนวน ${addedCount} คน สำเร็จ!`);
};
window.handleStudentFileImport = function() {
  const classSel = document.getElementById('student-import-class');
  const fileInput = document.getElementById('student-import-file');
  if (!classSel || !fileInput || !fileInput.files || fileInput.files.length === 0) {
    alert('กรุณาเลือกห้องเรียนและเลือกไฟล์ที่ต้องการนำเข้า');
    return;
  }

  const targetClass = classSel.value;
  let grade = targetClass;
  let room = '1';
  if (targetClass.includes('/')) {
    const parts = targetClass.split('/');
    grade = parts[0].trim();
    room = parts[1].trim();
  }

  const file = fileInput.files[0];
  const fileName = file.name.toLowerCase();

  const reader = new FileReader();

  if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
    reader.onload = function(e) {
      if (!window.XLSX) {
        alert('SheetJS Library ยังไม่โหลด');
        return;
      }
      try {
        const data = new Uint8Array(e.target.result);
        const wb = window.XLSX.read(data, { type: 'array' });
        const wsName = wb.SheetNames[0];
        const ws = wb.Sheets[wsName];
        const rows = window.XLSX.utils.sheet_to_json(ws, { header: 1 });

        let addedCount = 0;
        let autoNo = 1;

        rows.forEach(row => {
          if (!row || row.length === 0) return;
          let no = null;
          let name = '';

          if (row.length === 1 && typeof row[0] === 'string') {
            const match = row[0].match(/^(\d+)[\.\s\t]+(.+)$/);
            if (match) {
              no = parseInt(match[1]);
              name = match[2].trim();
            } else {
              name = row[0].trim();
            }
          } else if (row.length >= 2) {
            if (!isNaN(parseInt(row[0]))) {
              no = parseInt(row[0]);
              name = String(row[1] || '').trim();
            } else {
              name = String(row[0] || '').trim();
            }
          }

          if (name && !name.includes('ชื่อ') && !name.includes('เลขที่')) {
            const studentNo = no || (autoNo++);
            const { name: cleanName, status: parsedStatus } = parseStudentNameAndStatus(name);
            const gender = detectGenderFromName(cleanName);
            state.students.push({
              id: `std-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
              student_no: studentNo,
              name: cleanName,
              grade,
              room,
              gender,
              status: parsedStatus
            });
            addedCount++;
          }
        });

        saveLocalData();
        fileInput.value = '';
        renderStudentsView();
        showNotification(`นำเข้าข้อมูลจากไฟล์ ${file.name} จำนวน ${addedCount} คน สำเร็จ!`);
      } catch (err) {
        alert('เกิดข้อผิดพลาดในการอ่านไฟล์ Excel: ' + err.message);
      }
    };
    reader.readAsArrayBuffer(file);
  } else {
    reader.onload = function(e) {
      const text = e.target.result;
      const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      let addedCount = 0;
      let autoNo = 1;

      lines.forEach(line => {
        let no = null;
        let name = line;
        const parts = line.split(/[,;\t]/);
        if (parts.length >= 2 && !isNaN(parseInt(parts[0].trim()))) {
          no = parseInt(parts[0].trim());
          name = parts.slice(1).join(' ').trim();
        } else {
          const match = line.match(/^(\d+)[\.\s\t]+(.+)$/);
          if (match) {
            no = parseInt(match[1]);
            name = match[2].trim();
          }
        }

        if (name && !name.includes('ชื่อ') && !name.includes('เลขที่')) {
          const studentNo = no || (autoNo++);
          const { name: cleanName, status: parsedStatus } = parseStudentNameAndStatus(name);
          const gender = detectGenderFromName(cleanName);
          state.students.push({
            id: `std-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
            student_no: studentNo,
            name: cleanName,
            grade,
            room,
            gender,
            status: parsedStatus
          });
          addedCount++;
        }
      });

      saveLocalData();
      fileInput.value = '';
      renderStudentsView();
      showNotification(`นำเข้าข้อมูลจากไฟล์ ${file.name} จำนวน ${addedCount} คน สำเร็จ!`);
    };
    reader.readAsText(file, 'utf-8');
  }
};
function renderStudentsView() {
  const tbody = document.getElementById('students-table-body');
  if (!tbody) return;

  const classrooms = (state.classrooms && state.classrooms.length > 0) ? state.classrooms : DEFAULT_CLASSROOMS;
  const currentTargetClass = (state.currentGrade && state.currentGrade !== 'all') 
    ? state.currentGrade 
    : (classrooms[0] ? classrooms[0].name : 'ป.6');
  state.currentGrade = currentTargetClass;
  state.selectedStudentFilterClass = currentTargetClass;

  // 1. Populate Unified Target Classroom Selector
  const unifiedSel = document.getElementById('student-unified-class-select');
  if (unifiedSel) {
    unifiedSel.innerHTML = classrooms.map(c => `<option value="${c.name}" ${c.name === currentTargetClass ? 'selected' : ''}>ห้อง ${c.name}</option>`).join('');
    unifiedSel.value = currentTargetClass;
  }

  // 2. Update Target Labels & Hidden Input Values
  const targetLabel = document.getElementById('student-current-target-label');
  if (targetLabel) targetLabel.textContent = `ห้อง ${currentTargetClass}`;

  const addDisplay = document.getElementById('student-add-class-display');
  if (addDisplay) addDisplay.value = `ห้อง ${currentTargetClass}`;
  const addClassInp = document.getElementById('student-add-class');
  if (addClassInp) addClassInp.value = currentTargetClass;

  const importDisplay = document.getElementById('student-import-class-display');
  if (importDisplay) importDisplay.textContent = `ห้อง ${currentTargetClass}`;
  const importClassInp = document.getElementById('student-import-class');
  if (importClassInp) importClassInp.value = currentTargetClass;

  const pasteDisplay = document.getElementById('student-paste-class-display');
  if (pasteDisplay) pasteDisplay.textContent = `ห้อง ${currentTargetClass}`;
  const pasteClassInp = document.getElementById('student-paste-class');
  if (pasteClassInp) pasteClassInp.value = currentTargetClass;

  // 3. Update Table Classroom Badge
  const tableBadge = document.getElementById('student-table-class-badge');
  if (tableBadge) tableBadge.textContent = `ห้อง ${currentTargetClass}`;

  const selectedClass = currentTargetClass;
  state.selectedStudentFilterClass = selectedClass;

  // 4. Auto-Next student number for this target classroom
  if (typeof window.handleStudentAddClassChange === 'function') window.handleStudentAddClassChange();

  const searchInput = document.getElementById('student-search-input');
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

  let filtered = [...state.students];

  if (selectedClass && selectedClass !== 'all') {
    filtered = filtered.filter(s => {
      const full = s.room ? `${s.grade}/${s.room}` : s.grade;
      return full === selectedClass || s.grade === selectedClass;
    });
  }

  if (query) {
    filtered = filtered.filter(s => 
      s.name.toLowerCase().includes(query) ||
      String(s.student_no).includes(query)
    );
  }

  filtered.sort((a, b) => {
    if (a.grade !== b.grade) return a.grade.localeCompare(b.grade, 'th');
    return (a.student_no || 0) - (b.student_no || 0);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="py-12 text-center text-slate-400">ไม่พบรายชื่อนักเรียนตามเงื่อนไขที่ค้นหา</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(student => {
    const fullClass = student.room ? `${student.grade}/${student.room}` : student.grade;
    const gender = student.gender || detectGenderFromName(student.name);
    const isTransferred = student.status === 'ย้ายออก';

    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/80 transition-colors ${isTransferred ? 'bg-slate-50/50 opacity-80' : ''}">
        <td class="py-3 px-4 font-semibold text-slate-700">
          <span class="badge-classroom text-xs">ห้อง ${fullClass}</span>
        </td>
        <td class="py-3 px-3 text-center font-bold text-slate-800 text-sm">
          ${student.student_no}
        </td>
        <td class="py-3 px-4 font-medium">
          <span class="${isTransferred ? 'line-through text-slate-500' : 'text-slate-900'}">${student.name}</span>
        </td>
        <td class="py-3 px-3 text-center">
          ${gender === 'หญิง' 
            ? `<span class="badge-gender-girl">👧 หญิง</span>` 
            : `<span class="badge-gender-boy">👦 ชาย</span>`
          }
        </td>
        <td class="py-3 px-3 text-center">
          ${isTransferred 
            ? `<button 
                 type="button" 
                 onclick="toggleStudentStatus('${student.id}')" 
                 title="คลิกเพื่อสลับเป็น 'กำลังศึกษา'" 
                 class="touch-target inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-300 hover:bg-slate-200 transition-colors cursor-pointer"
               >
                 <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                 <span>ย้ายออก</span>
               </button>`
            : `<button 
                 type="button" 
                 onclick="toggleStudentStatus('${student.id}')" 
                 title="คลิกเพื่อสลับเป็น 'ย้ายออก'" 
                 class="touch-target inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
               >
                 <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                 <span>กำลังศึกษา</span>
               </button>`
          }
        </td>
        <td class="py-3 px-4 text-right">
          <div class="inline-flex items-center gap-1.5">
            <button 
              onclick="openEditStudentModal('${student.id}')" 
              class="touch-target px-2.5 py-1 rounded-lg text-xs font-semibold bg-sky-50 text-sky-700 hover:bg-sky-100 transition-colors"
              title="แก้ไขข้อมูลนักเรียน"
            >
              ✏️ แก้ไข
            </button>
            <button 
              onclick="deleteStudent('${student.id}')" 
              class="touch-target px-2 py-1 rounded-lg text-xs font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
              title="ลบนักเรียน"
            >
              🗑️ ลบ
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.toggleStudentStatus = function(id) {
  const student = state.students.find(s => s.id === id);
  if (!student) return;
  const newStatus = (student.status === 'ย้ายออก') ? 'กำลังศึกษา' : 'ย้ายออก';
  student.status = newStatus;
  if (newStatus === 'ย้ายออก') {
    Object.keys(state.attendance || {}).forEach(d => {
      if (state.attendance[d] && state.attendance[d][student.id]) {
        delete state.attendance[d][student.id];
      }
    });
    if (state.scores && state.scores[student.id]) {
      delete state.scores[student.id];
    }
  }
  saveLocalData();
  renderStudentsView();
  showNotification(`เปลี่ยนสถานะของ "${student.name}" เป็น "${newStatus}" เรียบร้อยแล้ว`);
};
window.openEditStudentModal = function(id) {
  const student = state.students.find(s => s.id === id);
  if (!student) return;

  const modal = document.getElementById('edit-student-modal');
  const idInp = document.getElementById('edit-student-id');
  const classSel = document.getElementById('edit-student-class');
  const noInp = document.getElementById('edit-student-no');
  const nameInp = document.getElementById('edit-student-name');
  const genderSel = document.getElementById('edit-student-gender');
  const statusSel = document.getElementById('edit-student-status');

  if (modal && idInp && classSel && noInp && nameInp && genderSel) {
    idInp.value = student.id;
    const classrooms = state.classrooms || DEFAULT_CLASSROOMS;
    classSel.innerHTML = classrooms.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
    
    const currentFull = student.room ? `${student.grade}/${student.room}` : student.grade;
    classSel.value = currentFull;
    noInp.value = student.student_no;
    nameInp.value = student.name;
    genderSel.value = student.gender || detectGenderFromName(student.name);
    if (statusSel) {
      statusSel.value = student.status || 'กำลังศึกษา';
    }

    modal.classList.remove('hidden');
  }
};
window.handleEditStudentNameInput = function(name) {
  const genderSel = document.getElementById('edit-student-gender');
  if (genderSel && name) {
    genderSel.value = detectGenderFromName(name);
  }
};
window.closeEditStudentModal = function() {
  const modal = document.getElementById('edit-student-modal');
  if (modal) modal.classList.add('hidden');
};
window.saveEditStudent = function() {
  const idInp = document.getElementById('edit-student-id');
  const classSel = document.getElementById('edit-student-class');
  const noInp = document.getElementById('edit-student-no');
  const nameInp = document.getElementById('edit-student-name');
  const genderSel = document.getElementById('edit-student-gender');
  const statusSel = document.getElementById('edit-student-status');

  if (!idInp || !classSel || !noInp || !nameInp || !genderSel) return;
  const id = idInp.value;
  const student = state.students.find(s => s.id === id);
  if (!student) return;

  const targetClass = classSel.value;
  let grade = targetClass;
  let room = '1';
  if (targetClass.includes('/')) {
    const parts = targetClass.split('/');
    grade = parts[0].trim();
    room = parts[1].trim();
  }

  student.grade = grade;
  student.room = room;
  student.student_no = parseInt(noInp.value) || student.student_no;
  student.name = nameInp.value.trim() || student.name;
  student.gender = genderSel.value;
  if (statusSel) {
    student.status = statusSel.value;
    if (student.status === 'ย้ายออก') {
      Object.keys(state.attendance || {}).forEach(d => {
        if (state.attendance[d] && state.attendance[d][student.id]) {
          delete state.attendance[d][student.id];
        }
      });
      if (state.scores && state.scores[student.id]) {
        delete state.scores[student.id];
      }
    }
  }

  saveLocalData();
  closeEditStudentModal();
  renderStudentsView();
  showNotification('แก้ไขข้อมูลนักเรียนสำเร็จ');
};
window.deleteStudent = function(id) {
  const student = state.students.find(s => s.id === id);
  if (!student) return;
  if (!confirm(`ต้องการลบรายชื่อ "${student.name}" (เลขที่ ${student.student_no}) ออกจากระบบหรือไม่?`)) return;

  state.students = state.students.filter(s => s.id !== id);
  saveLocalData();
  renderStudentsView();
  showNotification(`ลบข้อมูล "${student.name}" เรียบร้อยแล้ว`);
};
window.exportStudentRosterExcel = function() {
  if (!window.XLSX) {
    alert('SheetJS Library ยังไม่โหลด');
    return;
  }

  const selectedClass = state.currentGrade || state.selectedStudentFilterClass || 'ป.6';
  let list = [...state.students];
  if (selectedClass !== 'all') {
    list = list.filter(s => {
      const full = s.room ? `${s.grade}/${s.room}` : s.grade;
      return full === selectedClass || s.grade === selectedClass;
    });
  }

  list.sort((a, b) => (a.student_no || 0) - (b.student_no || 0));

  const s = state.settings || DEFAULT_SETTINGS;
  const headers = ['ลำดับที่', 'ห้องเรียน', 'เลขที่', 'รหัสนักเรียน', 'ชื่อ - สกุล', 'เพศ', 'สถานะ'];
  const rows = list.map((st, i) => [
    i + 1,
    st.room ? `${st.grade}/${st.room}` : st.grade,
    st.student_no,
    st.id,
    st.name,
    st.gender || detectGenderFromName(st.name),
    st.status || 'กำลังศึกษา'
  ]);

  const wb = window.XLSX.utils.book_new();
  const wsData = [
    [`บัญชีรายชื่อนักเรียน (${selectedClass === 'all' ? 'ทุกห้องเรียน' : selectedClass})`],
    [`โรงเรียน: ${s.schoolName || 'โรงเรียน'} | วันที่ส่งออก: ${new Date().toLocaleDateString('th-TH')}`],
    [],
    headers,
    ...rows
  ];

  const ws = window.XLSX.utils.aoa_to_sheet(wsData);
  window.XLSX.utils.book_append_sheet(wb, ws, 'รายชื่อนักเรียน');
  window.XLSX.writeFile(wb, `ทะเบียนนักเรียน_${selectedClass}_${new Date().toISOString().split('T')[0]}.xlsx`);
  showNotification('ดาวน์โหลดไฟล์รายชื่อนักเรียน (Excel) สำเร็จ');
};
// ==========================================
// 14. MULTI-YEAR MANAGEMENT & PROMOTION WIZARD
// ==========================================

function populateGlobalYearSelector() {
  const yearSel = document.getElementById('global-year-selector');
  if (!yearSel) return;
  const years = state.academicYears && state.academicYears.length > 0 ? state.academicYears : [state.settings.academicYear || '2569'];
  const activeYear = state.settings.academicYear || '2569';
  const currentSel = state.currentAcademicYear || activeYear;

  // Sort descending (e.g. 2570, 2569)
  const sortedYears = Array.from(new Set([...years, activeYear])).sort((a, b) => b.localeCompare(a));

  yearSel.innerHTML = sortedYears.map(y => {
    const isCurrentActive = y === activeYear;
    const isSelected = y === currentSel;
    const label = isCurrentActive ? `ปี ${y} (ปัจจุบัน)` : `ปี ${y} (คลังประวัติศาสตร์)`;
    return `<option value="${y}" ${isSelected ? 'selected' : ''}>${label}</option>`;
  }).join('');

  // Update banner if viewing archive
  const banner = document.getElementById('archived-year-banner');
  const bannerText = document.getElementById('archived-year-banner-text');
  if (banner) {
    if (state.isViewingArchive) {
      banner.classList.remove('hidden');
      banner.classList.add('flex');
      if (bannerText) bannerText.textContent = `คลังประวัติศาสตร์ ปี ${currentSel} (ดูย้อนหลัง)`;
    } else {
      banner.classList.add('hidden');
      banner.classList.remove('flex');
    }
  }

  // Update settings page archived years badge if present
  const archiveListEl = document.getElementById('settings-archived-years-list');
  if (archiveListEl) {
    const archiveKeys = Object.keys(state.yearArchives || {});
    if (archiveKeys.length > 0) {
      archiveListEl.innerHTML = `<span class="text-purple-600">🗄️ คลังประวัติศาสตร์ที่บันทึกไว้:</span> ` + 
        archiveKeys.map(y => `<span class="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 font-bold border border-purple-200">ปี ${y}</span>`).join(' ');
    } else {
      archiveListEl.innerHTML = `<span class="text-slate-400 font-normal">ยังไม่มีปีการศึกษาในคลังประวัติศาสตร์ (จะสร้างเมื่อสั่งสิ้นปีการศึกษา)</span>`;
    }
  }
}

window.handleGlobalYearChange = function(selectedYear) {
  const activeYear = state.settings.academicYear || '2569';
  
  if (selectedYear === activeYear) {
    // Switch back to active current year
    if (state.isViewingArchive && state._activeWorkingSnapshot) {
      const snap = state._activeWorkingSnapshot;
      state.classrooms = snap.classrooms;
      state.students = snap.students;
      state.attendance = snap.attendance;
      state.scores = snap.scores;
      state.subAssignments = snap.subAssignments;
      state.subScores = snap.subScores;
      state.customIndicatorMax = snap.customIndicatorMax;
      state.customUnitWeight = snap.customUnitWeight;
      state.holisticAssessments = snap.holisticAssessments;
      state.lessonLogs = snap.lessonLogs;
      state._activeWorkingSnapshot = null;
    }
    state.isViewingArchive = false;
    state.currentAcademicYear = activeYear;
    populateGlobalYearSelector();
    renderApp();
    showNotification(`กลับสู่ปีการศึกษาปัจจุบัน (${activeYear}) เรียบร้อยครับ`);
  } else {
    // Switch to an archived year
    const archive = state.yearArchives && state.yearArchives[selectedYear];
    if (!archive) {
      showNotification(`ไม่พบข้อมูลคลังประวัติศาสตร์ของปีการศึกษา ${selectedYear}`, 'error');
      populateGlobalYearSelector();
      return;
    }

    // Stash active snapshot before loading archive if not already stashed
    if (!state.isViewingArchive) {
      state._activeWorkingSnapshot = {
        classrooms: JSON.parse(JSON.stringify(state.classrooms)),
        students: JSON.parse(JSON.stringify(state.students)),
        attendance: JSON.parse(JSON.stringify(state.attendance)),
        scores: JSON.parse(JSON.stringify(state.scores)),
        subAssignments: JSON.parse(JSON.stringify(state.subAssignments)),
        subScores: JSON.parse(JSON.stringify(state.subScores)),
        customIndicatorMax: JSON.parse(JSON.stringify(state.customIndicatorMax)),
        customUnitWeight: JSON.parse(JSON.stringify(state.customUnitWeight)),
        holisticAssessments: JSON.parse(JSON.stringify(state.holisticAssessments)),
        lessonLogs: JSON.parse(JSON.stringify(state.lessonLogs))
      };
    }

    // Load archive data into state for viewing/exporting
    state.classrooms = JSON.parse(JSON.stringify(archive.classrooms || DEFAULT_CLASSROOMS));
    state.students = JSON.parse(JSON.stringify(archive.students || []));
    state.attendance = JSON.parse(JSON.stringify(archive.attendance || {}));
    state.scores = JSON.parse(JSON.stringify(archive.scores || {}));
    state.subAssignments = JSON.parse(JSON.stringify(archive.subAssignments || {}));
    state.subScores = JSON.parse(JSON.stringify(archive.subScores || {}));
    state.customIndicatorMax = JSON.parse(JSON.stringify(archive.customIndicatorMax || {}));
    state.customUnitWeight = JSON.parse(JSON.stringify(archive.customUnitWeight || {}));
    state.holisticAssessments = JSON.parse(JSON.stringify(archive.holisticAssessments || {}));
    state.lessonLogs = JSON.parse(JSON.stringify(archive.lessonLogs || []));

    state.isViewingArchive = true;
    state.currentAcademicYear = selectedYear;

    populateGlobalYearSelector();
    renderApp();
    showNotification(`เปิดดูข้อมูลคลังประวัติศาสตร์ ปีการศึกษา ${selectedYear} เรียบร้อย (โหมดดูย้อนหลัง & พิมพ์ ปพ.5)`);
  }
};

window.exitArchiveView = function() {
  const activeYear = state.settings.academicYear || '2569';
  window.handleGlobalYearChange(activeYear);
};

// Wizard Dialog Control
window.openPromotionWizardModal = function() {
  if (state.isViewingArchive) {
    showNotification('กรุณากลับสู่ปีการศึกษาปัจจุบันก่อนดำเนินการเลื่อนชั้นเรียนครับ', 'error');
    return;
  }

  const modal = document.getElementById('promotion-wizard-modal');
  if (!modal) return;

  const currentYear = state.settings.academicYear || '2569';
  const targetYear = String(parseInt(currentYear, 10) + 1);

  const subTitleEl = document.getElementById('promotion-wizard-subtitle');
  if (subTitleEl) {
    subTitleEl.textContent = `เตรียมส่งต่อนักเรียนจากปีการศึกษา ${currentYear} ➔ ${targetYear} พร้อมสำรองข้อมูล ปพ.5 ปลอดภัย 100%`;
  }

  const newYearInp = document.getElementById('wizard-new-year-input');
  if (newYearInp) newYearInp.value = targetYear;

  // Initialize decisions map
  state._wizardStudentDecisions = {};
  state._wizardGradeFilter = 'ALL';

  // Count active students per grade
  const allStudents = state.students || [];
  const p6Count = allStudents.filter(s => s.grade === 'ป.6' && s.status !== 'ย้ายออก').length;
  const p5Count = allStudents.filter(s => s.grade === 'ป.5' && s.status !== 'ย้ายออก').length;
  const p4Count = allStudents.filter(s => s.grade === 'ป.4' && s.status !== 'ย้ายออก').length;
  const p3Count = allStudents.filter(s => s.grade === 'ป.3' && s.status !== 'ย้ายออก').length;

  const c6 = document.getElementById('wizard-count-p6');
  if (c6) c6.textContent = `${p6Count} คน`;
  const c5 = document.getElementById('wizard-count-p5');
  if (c5) c5.textContent = `${p5Count} คน`;
  const c4 = document.getElementById('wizard-count-p4');
  if (c4) c4.textContent = `${p4Count} คน`;
  const c3 = document.getElementById('wizard-count-p3');
  if (c3) c3.textContent = `${p3Count} คน`;

  // Default decisions
  allStudents.forEach(s => {
    if (s.status === 'ย้ายออก') {
      state._wizardStudentDecisions[s.id] = 'transfer';
    } else if (s.grade === 'ป.6') {
      state._wizardStudentDecisions[s.id] = 'graduate';
    } else {
      state._wizardStudentDecisions[s.id] = 'promote';
    }
  });

  renderWizardReviewTable();
  modal.classList.remove('hidden');
};

window.closePromotionWizardModal = function() {
  const modal = document.getElementById('promotion-wizard-modal');
  if (modal) modal.classList.add('hidden');
};

window.filterWizardReviewTable = function(grade) {
  state._wizardGradeFilter = grade;
  const tabs = document.querySelectorAll('#wizard-grade-tabs .wizard-tab-btn');
  tabs.forEach(btn => {
    if ((grade === 'ALL' && btn.textContent.includes('ทั้งหมด')) || btn.textContent.includes(grade)) {
      btn.className = 'wizard-tab-btn active px-3 py-1 rounded-lg bg-white shadow-2xs text-purple-900 font-bold';
    } else {
      btn.className = 'wizard-tab-btn px-3 py-1 rounded-lg text-slate-600 hover:text-slate-900 font-medium';
    }
  });
  renderWizardReviewTable();
};

window.handleWizardDecisionChange = function(studentId, decision) {
  state._wizardStudentDecisions[studentId] = decision;
  renderWizardReviewTable();
};

function renderWizardReviewTable() {
  const tbody = document.getElementById('wizard-review-tbody');
  if (!tbody) return;

  const filter = state._wizardGradeFilter || 'ALL';
  const allStudents = state.students || [];

  let list = allStudents.filter(s => {
    if (filter === 'ALL') return true;
    return s.grade === filter;
  });

  // Sort by grade descending (ป.6 down to ป.3), then student_no
  list.sort((a, b) => {
    if (a.grade !== b.grade) return b.grade.localeCompare(a.grade);
    return (a.student_no || 0) - (b.student_no || 0);
  });

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="py-6 text-center text-xs text-slate-400">ไม่พบรายชื่อในระดับชั้นนี้</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(s => {
    const decision = state._wizardStudentDecisions[s.id] || (s.grade === 'ป.6' ? 'graduate' : 'promote');

    let targetGradeText = '';
    let targetClassBadge = '';

    if (decision === 'graduate') {
      targetGradeText = '🎓 จบการศึกษา (ศิษย์เก่า)';
      targetClassBadge = 'bg-amber-100 text-amber-800 border-amber-200';
    } else if (decision === 'transfer') {
      targetGradeText = 'ย้ายออก / พ้นสภาพ';
      targetClassBadge = 'bg-rose-100 text-rose-700 border-rose-200';
    } else if (decision === 'repeat') {
      targetGradeText = `ซ้ำชั้น (${s.grade}/1 เดิม)`;
      targetClassBadge = 'bg-slate-100 text-slate-700 border-slate-200';
    } else { // promote
      if (s.grade === 'ป.5') targetGradeText = '⬆️ ป.6/1 (ห้องหลัก)';
      else if (s.grade === 'ป.4') targetGradeText = '⬆️ ป.5/1 (ห้องหลัก)';
      else if (s.grade === 'ป.3') targetGradeText = '⬆️ ป.4/1 (ห้องหลัก)';
      else targetGradeText = 'จบการศึกษา';
      targetClassBadge = 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2 px-3 text-center font-bold text-slate-700">${s.grade}</td>
        <td class="py-2 px-3 text-center text-slate-600 font-medium">${s.student_no || '-'}</td>
        <td class="py-2 px-3 font-semibold text-slate-900">${s.name}</td>
        <td class="py-2 px-3">
          <select 
            onchange="handleWizardDecisionChange('${s.id}', this.value)" 
            class="w-full py-1 px-2 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-purple-500 focus:outline-none bg-white"
          >
            <option value="promote" ${decision === 'promote' ? 'selected' : ''}>⬆️ เลื่อนชั้นเรียน (แนะนำ)</option>
            <option value="graduate" ${decision === 'graduate' ? 'selected' : ''}>🎓 จบการศึกษา</option>
            <option value="repeat" ${decision === 'repeat' ? 'selected' : ''}>🔁 ซ้ำชั้น (อยู่ชั้นเดิม)</option>
            <option value="transfer" ${decision === 'transfer' ? 'selected' : ''}>ย้ายสถานศึกษา / ลาออก</option>
          </select>
        </td>
        <td class="py-2 px-3 text-center">
          <span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${targetClassBadge}">
            ${targetGradeText}
          </span>
        </td>
      </tr>
    `;
  }).join('');
}

function shiftDateYear(dateStr, years = 1) {
  if (!dateStr) return '';
  const parts = String(dateStr).split('-');
  if (parts.length === 3) {
    const newY = parseInt(parts[0], 10) + years;
    return `${newY}-${parts[1]}-${parts[2]}`;
  }
  return dateStr;
}

window.executePromotionWizard = async function() {
  const currentYear = state.settings.academicYear || '2569';
  const targetYearInp = document.getElementById('wizard-new-year-input');
  const targetYear = (targetYearInp && targetYearInp.value.trim()) || String(parseInt(currentYear, 10) + 1);

  const shouldArchive = document.getElementById('wizard-opt-archive')?.checked ?? true;
  const shouldCloneSub = document.getElementById('wizard-opt-clone-sub')?.checked ?? true;
  const newStudentsText = document.getElementById('wizard-new-students-input')?.value || '';

  const confirmMsg = `ยืนยันการสิ้นสุดปีการศึกษา ${currentYear} และเลื่อนชั้นเรียนสู่ปีการศึกษา ${targetYear} หรือไม่?\n\n- ข้อมูล ปพ.5 ปี ${currentYear} จะถูกบันทึกเข้าคลังประวัติศาสตร์\n- นักเรียน ป.5 จะเลื่อนขึ้นเป็น ป.6, ป.4 ➔ ป.5, ป.3 ➔ ป.4\n- นักเรียน ป.6 เดิมจะจบการศึกษา\n- คะแนนและเวลาเรียนของปีใหม่จะเริ่มต้นรอบใหม่`;
  if (!confirm(confirmMsg)) return;

  const btn = document.getElementById('wizard-confirm-btn');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span>⏳</span> <span>กำลังดำเนินการเลื่อนชั้นเรียน...</span>`;
  }

  try {
    // 1. Archive Current Year Data
    if (shouldArchive) {
      if (!state.yearArchives) state.yearArchives = {};
      state.yearArchives[currentYear] = {
        academicYear: currentYear,
        archivedAt: new Date().toISOString(),
        classrooms: JSON.parse(JSON.stringify(state.classrooms)),
        students: JSON.parse(JSON.stringify(state.students)),
        attendance: JSON.parse(JSON.stringify(state.attendance)),
        scores: JSON.parse(JSON.stringify(state.scores)),
        subAssignments: JSON.parse(JSON.stringify(state.subAssignments || {})),
        subScores: JSON.parse(JSON.stringify(state.subScores || {})),
        customIndicatorMax: JSON.parse(JSON.stringify(state.customIndicatorMax || {})),
        customUnitWeight: JSON.parse(JSON.stringify(state.customUnitWeight || {})),
        holisticAssessments: JSON.parse(JSON.stringify(state.holisticAssessments || {})),
        lessonLogs: JSON.parse(JSON.stringify(state.lessonLogs || [])),
        settings: JSON.parse(JSON.stringify(state.settings || {}))
      };
    }

    // 2. Add years
    if (!state.academicYears) state.academicYears = [currentYear];
    if (!state.academicYears.includes(currentYear)) state.academicYears.push(currentYear);
    if (!state.academicYears.includes(targetYear)) state.academicYears.push(targetYear);

    // 3. Process Student Promotion
    const decisions = state._wizardStudentDecisions || {};
    const updatedStudents = [];

    (state.students || []).forEach(s => {
      const dec = decisions[s.id] || (s.grade === 'ป.6' ? 'graduate' : 'promote');
      if (dec === 'graduate') {
        updatedStudents.push({ ...s, status: 'จบการศึกษา' });
      } else if (dec === 'transfer') {
        updatedStudents.push({ ...s, status: 'ย้ายออก' });
      } else if (dec === 'repeat') {
        updatedStudents.push({ ...s, status: 'กำลังศึกษา' });
      } else { // promote
        let nextGrade = s.grade;
        if (s.grade === 'ป.5') nextGrade = 'ป.6';
        else if (s.grade === 'ป.4') nextGrade = 'ป.5';
        else if (s.grade === 'ป.3') nextGrade = 'ป.4';
        updatedStudents.push({ ...s, grade: nextGrade, room: '1', status: 'กำลังศึกษา' });
      }
    });

    // Parse incoming students (e.g. ป.3 new batch)
    if (newStudentsText.trim()) {
      const lines = newStudentsText.split('\n').map(l => l.trim()).filter(Boolean);
      lines.forEach((name, idx) => {
        updatedStudents.push({
          id: `TEMP-P3-${idx + 1}`,
          student_no: idx + 1,
          name: name,
          grade: 'ป.3',
          room: '1',
          gender: detectGenderFromName(name),
          status: 'กำลังศึกษา'
        });
      });
    }

    // Re-index student_no and clean IDs per grade for active students
    ['ป.6', 'ป.5', 'ป.4', 'ป.3'].forEach(g => {
      const activeInGrade = updatedStudents.filter(s => s.grade === g && s.status === 'กำลังศึกษา');
      activeInGrade.forEach((s, idx) => {
        s.student_no = idx + 1;
        const gradeDigit = g.replace(/[^0-9]/g, '');
        s.id = `P${gradeDigit}1-${String(s.student_no).padStart(2, '0')}`;
      });
    });

    state.students = updatedStudents;

    // 4. Reset scores and attendance for new year
    state.scores = {};
    state.attendance = {};
    state.subScores = {};
    state.holisticAssessments = {};
    state.lessonLogs = [];

    // Clone or reset sub-assignments
    if (!shouldCloneSub) {
      state.subAssignments = {};
    }

    // 5. Update settings to new year & shift term dates by 1 year
    state.settings.academicYear = targetYear;
    state.currentAcademicYear = targetYear;
    state.isViewingArchive = false;

    if (state.settings.term1Start) state.settings.term1Start = shiftDateYear(state.settings.term1Start, 1);
    if (state.settings.term1End) state.settings.term1End = shiftDateYear(state.settings.term1End, 1);
    if (state.settings.term2Start) state.settings.term2Start = shiftDateYear(state.settings.term2Start, 1);
    if (state.settings.term2End) state.settings.term2End = shiftDateYear(state.settings.term2End, 1);

    // Save locally and sync to Supabase Cloud
    saveLocalData();
    syncToSupabase(true);

    closePromotionWizardModal();
    populateGlobalYearSelector();
    renderApp();

    showNotification(`🎉 สิ้นปีการศึกษาและเลื่อนชั้นเรียนสำเร็จ! ยินดีต้อนรับสู่ปีการศึกษา ${targetYear}`);
  } catch (err) {
    console.error('Promotion error:', err);
    showNotification('เกิดข้อผิดพลาดในการเลื่อนชั้นเรียน: ' + err.message, 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<span>🚀</span> <span>ยืนยันการเลื่อนชั้นและเปิดปีการศึกษาใหม่</span>`;
    }
  }
};

document.addEventListener('DOMContentLoaded', initApp);
