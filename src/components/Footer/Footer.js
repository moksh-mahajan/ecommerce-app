import "./Footer.css"
export default function Footer () {
    return (
        <div className="footer">
            <p>Made with React by Moksh Mahajan</p>
            <ul className="footer-list">
              <li className="p1 inline"><a className="footer-icons" href="https://github.com/moksh-mahajan" target="_blank"><i className="fab fa-github"></i></a></li>
              <li className="p1 inline"><a className="footer-icons" href="https://twitter.com/moksh_mahajan" target="_blank"><i className="fab fa-twitter"></i></a></li>
              <li className="p1 inline"><a className="footer-icons" href="https://www.linkedin.com/in/moksh-mahajan-b25498159/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
    )
}