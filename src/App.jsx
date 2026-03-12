import { useState } from "react";

const patterns = [
  {
    id: 1,
    category: "Array / String",
    color: "#FF6B35",
    icon: "▦",
    techniques: [
      {
        name: "Sliding Window",
        when: "Contiguous subarray/substring with constraint",
        examples: ["Max sum of K consecutive elements", "Longest substring without repeating chars", "Minimum window substring", "Fruits into baskets"],
        signal: "\"K consecutive\", \"subarray\", \"substring\", \"contiguous\"",
        complexity: "O(n)",
      },
      {
        name: "Two Pointers",
        when: "Pair/triplet in sorted array, palindrome check, merging",
        examples: ["Two sum (sorted)", "3Sum", "Container with most water", "Valid palindrome", "Remove duplicates"],
        signal: "Sorted array, find pair/triplet, in-place removal",
        complexity: "O(n)",
      },
      {
        name: "Prefix Sum",
        when: "Range sum queries, subarray sum equals K",
        examples: ["Subarray sum equals K", "Range sum query", "Product of array except self", "Count subarrays with given sum"],
        signal: "\"Sum between indices\", \"subarray sum\", cumulative",
        complexity: "O(n)",
      },
      {
        name: "Kadane's Algorithm",
        when: "Maximum subarray sum",
        examples: ["Maximum subarray", "Max circular subarray sum", "Best time to buy stock"],
        signal: "\"Maximum subarray\", \"largest contiguous sum\"",
        complexity: "O(n)",
      },
    ],
  },
  {
    id: 2,
    category: "Searching",
    color: "#4ECDC4",
    icon: "⌕",
    techniques: [
      {
        name: "Binary Search",
        when: "Sorted array or monotonic function — find target, boundary",
        examples: ["Search in sorted array", "Find first/last position", "Search in rotated array", "Kth smallest in matrix", "Find peak element"],
        signal: "Sorted, \"find minimum\", \"search\", monotonic condition",
        complexity: "O(log n)",
      },
      {
        name: "Binary Search on Answer",
        when: "Minimize/maximize a value with feasibility check",
        examples: ["Minimum days to make bouquets", "Koko eating bananas", "Capacity to ship packages", "Split array largest sum"],
        signal: "\"Minimum possible maximum\", \"maximum possible minimum\"",
        complexity: "O(n log n)",
      },
    ],
  },
  {
    id: 3,
    category: "Hashing",
    color: "#A8E063",
    icon: "#",
    techniques: [
      {
        name: "HashMap / HashSet",
        when: "Frequency count, existence check, grouping",
        examples: ["Two sum", "Group anagrams", "Longest consecutive sequence", "Top K frequent elements", "Subarray sum = K"],
        signal: "\"Count\", \"frequency\", \"exists\", \"duplicate\", \"unique\"",
        complexity: "O(n)",
      },
      {
        name: "Frequency Map + Sliding Window",
        when: "Anagram/permutation in string, character count window",
        examples: ["Find all anagrams", "Permutation in string", "Minimum window substring"],
        signal: "\"Anagram\", \"permutation\", character window",
        complexity: "O(n)",
      },
    ],
  },
  {
    id: 4,
    category: "Linked List",
    color: "#C7B8EA",
    icon: "⇒",
    techniques: [
      {
        name: "Fast & Slow Pointers",
        when: "Cycle detection, middle of list, Nth from end",
        examples: ["Detect cycle", "Find cycle start", "Middle of linked list", "Happy number", "Palindrome linked list"],
        signal: "Cycle, loop, middle, meeting point",
        complexity: "O(n)",
      },
      {
        name: "Reverse in Groups",
        when: "Reversing portions of a linked list",
        examples: ["Reverse linked list", "Reverse in K groups", "Swap pairs"],
        signal: "\"Reverse\", \"rotate\", in-place restructure",
        complexity: "O(n)",
      },
      {
        name: "Merge / Two-pointer on Lists",
        when: "Merging, intersection, sorting lists",
        examples: ["Merge two sorted lists", "Merge K sorted lists", "Intersection of lists", "Sort list"],
        signal: "Merge, combine, intersection",
        complexity: "O(n log n)",
      },
    ],
  },
  {
    id: 5,
    category: "Trees",
    color: "#FFD93D",
    icon: "⬡",
    techniques: [
      {
        name: "DFS (Recursive/Stack)",
        when: "Path problems, tree structure, subtree queries",
        examples: ["Max depth", "Path sum", "LCA", "Serialize/deserialize", "Diameter of tree"],
        signal: "\"Path\", \"depth\", \"subtree\", ancestor",
        complexity: "O(n)",
      },
      {
        name: "BFS (Level Order)",
        when: "Level-by-level traversal, shortest path in tree",
        examples: ["Level order traversal", "Zigzag order", "Right side view", "Connect next pointers"],
        signal: "\"Level\", \"row\", \"width\", layer-by-layer",
        complexity: "O(n)",
      },
      {
        name: "Binary Search Tree",
        when: "In-order traversal gives sorted order, BST properties",
        examples: ["Validate BST", "Kth smallest", "Floor/ceiling in BST", "Delete node in BST"],
        signal: "BST, sorted property, in-order",
        complexity: "O(h)",
      },
    ],
  },
  {
    id: 6,
    category: "Graphs",
    color: "#FF8B94",
    icon: "◎",
    techniques: [
      {
        name: "BFS",
        when: "Shortest path (unweighted), level-by-level exploration",
        examples: ["Shortest path in maze", "Word ladder", "Rotten oranges", "01 matrix"],
        signal: "\"Shortest path\", \"minimum steps\", unweighted graph",
        complexity: "O(V+E)",
      },
      {
        name: "DFS / Backtracking on Graph",
        when: "Connected components, island problems, cycle detection",
        examples: ["Number of islands", "Clone graph", "Surrounded regions", "Pacific Atlantic water flow"],
        signal: "\"Connected\", \"islands\", \"regions\", \"components\"",
        complexity: "O(V+E)",
      },
      {
        name: "Topological Sort",
        when: "Task scheduling, dependency ordering (DAG)",
        examples: ["Course schedule", "Alien dictionary", "Build order", "Find all topological orders"],
        signal: "Dependencies, prerequisites, ordering, DAG",
        complexity: "O(V+E)",
      },
      {
        name: "Dijkstra / Bellman-Ford",
        when: "Shortest path in weighted graph",
        examples: ["Network delay time", "Cheapest flights K stops", "Path with minimum effort"],
        signal: "Weighted graph, minimum cost path",
        complexity: "O(E log V)",
      },
      {
        name: "Union-Find (DSU)",
        when: "Dynamic connectivity, grouping, cycle in undirected graph",
        examples: ["Accounts merge", "Number of provinces", "Redundant connection", "Making a large island"],
        signal: "\"Union\", \"connected components\", grouping, dynamic edges",
        complexity: "O(α(n))",
      },
    ],
  },
  {
    id: 7,
    category: "Dynamic Programming",
    color: "#6BCB77",
    icon: "◈",
    techniques: [
      {
        name: "0/1 Knapsack",
        when: "Pick or skip items, limited capacity",
        examples: ["0/1 Knapsack", "Subset sum", "Partition equal subset", "Target sum"],
        signal: "\"Pick or not pick\", capacity constraint",
        complexity: "O(n×W)",
      },
      {
        name: "Unbounded Knapsack",
        when: "Pick item unlimited times",
        examples: ["Coin change", "Rod cutting", "Minimum coin change", "Integer break"],
        signal: "Unlimited use, denominations, minimum ways",
        complexity: "O(n×W)",
      },
      {
        name: "LCS / LIS Pattern",
        when: "Longest subsequence/substring, common elements",
        examples: ["LCS", "LIS", "Edit distance", "Longest palindromic subseq", "Shortest common supersequence"],
        signal: "\"Longest\", \"common\", subsequence/substring between two sequences",
        complexity: "O(n²) or O(n log n)",
      },
      {
        name: "DP on Strings",
        when: "Transformation, matching, partitioning strings",
        examples: ["Edit distance", "Wildcard matching", "Regex matching", "Palindrome partitioning", "Word break"],
        signal: "String transformation, matching with wildcards",
        complexity: "O(n×m)",
      },
      {
        name: "DP on Intervals",
        when: "Optimal solution on subranges/subarrays",
        examples: ["Matrix chain multiplication", "Burst balloons", "Palindrome partition cost", "Strange printer"],
        signal: "Optimal on subarray [i..j], merge cost",
        complexity: "O(n³)",
      },
      {
        name: "DP on Trees",
        when: "Optimal values depending on subtree choices",
        examples: ["House robber III", "Max path sum", "Binary tree cameras"],
        signal: "Tree + optimal substructure from children",
        complexity: "O(n)",
      },
      {
        name: "State Machine DP",
        when: "Finite states with transitions",
        examples: ["Stock buy/sell with cooldown", "Stock with transaction fee", "Best time to buy stock III/IV"],
        signal: "States like hold/sold/cooldown, FSM",
        complexity: "O(n×states)",
      },
    ],
  },
  {
    id: 8,
    category: "Backtracking",
    color: "#F4A261",
    icon: "↺",
    techniques: [
      {
        name: "Subsets / Combinations",
        when: "Generate all subsets, combinations",
        examples: ["Subsets", "Combination sum", "Combination sum II", "Letter combinations of phone number"],
        signal: "\"All subsets\", \"all combinations\", generate",
        complexity: "O(2ⁿ)",
      },
      {
        name: "Permutations",
        when: "All arrangements of elements",
        examples: ["Permutations", "Permutations II", "Next permutation"],
        signal: "\"All arrangements\", \"all orderings\"",
        complexity: "O(n!)",
      },
      {
        name: "Constraint Satisfaction",
        when: "Place elements with rules (N-Queens, Sudoku)",
        examples: ["N-Queens", "Sudoku solver", "Word search", "Restore IP addresses"],
        signal: "Grid placement with rules, constraint-based",
        complexity: "O(n!) / pruning helps",
      },
    ],
  },
  {
    id: 9,
    category: "Heap / Priority Queue",
    color: "#E9C46A",
    icon: "△",
    techniques: [
      {
        name: "Top K Elements",
        when: "K largest/smallest/frequent elements",
        examples: ["Kth largest element", "Top K frequent words", "K closest points to origin", "Sort K sorted array"],
        signal: "\"K largest\", \"K smallest\", \"K frequent\"",
        complexity: "O(n log k)",
      },
      {
        name: "K-way Merge",
        when: "Merge K sorted arrays/lists",
        examples: ["Merge K sorted lists", "K smallest pairs", "Smallest range covering K lists"],
        signal: "K sorted lists/arrays to merge",
        complexity: "O(n log k)",
      },
      {
        name: "Two Heaps (Median)",
        when: "Maintain running median, balance two halves",
        examples: ["Find median from data stream", "Sliding window median", "IPO problem"],
        signal: "Running median, balance min/max halves",
        complexity: "O(log n) per insert",
      },
      {
        name: "Greedy + Heap",
        when: "Scheduling, interval problems with priority",
        examples: ["Task scheduler", "Reorganize string", "Meeting rooms II", "Minimum cost to connect ropes"],
        signal: "Scheduling, minimum cost greedy",
        complexity: "O(n log n)",
      },
    ],
  },
  {
    id: 10,
    category: "Stack / Monotonic",
    color: "#A8DADC",
    icon: "⫶",
    techniques: [
      {
        name: "Monotonic Stack",
        when: "Next greater/smaller element, histogram problems",
        examples: ["Next greater element", "Daily temperatures", "Largest rectangle in histogram", "Trapping rain water"],
        signal: "\"Next greater\", \"previous smaller\", spans, histogram",
        complexity: "O(n)",
      },
      {
        name: "Stack for Parsing",
        when: "Balanced brackets, expression evaluation, nested structure",
        examples: ["Valid parentheses", "Evaluate expression", "Decode string", "Basic calculator"],
        signal: "Brackets, expressions, nesting",
        complexity: "O(n)",
      },
    ],
  },
  {
    id: 11,
    category: "Intervals",
    color: "#C77DFF",
    icon: "⊢⊣",
    techniques: [
      {
        name: "Merge Intervals",
        when: "Overlapping intervals, combined ranges",
        examples: ["Merge intervals", "Insert interval", "Non-overlapping intervals", "Meeting rooms"],
        signal: "Overlapping, merge, combined ranges",
        complexity: "O(n log n)",
      },
      {
        name: "Sweep Line",
        when: "Events at points, scheduling, overlapping count",
        examples: ["Meeting rooms II", "Employee free time", "Car pooling", "Number of flowers in bloom"],
        signal: "Count overlapping at point, events timeline",
        complexity: "O(n log n)",
      },
    ],
  },
  {
    id: 12,
    category: "Trie",
    color: "#F72585",
    icon: "ψ",
    techniques: [
      {
        name: "Trie (Prefix Tree)",
        when: "Prefix search, autocomplete, word dictionary",
        examples: ["Implement trie", "Word search II", "Replace words", "Search suggestions system"],
        signal: "Prefix, dictionary lookup, autocomplete",
        complexity: "O(n×L)",
      },
    ],
  },
  {
    id: 13,
    category: "Math & Bit Manipulation",
    color: "#48CAE4",
    icon: "&",
    techniques: [
      {
        name: "Bit Manipulation",
        when: "XOR tricks, set/subset operations, power of 2",
        examples: ["Single number", "Missing number", "Count set bits", "Power set", "Reverse bits"],
        signal: "\"Without extra space\", XOR, single/missing element",
        complexity: "O(1) or O(n)",
      },
      {
        name: "Math Patterns",
        when: "Digit manipulation, modular arithmetic, geometry",
        examples: ["Pow(x,n)", "Sqrt(x)", "Excel column title", "Happy number", "Roman to integer"],
        signal: "Number properties, digits, modulo",
        complexity: "O(log n)",
      },
    ],
  },
];

export default function DSAPatterns() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = patterns.filter(p =>
    activeCategory ? p.id === activeCategory : true
  ).map(p => ({
    ...p,
    techniques: p.techniques.filter(t =>
      search === "" ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.signal.toLowerCase().includes(search.toLowerCase()) ||
      t.examples.some(e => e.toLowerCase().includes(search.toLowerCase()))
    )
  })).filter(p => p.techniques.length > 0);

  const selectedTech = selected
    ? patterns.flatMap(p => p.techniques.map(t => ({ ...t, catColor: p.color, category: p.category }))).find(t => t.name === selected)
    : null;

  return (
    <div style={{ fontFamily: "'Courier New', monospace", background: "#0a0a0f", minHeight: "100vh", color: "#e0e0e0", padding: "0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #12121f 100%)", borderBottom: "1px solid #1e1e3a", padding: "28px 32px 20px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "6px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "4px", color: "#5555aa", textTransform: "uppercase" }}>DSA</span>
          <h1 style={{ margin: 0, fontSize: "26px", fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}>
            Pattern Recognition Guide
          </h1>
        </div>
        <p style={{ margin: "0 0 20px", fontSize: "13px", color: "#555577" }}>
          → Identify the pattern · Pick the technique · Know the complexity
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
          <input
            value={search}
            onChange={e => { setSearch(e.target.value); setSelected(null); }}
            placeholder="Search technique, keyword, problem..."
            style={{
              background: "#12121f", border: "1px solid #2a2a4a", color: "#e0e0e0",
              padding: "8px 14px", borderRadius: "4px", fontSize: "13px", width: "260px",
              outline: "none", fontFamily: "inherit"
            }}
          />
          {activeCategory && (
            <button onClick={() => setActiveCategory(null)} style={{
              background: "#1a1a2e", border: "1px solid #3a3a5a", color: "#aaaacc",
              padding: "7px 12px", borderRadius: "4px", cursor: "pointer", fontSize: "12px", fontFamily: "inherit"
            }}>✕ clear filter</button>
          )}
        </div>
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 140px)" }}>
        {/* Left: Category Pills + Cards */}
        <div style={{ flex: 1, padding: "24px 24px", overflowY: "auto" }}>
          {/* Category pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
            {patterns.map(p => (
              <button
                key={p.id}
                onClick={() => { setActiveCategory(activeCategory === p.id ? null : p.id); setSelected(null); }}
                style={{
                  background: activeCategory === p.id ? p.color + "22" : "#12121f",
                  border: `1px solid ${activeCategory === p.id ? p.color : "#2a2a3a"}`,
                  color: activeCategory === p.id ? p.color : "#777799",
                  padding: "5px 12px", borderRadius: "20px", cursor: "pointer",
                  fontSize: "12px", fontFamily: "inherit", transition: "all 0.15s"
                }}
              >
                {p.icon} {p.category}
              </button>
            ))}
          </div>

          {/* Technique Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
            {filtered.flatMap(p =>
              p.techniques.map(t => (
                <div
                  key={t.name}
                  onClick={() => setSelected(selected === t.name ? null : t.name)}
                  style={{
                    background: selected === t.name ? "#1a1a2e" : "#0e0e1a",
                    border: `1px solid ${selected === t.name ? p.color : "#1e1e30"}`,
                    borderLeft: `3px solid ${p.color}`,
                    borderRadius: "6px", padding: "14px 16px",
                    cursor: "pointer", transition: "all 0.15s",
                    boxShadow: selected === t.name ? `0 0 20px ${p.color}22` : "none"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                    <div>
                      <span style={{ fontSize: "10px", color: p.color, letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: "3px" }}>
                        {p.category}
                      </span>
                      <div style={{ fontWeight: 700, fontSize: "15px", color: "#ffffff" }}>{t.name}</div>
                    </div>
                    <span style={{
                      background: p.color + "22", color: p.color, fontSize: "10px",
                      padding: "2px 8px", borderRadius: "3px", whiteSpace: "nowrap",
                      marginLeft: "8px", marginTop: "14px"
                    }}>{t.complexity}</span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#8888aa", fontStyle: "italic", marginBottom: "8px" }}>
                    {t.when}
                  </div>
                  <div style={{ fontSize: "11px", color: "#555577", borderTop: "1px solid #1e1e30", paddingTop: "8px" }}>
                    <span style={{ color: "#ffaa44" }}>signal: </span>{t.signal}
                  </div>
                </div>
              ))
            )}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", color: "#444466", padding: "60px 0", fontSize: "14px" }}>
              No patterns match "{search}"
            </div>
          )}
        </div>

        {/* Right: Detail Panel */}
        <div style={{
          width: "320px", borderLeft: "1px solid #1e1e3a", padding: "24px",
          background: "#0c0c18", overflowY: "auto",
          display: selectedTech ? "block" : "flex", alignItems: "center", justifyContent: "center"
        }}>
          {selectedTech ? (
            <div>
              <div style={{ marginBottom: "20px" }}>
                <span style={{ fontSize: "10px", color: selectedTech.catColor, letterSpacing: "3px", textTransform: "uppercase" }}>
                  {selectedTech.category}
                </span>
                <h2 style={{ margin: "4px 0 0", fontSize: "20px", color: "#fff", fontWeight: 700 }}>
                  {selectedTech.name}
                </h2>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#444466", textTransform: "uppercase", marginBottom: "8px" }}>WHEN TO USE</div>
                <div style={{ fontSize: "13px", color: "#aaaacc", lineHeight: "1.6", background: "#12121f", padding: "12px", borderRadius: "4px", borderLeft: `2px solid ${selectedTech.catColor}` }}>
                  {selectedTech.when}
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#444466", textTransform: "uppercase", marginBottom: "8px" }}>SIGNAL KEYWORDS</div>
                <div style={{ fontSize: "13px", color: "#ffaa44", background: "#12121f", padding: "12px", borderRadius: "4px", fontStyle: "italic" }}>
                  {selectedTech.signal}
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#444466", textTransform: "uppercase", marginBottom: "8px" }}>COMPLEXITY</div>
                <span style={{ background: selectedTech.catColor + "22", color: selectedTech.catColor, padding: "4px 12px", borderRadius: "4px", fontSize: "13px" }}>
                  {selectedTech.complexity}
                </span>
              </div>

              <div>
                <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#444466", textTransform: "uppercase", marginBottom: "10px" }}>CLASSIC PROBLEMS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {selectedTech.examples.map((ex, i) => (
                    <div key={i} style={{
                      background: "#12121f", border: "1px solid #1e1e30",
                      padding: "8px 12px", borderRadius: "4px", fontSize: "12px", color: "#ccccee",
                      display: "flex", alignItems: "center", gap: "8px"
                    }}>
                      <span style={{ color: selectedTech.catColor, fontSize: "10px" }}>▸</span>
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", color: "#333355" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>◈</div>
              <div style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase" }}>
                Click a pattern<br />to see details
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}