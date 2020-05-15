const baseballData = {
  selectedTeam: {
    name: null,
    image: null,
  },
  loading: {
    start: "true",
    firstTeam: {
      name: "두산 베어 그릴즈",
      logoUrl: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FsfG5j%2Fbtqyjd8BHCx%2FcKTzWIU3jPjZ0h84IKJjm0%2Fimg.jpg",
    },
    secondTeam: {
      name: null,
      logoUrl: "",
    },
  },
  teamList: [
    {
      id: 1,
      name: "두산 베어스",
      image: "https://i.ibb.co/F7fd0RQ/bears.png",
    },
    {
      id: 2,
      name: "NC 다이노스",
      image: "https://i.ibb.co/cvYqtKz/dinos.png",
    },
    {
      id: 3,
      name: "한화 이글스",
      image: "https://i.ibb.co/2kf9GF1/eagles.png",
    },
    {
      id: 4,
      name: "롯데 자이언츠",
      image: "https://i.ibb.co/yRrsp5g/giants.png",
    },
    {
      id: 5,
      name: "키움 히어로즈",
      image: "https://i.ibb.co/4dyWvQq/kiwoom.png",
    },
    {
      id: 6,
      name: "삼성 라이언즈",
      image: "https://i.ibb.co/fCXS31Z/lions.png",
    },
    {
      id: 7,
      name: "기아 타이거즈",
      image: "https://i.ibb.co/jf3K5fh/tigers.png",
    },
    {
      id: 8,
      name: "LG 트윈즈",
      image: "https://i.ibb.co/zSY3jwm/twins.png",
    },
    {
      id: 9,
      name: "KT 윈즈",
      image: "https://i.ibb.co/7tb918h/wiz.png",
    },
    {
      id: 10,
      name: "코드 스쿼드즈",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABHVBMVEX5+/0AAAD///8CdNZtbW0JZJX8/PzX19fo6Ojv7++/v78VFRUAZ9MCdtqLi4vOzs40NTScnJzb29t3d3fBwcHHx8f19fUAbtW3t7eurq5XV1eBgYEpKiloaGiSkpJJSUk+Pj6fn58wMDCHh4eoqKhgYGAAcNVQUFASEhJ9fX1EREQhISEAWI7z9/wlJSXo7/mEq+Rpm+ABK1ABN2UBTY7K2vIBasMBRYDX4/UAZqABW6cAZNK4zu95p+KevOlvoOFdk961yNU7ebEARozJ1d8Aaa4gedcAGCuHpL8AUYpbh6vQ3vQAacYGa7NHidsBYLEAChRZVExRhbcAW7g6c5ybssmbu+s+fseiveBvmcgAFkEBIT16nLwAEyMBMVq4VwvWAAAPjUlEQVR4nO1c+WPTRhaOJo4O27EO2/KtxLcdhyRc4UgIsEspXWjobgvbLd3+/3/Gzntz6El2AiktNt35fgBbHs28750zT4KtLQMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOD/28wZjPG1i3FnwbGonDfGiTRX5MkY244sAQWfz2SlJ5A6a9EcpkeseS6hfsDwOKV9ASOEu+r58iaV9ITGFGKDGGvTdrfAZZ8hKBlVRVFxm6dnzw5ubh/LIl+DUw/akFAiBQZu3/79pOnz16Wy2cvT+4/Pz9Hputm8BEw9xMIWpbDebAXf/v7C7Dc1s/fbO82Go2337w5e3n74nizSbJsjvn2zt0H9x7fe3D3t2+zFPnIV98d/oPvd14/K5ffHD4uN7a3t7//ZjJplC/vb3Bcsqpl/fABab09fbObxfbpWyB758MPlvVP9upw5/A5u/XsrNy4ffHa9d6Xt7d3T/81mWxPys+ON9aMT37kYmpGeRCyPz493Nk5ZK8bZ7fvb2HwsXOg+PLhbW7MSeN8YyhmYoZdNpZYXYXJ9s7OTxdnlw9xBuCIFCeN4ycwydmFmHjtRKNWPZWBXZQ/mSB45M6jsyci4pjf5LmHnaD5GFhxu3yChn13vDZugtPUsqau5Gg/vAlBTvHR2/eiang9vqEDPnC5ccL+PYG/L18z9vzBu/VakVf3AKqbEPTlqti7kt/ubuNn4aAti88CuwB2AdabsPh7oDgp7/6HZ6Nba2W4FVvdoGQNoLxteb88eHy6OsUskdvdPX384BewPnMPrFkwsFw+g318Bv55n3mPTrd3t79/tMPx03rLIxgxOLKsOTfFHha6D3cfn25fSVORu4NjuzzB8D3eIgisgnQDbrwJj8BbOwTP17rRYV1OEar8fE4L/d17b/M08evbe3c/kHG9YYnzDLgbyNlOgOEl8Pn1O83wcOfX5w/XxzCyjgIQcRn//e3e21NdAd9wct+uGDXjd3ctmZHZOaZRCD32gjPTHB+8Wp8VWcUaBMKMHJHf72UZ3Hnw+DH3yh8yF8dJXe5fuQG1j6p0LMo9Y+8OD3mmOTz8bufdrXXGIt+JBhiLgDrspL1aMl1hLYG9StGFQZIhj8FgZqm57GNgOHkqLcpevPr11bvn696Kcz9daDcdMwW3OTzIkQs6rUj/PtROemSlu4ZbWFLLx3LnLYaui5kGT4cLfaLwGIEdtapdYarCyLHpT0zd0D1KD8QcuO2bvFyrVy6Dnpj6LA/bddx46WqR2JZO9RLz7mT7oXLU9VDKw0u0Q0KJY1G0xCiF68CfOlC7iUtYsGcTQbH8Hl30/GJDKLKZNgjI3+Fe2XRXsPOK3Gvb8CG1YPZ08l6dThqT9+dPJuUNOQozJxW4ivID46Nqv5gGX1QbzcGbZxYYOExvKFKGdPfeaEzOXm+KCWl7DTjVrFmphHZV/hpj4oSLI/haoirJTHVJtkHlTfHRbHOmBQycBdApoUcKzK0Ski7CF58WkQwLakR+RFwXozwy/bWSYDSCzwVSITpwIREX9ugNftaIJyoSy083hqBgo9GRVaKeSzZesxYT9hrDLBH2TNTEs/cbQ3AraxJuqGtqBaCVHT7LMWG3uaOWLzep3eZZObSvrYeF/PAoT/G8cXl/g/it7OMfVZyV9KIwWB4c5tmwW5uylxFg42WhAfN6jp4zXKwcuL9RdFZhNUFAoSn2pLHrFOdXD3PXzeB68PL+uRhtthHhUcVnYvpFGX4k06/AZxPk56cbL/oZ/Jz+vHAjXJFnboT2zZac953fyZG5wz9A3C+C2e954YHF16S7DUTlpnbUhXuvmm8h9ZIwJM44rCCSpJMOPOqHYThqSTQr6s6W7zi1cJ/O1ik6TrGiz08Ffqc6fU0TPm86cq9aIGlsth8E1iAYdPWt/o0oMrGZavMy7Q4KXjtdRhZuV+1GpiTgXTVunk0EQls93Z+J9Na1ameGyI26bEYO4HPacE3IMA6+kXcCMV2/Kwd8Oj8P5d+HvZbr+PzPrpy2qKWOl64AJMVmliGe4UOtB8bkIblkpWNswXoBn1X8w4a2rikV4KeO/gqHzZrqV9ZwfzT+VIosxgO5aJQJJfeVI+TEFof4FHLb3csyBLGq+hswlM21gJ6oRDvKI6xQKZrSPo5KXRz0P0roGtbep1IsKQVq4JrDAt1Ai25Mzh+FEWd+jZN1IwfhO4HShJt0kn6sT/U1tLU/Kgo1LZT5bckBW3VpJOKgWH/dg6+J3u4WhWE/yYTgLzNs5tr1lqs1V2BT/qXV7orgcbUj4aeS8MyK8BZOPHssQhPKo2ArUkaB1hQmLZTT1ypT8Qyzp10foYe054E3TZ3IJT/MP4GiiAIkmKhPIDdPKQe2hwGZ6AkH8KmfiiN8t8/cEcsejIrENApIRuYO9A5Q7RF8UMd+WGj/SI2XLq07c/vaO3uulqj1UYpinKsWxNhDI3HnCmiYtQQXDtl5wrbZUIrbT71J03eyl0SYyap7oNmCRqWRwU3jgu5yqCygM3stVRsuXhOif4whjEKPk0bwBFUwwsEBEW0saWtxWvoqeE3u7O5pv84xVNXAVdIWdUiiYoqu1pXK0LbqOB8RD0pUjHzsfIk67ZGlS34d5sCyZ+l1pTRt7cuWdLSFJb0n135x6UjKUBXxlrJOh15NWJT2/GG83SI6FZzpZzDB9acv4Uk2yz4skRKqDkxXpy5wE93PtZWZhsL7SlaXYyB8WKS8qD8lfapEu7Ulqx2E2ICR1RckVEXcHkSp3USvUunSVet71zIE11yRFaokZETwYTAwotCpThFiE+DJ0iL0UhFfYn7R7S+IxCpvLHSuAIfWnhkRWdBjhiUaimh5uR3ZU9P1rjEiSjimbiLhERNi8HnaWKpecd72fKEGgx3EX356E9e3uCbuSRMWwFZc0DFUYU+IMCUbDdohoTiDn1VbAf0UMq9zNcVYCag9nWhbmbCqVR/R4HRZrWODOmWbm28TGPGxKWUoInJKFCDDOFB6WzYt3tEEyXyWS29KHbYce3WyQRIY/7mu7pLjIK8BXX3BQkeEQUExjGIq64ALVtMPhQNLZiSdYFtKi3jZyawmLeaHgTWWTPrEiEoGDIUxWvMKgq6Vszs1ofJGrFy4i8N4VFthOIYIlxspFjwP2jHx925S1c9/IZWgsbXihtpnY+oaCVmbs7XhRnTvNlGMMoiuSVeZENJyneiMmlCnnqKe3qOSYDnGIugoTa5EaY57LJzOphNgHkHnQxFUnTzSl2WEgpAB/EsNOYD8Lqgn1lUHKTRMmhFTYOD1lYTatdqZEGFa2ozcKyDOCAdKRaLaVQQVJJ5oawLQTUXJGWmncYthU47oU4U6au2VFQNjg2ZnBZeKPNJeg8ZUPjjXwYNevPTwgsJRN+KHodBWJHTUXZohSfWbUgdDuDL1aZVbZPNXWGFE/KFKI06ip+5C6KROrKY0jTdWdJxehaIa29JDeeiJ8qn3gjpBdlO+vdRrwnRIX8eHJT18YC0/4AGGUMsydY8Kr9YLtRfPme1qJnspXQyW0LoGdcWwqu5Kn8ChTzQzOk35Hogxsec6dWJnasSu8qXlvjLOWNGOnmKPTiAMh/s0v1mztepQCyIDY3DlXmfjtcJLH9bbtlwF8zbqq6YYVlIm6viFc2MB1ZVWQWihr1VjkUS41JhCsW1qwnY16albQnq/SET4iFpeFrt+1LOQeumxUsxs1YrzWezLBC/OQ3MrPRlVLX1dadVNtZdtmWhNEnuKIg25NW9EVAetPRgkbWU1WXDQrUQUhum6cltdTIfEB+NeoTMcVpJw1FNSduJmpTNsoZQtIb58daE+LqmWksisIt2KMbKflpLNAOtammOVdmDR3N4NfYKWWohqqMZihzLQ15TecLFCsDeuCpkzR1GCSK3ayjwlrVLdIMR2x8rM0t4LCjFhSzthAs6SEQtq1Ww6xQyFuwqZO/bVZ+GAGG8VYqq9pbVk6OUfacNwLHVjelUXpPQdNxvZ0qMQt2hWUUKYOPNiXEX5mzaiuBPmzjCsqllD4iYFvZQ9Hyc+fRO0xXJI6PwEIcT3FJ5o06vg/mHfkmEjSSBFtdvAA8xQ/ygUjzkFjFUatAuVEM2Or1Yhc6q0upU/Cltq9x9qSwt9EglcMk0+5uG2o9kK24rdxoFd9XIXu8Ls3fR6n6jYWnBBi6ljCwOJ3qWyP0nzaFyRQWTChUVZzkmFP3pBaSyiI3VxyZCzimWSzLV8RVj52pMpZF07IFcwPXhyI0wa5PugN71dc1hqdunVIjOlrxyjJ4HV8ZDFXL9YURqbZ90UfUwnKjvSuqHGgqYbuBzIl33twEfeLoQc5gI7jqEf7Pu1YrGpH9G1w2bdr7VEjhng4zAR34MRdDy9ZgBuhFzEhizRVVIdJAbanqOwA3Lona1+uBBKGjWUMmXYo9byQEyVmlJHiWTPtW1los1rYR0MPFz5IMidSxCd/AX1LCzfsBrjNrWjN6JCXPEkZ6rWBaNFItTQqLFF41lyBQORF1egWHdTmevSgvuWfmsL7sFkMgTqwzjym1yNhXbabdhiK16OkYjjPvlxQZ5nsjj7GBaNCtcd0X0pjasFUap8CDPMIhA+/IyLDoAuDqGbf5kFfIE0wCEhpVqImyIGC/jmiDJiEV1xtHLLWYA2LOkBzxbB/rTdK1Sh5of9Pjww9+r9ZF7thPB+WyaNbzWrSH9PvT80Ev/8IHuGq6NZZ5BD1QEQF4wlmyDHEFINaUmh+glD9J2CLINJ5Ll+IlKMrx/upZiOhEncPo8zx3Xj5TcNxCL0S4ajdh6c74ipy019jh7GLPuyFTxIY/q8H1rZ3YCtdivZONSZRuSYTtYsgOpW2kDpTgvDsFXEIkklXZL/BhArp/mBTxcVW60m/tcL2YcCA7QzamC2VwVPp49q52KnQd5zlG1GYcHEKmlXoY34MRy5WDNp1enr9p/DaJmik39AlvGB2HVqraTaxh0mXMpYYDYthE3Hg4e6VoyC01eq8cLYd6Om2HzNHPXPUisiNx6EMnz+eFoZQv71T1Z0IEXIMJ+KEQFP9uKkkLkz+yCls0U8xXWc6Iv9Uwe24mx+3XAvKvY746XcgMg9wCAvZ7dzq2zWy485qCTlN5NCtlxV8mLL88xs+HX+lyoiejy/lYyxkvaWW/vMK/b7TffPjLIvAEE0jlfT+FNziIGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYHBV4X/AYwmIcWR8jRVAAAAAElFTkSuQmCC",
    },
  ],
  playerList: {
    status: 200,
    data: [
      {
        team1: "삼성",
        totalAppearance: "0",
        totalHit: "0",
        totalOut: "0",
        players: [
          {
            name: "이금순",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "마르퀴사",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "이대호",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "이대호",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "이대호",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "이대호",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "이대호",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "이대호",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "이대호",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
        ],
      },
      {
        team1: "LG",
        totalAppearance: "0",
        totalHit: "0",
        totalOut: "0",
        players: [
          {
            name: "정근우",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "이대호",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "정근우",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "정근우",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "정근우",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "정근우",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "정근우",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "정근우",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
          {
            name: "정근우",
            plateAppearance: "1",
            hit: "2",
            out: "1",
            average: "1.000",
          },
        ],
      },
    ],
  },
  playGround: {
    defense: "true",
    status: "200",
    matchInfo: {
      currentInning: 0,
      when: "top",
    },
    userWhere: "HOME",
    defense: "true",
    defenseTeam: {
      teamName: "인류",
      totalScore: "0",
      location: "AWAY",
      pitcher: {
        name: "최동원",
        count: "0",
      },
      batter: null,
    },
    attackTeam: {
      teamName: "기계군단",
      totalScore: "0",
      location: "HOME",
      pitcher: null,
      batter: [
        {
          name: "트라웃",
          plateAppearance: "0",
          hit: "0",
          order: "1",
          history: [],
        },
      ],
    },
    ballCount: {
      strike: 0,
      ball: 0,
      out: 0,
    },
    plates: {
      baseFirst: "0",
      baseSecond: "0",
      baseThird: "0",
    },
    display: [
      {
        teamName: "인류",
        where: "AWAY",
        totalScore: "0",
        inningScore: ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
      },
      {
        teamName: "기계군단",
        where: "HOME",
        totalScore: "0",
        inningScore: ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
      },
    ],
  },
};

export default baseballData;
