import { useCapitalize } from "../../lib/hooks";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Header = ({ userRole, setUserRole }) => {
  const role = useCapitalize(userRole)

  return (
    <header className="flex justify-between items-center px-4 py-4 bg-gray-500">
      <a href="" className="text-2xl font-medium">
        Logo
      </a>
      <nav>
        <ul className="flex items-center gap-5 text-lg font-medium">
          <li>
            <button onClick={() => setUserRole("user")}>User</button>
          </li>
          <li>
            <button onClick={() => setUserRole("admin")}>Admin</button>
          </li>
          <li>
            <button onClick={() => setUserRole("guest")}>Guest</button>
          </li>
        </ul>{" "}
      </nav>
      <div className="block_3_header flex items-center gap-4">
              <p className="text-xl font-bold">{ role}</p>
        {userRole !== "guest" && (
          <button className="px-5 py-2 bg-red-500 rounded-lg text-md">
            Profile
          </button>
        )}
        {userRole === "admin" && (
          <button className="px-5 py-2 bg-red-500 rounded-lg text-md">
            Add User
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
