// The list keeps the **most recently used (MRU)** node right after the dummy
// `head` sentinel and the **least recently used (LRU)** node right before the
// dummy `tail` sentinel. When the cache exceeds `capacity`, the node just
// before `tail` is evicted.
class ListNode {
  constructor(key = null, value = null) {
    this.key = key; // The cache key
    this.value = value; // Associated value
    this.prev = null; // Pointer to previous node in the list
    this.next = null; // Pointer to next node in the list
  }
}

export class LRUCache {
  /**
   * @param {number} capacity – maximum number of key/value pairs the cache
   *                            can retain before evicting the LRU entry.
   * We construct two **sentinel** nodes (`head` & `tail`) so that every real
   * node has both a `prev` and `next`.
   */
  constructor(capacity) {
    if (capacity <= 0 || !Number.isFinite(capacity)) {
      throw new Error("Capacity must be a positive integer");
    }

    this.capacity = capacity;
    this.map = new Map(); // Primary storage: key → ListNode

    // Dummy head / tail to simplify list ops (they never hold real data)
    this.head = new ListNode(); // head.next  ≙  Most Recently Used (MRU)
    this.tail = new ListNode(); // tail.prev ≙  Least Recently Used (LRU)
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) return -1; // Cache miss

    this.#moveToFront(node); // Cache hit → mark as most recently used
    return node.value;
  }

  /**
   * Insert a new key/value pair **or** update an existing key's value.
   * • If the key already exists → update value + move node to front (MRU)
   * • If the key is new   → create node, possibly evict LRU to stay in budget
   */
  put(key, value) {
    let node = this.map.get(key);

    if (node) {
      // Existing key → refresh value and mark as MRU
      node.value = value;
      this.#moveToFront(node);
    } else {
      // New key → ensure capacity, then add node to front
      if (this.map.size >= this.capacity) {
        this.#evictLRU(); // Remove least‑recently‑used entry
      }

      node = new ListNode(key, value);
      this.map.set(key, node);
      this.#addToFront(node);
    }
  }
  /**
   * Convenience helper mainly for debugging / tests.
   * Returns an array of cache keys from **MRU → LRU**.
   *
   * @returns {Array<*>}
   */
  keys() {
    const keys = [];
    for (let cur = this.head.next; cur !== this.tail; cur = cur.next) {
      keys.push(cur.key);
    }
    return keys;
  }

  #addToFront(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  /**
   * Completely unlink `node` from the list (but **not** from the map).
   */
  #remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  /**
   * Move an existing node to the MRU position by removing it from its current
   * spot and re‑inserting it right after `head`.
   */
  #moveToFront(node) {
    this.#remove(node);
    this.#addToFront(node);
  }

  /**
   * Evict the least recently used entry: the node just before the dummy `tail`.
   */
  #evictLRU() {
    const lru = this.tail.prev; // Guaranteed to be real node (not tail)
    this.#remove(lru); // Unlink from list
    this.map.delete(lru.key); // Remove from hash map
  }
}
