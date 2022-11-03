#[command]
pub fn read_csv(path: &str) -> Result<Vec<(f64, f64)>, String> {
    let mut reader = csv::ReaderBuilder::new();
    reader.has_headers(false);
    let result = reader
        .from_path(path)
        .map_err(|e| format!("error: {}", e))?
        .records()
        .filter_map(|v| {
            let v = v.ok()?;
            let v0 = v.get(0)?.parse::<f64>().ok()?;
            let v1 = v.get(1)?.parse::<f64>().ok()?;
            Some((v0, v1))
        })
        .collect::<Vec<_>>();

    // normalization
    let max = result.iter().copied().map(|v| v.1).fold(f64::NAN, f64::max);
    let result = result.into_iter().map(|(a, b)| (a, b / max)).collect();

    Ok(result)
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test() {
        let result = read_csv("example/example.csv");
        assert_eq!(
            result.unwrap(),
            vec![
                (1.0, 1.0 / 6.0),
                (2.0, 2.0 / 6.0),
                (3.0, 3.0 / 6.0),
                (4.0, 4.0 / 6.0),
                (5.0, 5.0 / 6.0),
                (6.0, 6.0 / 6.0)
            ]
        );
    }
}
