export function splitFullName(fullname: string): { firstname: string; lastname: string } {
    const parts = fullname.trim().split(/\s+/);
    const firstname = parts[0] || "";
    const lastname = parts.slice(1).join(" ") || "";
    return { firstname, lastname };
  }

