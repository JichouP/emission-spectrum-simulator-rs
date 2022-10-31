#[command]
pub fn read_csv(path: &str) -> Result<Vec<f64>, String> {
    let mut reader = csv::ReaderBuilder::new();
    reader.has_headers(false);
    let result = reader
        .from_path(path)
        .map_err(|e| format!("error: {}", e))?
        .records()
        .filter_map(|v| v.ok()?.get(0)?.parse::<f64>().ok())
        .collect::<Vec<_>>();

    Ok(result)
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test() {
        let result = read_csv("example/example.csv");
        assert_eq!(result.unwrap(), vec![1.0, 2.0, 3.0, 4.0, 5.0, 6.0]);
    }
}
