export const quantQuestions = [
  {
    category: "Number Systems",
    questions: [
      {
        id: 1,
        q: "What is the unit digit of $2^{15}$?",
        options: ["2", "4", "6", "8"],
        correct: "8",
        solution: "Cycle of 2 is 4 → $15 \\mod 4 = 3 → 2^3 = 8$"
      },
      {
        id: 2,
        q: "Find LCM of 8 and 12",
        options: ["12", "24", "36", "48"],
        correct: "24",
        solution: "$8=2^3, 12=2^2×3 → LCM=2^3×3=24$"
      },
      {
        id: 3,
        q: "HCF of 18 and 24?",
        options: ["3", "6", "9", "12"],
        correct: "6",
        solution: "Common highest factor = 6"
      },
      {
        id: 4,
        q: "Remainder of 29 ÷ 6?",
        options: ["3", "4", "5", "2"],
        correct: "5",
        solution: "$29 = 6×4 + 5$"
      },
      {
        id: 5,
        q: "What is $3^4$?",
        options: ["27", "64", "81", "16"],
        correct: "81",
        solution: "$3^4 = 81$"
      },
      {
        id: 6,
        q: "Find unit digit of $7^{22}$",
        options: ["1", "3", "7", "9"],
        correct: "9",
        solution: "Cycle of 7 → $22 mod 4 = 2 → 7^2 = 49$"
      },
      {
        id: 7,
        q: "Which is prime?",
        options: ["9", "15", "17", "21"],
        correct: "17",
        solution: "17 is prime"
      },
      {
        id: 8,
        q: "Binary of 5?",
        options: ["101", "110", "111", "100"],
        correct: "101",
        solution: "5 → 101"
      },
      {
        id: 9,
        q: "Square root of 144?",
        options: ["10", "11", "12", "13"],
        correct: "12",
        solution: "$\\sqrt{144} = 12$"
      },
      {
        id: 10,
        q: "Cube of 3?",
        options: ["9", "18", "27", "36"],
        correct: "27",
        solution: "$3^3 = 27$"
      }
    ]
  },

  {
    category: "Time & Work",
    questions: [
      {
        id: 11,
        q: "A does work in 10 days. 1 day work?",
        options: ["1/10", "1/5", "1/2", "2/5"],
        correct: "1/10",
        solution: "1 day = $1/10$"
      },
      {
        id: 12,
        q: "A 12 days, B 6 days → together?",
        options: ["3", "4", "6", "8"],
        correct: "4",
        solution: "$1/12 + 1/6 = 1/4$"
      },
      {
        id: 13,
        q: "If A is twice B, B=10 days → A?",
        options: ["3", "4", "5", "6"],
        correct: "5",
        solution: "Half time = 5"
      },
      {
        id: 14,
        q: "A+B work 5 days, A alone 10 → B?",
        options: ["10", "15", "20", "5"],
        correct: "10",
        solution: "B = 10 days"
      },
      {
        id: 15,
        q: "A completes 1/4 work in 2 days → full?",
        options: ["4", "6", "8", "10"],
        correct: "8",
        solution: "$1/4 = 2 → full = 8$"
      },
      {
        id: 16,
        q: "Efficiency ratio 2:1 → time ratio?",
        options: ["1:2", "2:1", "3:1", "1:3"],
        correct: "1:2",
        solution: "Inverse ratio"
      },
      {
        id: 17,
        q: "A+B=6 days, A=10 days → B?",
        options: ["10", "12", "15", "20"],
        correct: "15",
        solution: "Solve via LCM"
      },
      {
        id: 18,
        q: "Pipe fills tank in 5 hrs → 1 hr?",
        options: ["1/5", "1/10", "1/2", "2/5"],
        correct: "1/5",
        solution: "1 hr = 1/5"
      },
      {
        id: 19,
        q: "2 men = 4 women → 1 man?",
        options: ["2 women", "1 woman", "3 women", "4 women"],
        correct: "2 women",
        solution: "Ratio logic"
      },
      {
        id: 20,
        q: "A does in 20, B in 30 → together?",
        options: ["10", "12", "15", "18"],
        correct: "12",
        solution: "$1/20 + 1/30 = 1/12$"
      }
    ]
  },

  {
    category: "Percentage",
    questions: [
      {
        id: 21,
        q: "20% of 150?",
        options: ["20", "25", "30", "35"],
        correct: "30",
        solution: "$0.2×150=30$"
      },
      {
        id: 22,
        q: "Increase 200 by 10%",
        options: ["210", "220", "230", "240"],
        correct: "220",
        solution: "$200+20=220$"
      },
      {
        id: 23,
        q: "Decrease 100 by 20%",
        options: ["70", "75", "80", "85"],
        correct: "80",
        solution: "$100-20=80$"
      },
      {
        id: 24,
        q: "50 is what % of 200?",
        options: ["10%", "20%", "25%", "30%"],
        correct: "25%",
        solution: "$50/200=25%$"
      },
      {
        id: 25,
        q: "x increased by 50% → new?",
        options: ["1.5x", "2x", "x+50", "0.5x"],
        correct: "1.5x",
        solution: "Standard"
      }
    ]
  },

  {
    category: "Profit & Loss",
    questions: [
      {
        id: 26,
        q: "CP=100 SP=120 profit?",
        options: ["10%", "15%", "20%", "25%"],
        correct: "20%",
        solution: "Profit=20%"
      },
      {
        id: 27,
        q: "CP=200 Loss=50?",
        options: ["10%", "20%", "25%", "30%"],
        correct: "25%",
        solution: "$50/200$"
      },
      {
        id: 28,
        q: "SP=150 Profit=50 CP?",
        options: ["100", "120", "130", "140"],
        correct: "100",
        solution: "SP- Profit"
      },
      {
        id: 29,
        q: "Profit 25% CP=400 SP?",
        options: ["450", "480", "500", "520"],
        correct: "500",
        solution: "$400+100$"
      },
      {
        id: 30,
        q: "Loss 10% CP=500 SP?",
        options: ["400", "450", "480", "470"],
        correct: "450",
        solution: "$500-50$"
      }
    ]
  },

  {
    category: "Time Speed Distance",
    questions: [
      {
        id: 31,
        q: "Speed=60 Time=2 Distance?",
        options: ["100", "110", "120", "130"],
        correct: "120",
        solution: "S×T"
      },
      {
        id: 32,
        q: "Distance=100 Time=2 Speed?",
        options: ["40", "50", "60", "70"],
        correct: "50",
        solution: "D/T"
      },
      {
        id: 33,
        q: "Train crosses pole in 10s speed=10m/s length?",
        options: ["50", "100", "150", "200"],
        correct: "100",
        solution: "Speed×time"
      },
      {
        id: 34,
        q: "Speed doubled → time?",
        options: ["same", "half", "double", "triple"],
        correct: "half",
        solution: "Inverse"
      },
      {
        id: 35,
        q: "Average of 40 & 60?",
        options: ["45", "50", "55", "60"],
        correct: "50",
        solution: "(40+60)/2"
      }
    ]
  },

  {
    category: "Simplification",
    questions: [
      {
        id: 36,
        q: "2+3×4?",
        options: ["14", "20", "10", "24"],
        correct: "14",
        solution: "BODMAS"
      },
      {
        id: 37,
        q: "(10+5)/3?",
        options: ["3", "4", "5", "6"],
        correct: "5",
        solution: "15/3"
      },
      {
        id: 38,
        q: "100-20×2?",
        options: ["60", "80", "100", "120"],
        correct: "60",
        solution: "100-40"
      },
      {
        id: 39,
        q: "50÷5+2?",
        options: ["10", "12", "15", "20"],
        correct: "12",
        solution: "10+2"
      },
      {
        id: 40,
        q: "(8×5)-10?",
        options: ["20", "30", "40", "50"],
        correct: "30",
        solution: "40-10"
      }
    ]
  },

    {
  category: "Advanced Quant",
  questions: [
    {
      id: 41,
      q: "Find remainder of $7^{100} ÷ 6$",
      options: ["1", "3", "5", "0"],
      correct: "1",
      solution: "$7 ≡ 1 (mod 6) → 1^{100}=1$"
    },
    {
      id: 42,
      q: "If $x^2 - 5x + 6 = 0$, roots sum?",
      options: ["5", "6", "3", "2"],
      correct: "5",
      solution: "Sum = 5"
    },
    {
      id: 43,
      q: "Compound interest on 1000 @10% for 2 yrs?",
      options: ["200", "210", "220", "250"],
      correct: "210",
      solution: "$1000(1.1)^2 -1000 = 210$"
    },
    {
      id: 44,
      q: "A train 120m crosses pole in 10s → speed?",
      options: ["10", "12", "15", "20"],
      correct: "12",
      solution: "$120/10=12 m/s$"
    },
    {
      id: 45,
      q: "Find average of first 50 numbers",
      options: ["25", "25.5", "26", "24"],
      correct: "25.5",
      solution: "$(1+50)/2"
    },
    {
      id: 46,
      q: "If A:B = 2:3 and B:C = 4:5 → A:C?",
      options: ["2:5", "8:15", "3:5", "4:5"],
      correct: "8:15",
      solution: "Multiply ratios"
    },
    {
      id: 47,
      q: "Solve: $2x + 3 = 11$",
      options: ["3", "4", "5", "6"],
      correct: "4",
      solution: "$2x=8 → x=4$"
    },
    {
      id: 48,
      q: "Area of circle radius 7?",
      options: ["154", "144", "160", "170"],
      correct: "154",
      solution: "$πr² = 22/7×49$"
    },
    {
      id: 49,
      q: "If speed increases by 20%, time decreases?",
      options: ["16.66%", "20%", "10%", "15%"],
      correct: "16.66%",
      solution: "Inverse relation"
    },
    {
      id: 50,
      q: "Find simple interest on 500 @5% for 2 yrs",
      options: ["50", "60", "40", "45"],
      correct: "50",
      solution: "$P×R×T/100$"
    },

    {
      id: 51,
      q: "Solve: $3x - 9 = 0$",
      options: ["2", "3", "4", "5"],
      correct: "3",
      solution: "$3x=9 → x=3$"
    },
    {
      id: 52,
      q: "What is median of 2,4,6,8,10?",
      options: ["4", "5", "6", "7"],
      correct: "6",
      solution: "Middle value"
    },
    {
      id: 53,
      q: "Probability of head in fair coin?",
      options: ["1/2", "1/3", "1/4", "2/3"],
      correct: "1/2",
      solution: "Basic probability"
    },
    {
      id: 54,
      q: "Find next: 2,4,8,16,?",
      options: ["24", "32", "64", "48"],
      correct: "32",
      solution: "×2 pattern"
    },
    {
      id: 55,
      q: "If CP=200 SP=260 profit %?",
      options: ["20%", "25%", "30%", "35%"],
      correct: "30%",
      solution: "60/200"
    },

    {
      id: 56,
      q: "A+B=5 days A=10 → B?",
      options: ["10", "15", "20", "25"],
      correct: "10",
      solution: "Solve"
    },
    {
      id: 57,
      q: "Find value of $5^3$",
      options: ["125", "100", "150", "175"],
      correct: "125",
      solution: "$5×5×5$"
    },
    {
      id: 58,
      q: "Find LCM of 15,20",
      options: ["30", "60", "45", "50"],
      correct: "60",
      solution: "Prime factors"
    },
    {
      id: 59,
      q: "Distance=120 speed=40 time?",
      options: ["2", "3", "4", "5"],
      correct: "3",
      solution: "D/S"
    },
    {
      id: 60,
      q: "Find average of 10,20,30",
      options: ["15", "20", "25", "30"],
      correct: "20",
      solution: "Sum/3"
    },

    {
      id: 61,
      q: "Solve: $x^2=49$",
      options: ["7", "-7", "±7", "14"],
      correct: "±7",
      solution: "Square root"
    },
    {
      id: 62,
      q: "Perimeter of square side 5?",
      options: ["10", "15", "20", "25"],
      correct: "20",
      solution: "4×side"
    },
    {
      id: 63,
      q: "Area rectangle 10×5?",
      options: ["40", "50", "60", "70"],
      correct: "50",
      solution: "l×b"
    },
    {
      id: 64,
      q: "What is 25% of 80?",
      options: ["10", "15", "20", "25"],
      correct: "20",
      solution: "1/4×80"
    },
    {
      id: 65,
      q: "Solve: $10+2×5$",
      options: ["20", "30", "40", "50"],
      correct: "20",
      solution: "BODMAS"
    },

    {
      id: 66,
      q: "Cube root of 27?",
      options: ["2", "3", "4", "5"],
      correct: "3",
      solution: "3³"
    },
    {
      id: 67,
      q: "Probability of even in dice?",
      options: ["1/2", "1/3", "2/3", "1/6"],
      correct: "1/2",
      solution: "3/6"
    },
    {
      id: 68,
      q: "Simple interest formula?",
      options: ["PRT/100", "P+R+T", "PR/T", "PT/R"],
      correct: "PRT/100",
      solution: "Standard"
    },
    {
      id: 69,
      q: "What is 1000/10?",
      options: ["10", "50", "100", "200"],
      correct: "100",
      solution: "Divide"
    },
    {
      id: 70,
      q: "Find square of 15",
      options: ["200", "225", "250", "275"],
      correct: "225",
      solution: "15×15"
    },

    {
      id: 71,
      q: "Ratio 4:5 → fraction?",
      options: ["4/5", "5/4", "9/5", "1/5"],
      correct: "4/5",
      solution: "Direct"
    },
    {
      id: 72,
      q: "Speed=distance/time?",
      options: ["Yes", "No", "Sometimes", "Never"],
      correct: "Yes",
      solution: "Formula"
    },
    {
      id: 73,
      q: "Angle sum triangle?",
      options: ["90", "180", "270", "360"],
      correct: "180",
      solution: "Basic"
    },
    {
      id: 74,
      q: "Find 10% of 300",
      options: ["20", "25", "30", "35"],
      correct: "30",
      solution: "0.1×300"
    },
    {
      id: 75,
      q: "If x=5 → 2x+3?",
      options: ["10", "13", "15", "20"],
      correct: "13",
      solution: "2×5+3"
    },

    {
      id: 76,
      q: "Find HCF of 16,24",
      options: ["4", "8", "12", "16"],
      correct: "8",
      solution: "Common factor"
    },
    {
      id: 77,
      q: "If A=20% B=30% avg?",
      options: ["20", "25", "30", "35"],
      correct: "25",
      solution: "Average"
    },
    {
      id: 78,
      q: "Solve: $x+7=10$",
      options: ["2", "3", "4", "5"],
      correct: "3",
      solution: "x=3"
    },
    {
      id: 79,
      q: "Find area square side 6",
      options: ["30", "36", "40", "42"],
      correct: "36",
      solution: "6²"
    },
    {
      id: 80,
      q: "Find cube of 4",
      options: ["16", "32", "64", "128"],
      correct: "64",
      solution: "4³"
    },

    {
      id: 81,
      q: "Probability of odd dice?",
      options: ["1/2", "1/3", "1/6", "2/3"],
      correct: "1/2",
      solution: "3/6"
    },
    {
      id: 82,
      q: "Solve: $x/2=5$",
      options: ["5", "10", "15", "20"],
      correct: "10",
      solution: "x=10"
    },
    {
      id: 83,
      q: "Find LCM 6,9",
      options: ["18", "27", "36", "45"],
      correct: "18",
      solution: "LCM"
    },
    {
      id: 84,
      q: "Find average 5,10,15",
      options: ["5", "10", "15", "20"],
      correct: "10",
      solution: "30/3"
    },
    {
      id: 85,
      q: "Distance=150 speed=50 time?",
      options: ["2", "3", "4", "5"],
      correct: "3",
      solution: "150/50"
    },

    {
      id: 86,
      q: "Solve: $2x=20$",
      options: ["5", "10", "15", "20"],
      correct: "10",
      solution: "x=10"
    },
    {
      id: 87,
      q: "Find 5% of 200",
      options: ["5", "10", "15", "20"],
      correct: "10",
      solution: "0.05×200"
    },
    {
      id: 88,
      q: "Square root of 81?",
      options: ["7", "8", "9", "10"],
      correct: "9",
      solution: "√81"
    },
    {
      id: 89,
      q: "Solve: $10-3×2$",
      options: ["4", "5", "6", "7"],
      correct: "4",
      solution: "10-6"
    },
    {
      id: 90,
      q: "Cube root of 64?",
      options: ["2", "3", "4", "5"],
      correct: "4",
      solution: "4³"
    },

    {
      id: 91,
      q: "Find 30% of 90",
      options: ["20", "25", "27", "30"],
      correct: "27",
      solution: "0.3×90"
    },
    {
      id: 92,
      q: "Solve: $x+2=7$",
      options: ["3", "4", "5", "6"],
      correct: "5",
      solution: "x=5"
    },
    {
      id: 93,
      q: "Find square of 11",
      options: ["111", "121", "131", "141"],
      correct: "121",
      solution: "11²"
    },
    {
      id: 94,
      q: "Find 1/2 of 60",
      options: ["20", "25", "30", "35"],
      correct: "30",
      solution: "Half"
    },
    {
      id: 95,
      q: "Solve: $4x=16$",
      options: ["2", "3", "4", "5"],
      correct: "4",
      solution: "x=4"
    },

    {
      id: 96,
      q: "Find LCM 4,5",
      options: ["10", "15", "20", "25"],
      correct: "20",
      solution: "LCM"
    },
    {
      id: 97,
      q: "Find HCF 10,20",
      options: ["5", "10", "15", "20"],
      correct: "10",
      solution: "Common factor"
    },
    {
      id: 98,
      q: "Find average 2,4,6",
      options: ["3", "4", "5", "6"],
      correct: "4",
      solution: "12/3"
    },
    {
      id: 99,
      q: "Solve: $x-5=5$",
      options: ["5", "10", "15", "20"],
      correct: "10",
      solution: "x=10"
    },
    {
      id: 100,
      q: "Find 50% of 80",
      options: ["30", "35", "40", "45"],
      correct: "40",
      solution: "Half"
    }
  ]
    }
];
