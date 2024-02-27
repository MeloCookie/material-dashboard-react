import Link from "next/link";

const Footer = () => {

  return (
    <div
      className="flex w-full px-7 pb-5 justify-between text-gray-600
      flex-col items-center gap-4 md:flex-row"
    >
      <p
        className="text-sm items-end inline"
      >
        © 2024, made with ❤️ by
        <span className="mx-1 font-semibold"> Creative Tim </span>
        for a better web.
      </p>
      <ul
        className="flex text-sm font-light items-end gap-6"
      >
        <li
          className=""
        >
          <Link
            href="https://www.creative-tim.com/?_ga=2.28530108.1893661541.1708872724-1427294454.1707985427">
            Creative Tim
          </Link>
        </li>
        <li
          className=""
        >
          <Link href="https://www.creative-tim.com/presentation?_ga=2.65229358.1893661541.1708872724-1427294454.1707985427">
            About Us
          </Link>
        </li>
        <li
          className=""
        >
          <Link href="https://www.creative-tim.com/blog?_ga=2.65229358.1893661541.1708872724-1427294454.1707985427">
            Blog
          </Link>
        </li>
        <li
          className=""
        >
          <Link href="https://www.creative-tim.com/license?_ga=2.65229358.1893661541.1708872724-1427294454.1707985427">
            License
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Footer
