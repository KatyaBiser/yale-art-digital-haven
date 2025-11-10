import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";
import { searchableContent, SearchableItem } from "@/data/searchableContent";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<typeof searchableContent>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    document.title = "Search - Yale School of Art";
  }, []);

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Esc to clear search
      if (e.key === 'Escape') {
        setSearchQuery("");
        setSearchParams({});
        setResults([]);
        setSelectedCategory("All");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSearchParams]);

  // Highlight text matches
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={index} className="bg-yellow-200 dark:bg-yellow-900/50 font-semibold">
              {part}
            </mark>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  const performSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const lowercaseQuery = searchTerm.toLowerCase();
    const filtered = searchableContent.filter((item) => {
      return (
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.content.toLowerCase().includes(lowercaseQuery) ||
        item.category.toLowerCase().includes(lowercaseQuery) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
      );
    });

    setResults(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
      performSearch(searchQuery);
    }
  };

  // Get unique categories with counts
  const categories = ["All", ...Array.from(new Set(searchableContent.map(item => item.category)))];
  const getCategoryCount = (category: string) => {
    if (category === "All") return results.length;
    return results.filter(item => item.category === category).length;
  };

  // Filter results by selected category
  const filteredResults = selectedCategory === "All"
    ? results
    : results.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section with Search */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-center">
                Search
              </h1>
              <form onSubmit={handleSearch} className="relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for programs, faculty, news, events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg"
                  autoFocus
                />
              </form>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {query && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">
                    {results.length > 0
                      ? `Found ${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`
                      : `No results found for "${query}"`}
                  </h2>
                  {results.length === 0 && (
                    <p className="text-muted-foreground">
                      Try different keywords or browse our <Link to="/" className="text-primary hover:underline">homepage</Link> to find what you're looking for.
                    </p>
                  )}

                  {/* Category Filters */}
                  {results.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {categories.map((category) => {
                        const count = getCategoryCount(category);
                        if (count === 0 && category !== "All") return null;
                        return (
                          <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                            className="transition-smooth"
                          >
                            {category} ({count})
                          </Button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {!query && (
                <div className="text-center py-12">
                  <SearchIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h2 className="text-2xl font-semibold mb-2">Start Your Search</h2>
                  <p className="text-muted-foreground">
                    Enter a keyword to search across programs, faculty, news, and more
                  </p>
                </div>
              )}

              <div className="space-y-4">
                {filteredResults.map((item, index) => (
                  <Card key={index} className="transition-smooth hover:shadow-hover">
                    <CardContent className="p-6">
                      <Link to={`${item.path}${item.anchor ? `?anchor=${item.anchor}` : ''}`}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                                {item.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-smooth">
                              {highlightText(item.title, query)}
                            </h3>
                            <p className="text-muted-foreground line-clamp-2">
                              {highlightText(item.content, query)}
                            </p>
                            {item.tags && item.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-3">
                                {item.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                                  >
                                    {highlightText(tag, query)}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
