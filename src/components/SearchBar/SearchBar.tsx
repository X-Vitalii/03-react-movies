import { toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleAction = (formData: FormData) => {
    const query = formData.get("query")?.toString().trim();

    if (!query) {
      toast.error("Please enter a search term.");
      return;
    }

    onSearch(query);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={styles.form} action={handleAction}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movies..."
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
