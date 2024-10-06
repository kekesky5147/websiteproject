import React, { useState } from "react"

const headerNav = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "skill",
    url: "#skill",
  },
  {
    title: "site",
    url: "#site",
  },
  {
    title: "protfolio",
    url: "#port",
  },
  {
    title: "contact",
    url: "#contact",
  },
]
// useState이용해서 모바일 화면에서 메뉴바를 누르면 토글형식으로 나왔다가 사라지게 하는 코드  아래쪽 모바일 화면 div 참조

const Header = () => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => {
    setShow((prevShow) => !prevShow)
  }
  // ----------------------------------------------
  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            portfolio<em>by Minseok Kim</em>
          </a>
        </div>
        {/* //map을 사용하여 Nav bar의 값을 자동으로 순서대로 표기해주는 방법 위의 title과 url값을 보여줌, 위에서 값이 변경될 시 자동으로 수정됨// */}
        <nav
          className={`header__nav ${show ? "show" : ""}`}
          role="navigation"
          aria-label="Mainmenu"
        >
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
            {/* map()을 사용하면 기존 배열을 변형하지 않은채로 새로운 배열 생성  
            ex) const numbers = [1, 2, 3, 4, 5];

            const doubledNumbers = numbers.map((number) => {
            return number * 2;
            });

            console.log(doubledNumbers); */}
          </ul>
        </nav>
        {/* // 모바일 화면 */}
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          role="button"
          tabIndex="0"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
