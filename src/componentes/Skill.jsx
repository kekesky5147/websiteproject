import React from "react"

const SkillText = [
  {
    title: "Design my dream",
    desc: "나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인 것 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고싶다.",
  },
  {
    title: "Work Hard",
    desc: "운이 좋은 사람은 없다. 운을 만들뿐. 운을 만들기 위해서는 내가 좋아하는 일이나 해야하는 일을 몰두해서 열심히 하면된다. 몰두하다보면 길이 보이고 방향이 보인다. 그리고 그 새로운 길에는 중간중간 운이라는 행운의 요소들이 숨어서 기다리고 있다.",
  },
  {
    title: "Honest",
    desc: "정직은 그 어떤 것보다 가장 중요하다. 사회적으로 정직함 뿐만 아니라 내 스스로에게 부끄럽지 않도록 정직하게, 우직하게 나의 일을 끝까지 밀고 나가야한다. 그러다보면 행은도, 흥미도, 성공도 모두 나에게 올것이라고 믿는다.",
  },
]

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          About Me <em>My Challenge</em>
        </h2>
        <div className="skill__desc">
          {/* 반복되는 작업 위에 데이터를 입력 해 놓은 후 순차적으로 자동 배열 하는 수식 */}
          {SkillText.map((skill, key) => (
            <div key={key}>
              <span>{key + 1}</span>
              <h2>{skill.title}</h2>
              <p>{skill.desc}</p>
            </div>
          ))}

          {/* ----------------------------------------------------- */}
        </div>
      </div>
    </section>
  )
}

export default Skill
