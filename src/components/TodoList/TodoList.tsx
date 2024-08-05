import { TodoCard } from "@components/TodoCard/TodoCard";
import { useTodos } from "@hooks/useTodos";
import { Box, Grid, Pagination, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";

type Props = {
  search: string;
};

export function TodoList({ search }: Props) {
  const { todos } = useTodos();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const totalPages = useMemo(() => {
    const totalPages = Math.ceil(todos.length / itemsPerPage);

    if (totalPages <= currentPage || currentPage === 0) {
      setCurrentPage(totalPages);
    }

    return totalPages;
  }, [todos.length, itemsPerPage, currentPage]);

  const paginatedTodos = useMemo(() => {
    if (!todos) return [];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (search) {
      return todos
        .filter((todo) =>
          todo.title.toLowerCase().includes(search.toLowerCase())
        )
        .slice(startIndex, endIndex);
    }

    return todos.slice(startIndex, endIndex);
  }, [todos, currentPage, search]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: { sm: 10, xs: 14 },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {paginatedTodos.length === 0 ? (
          <Typography variant="h5" sx={{ textAlign: "center", mt: 4 }}>
            Nenhum TODO encontrado.
          </Typography>
        ) : (
          paginatedTodos.map((todo) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={todo.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TodoCard todo={todo} />
            </Grid>
          ))
        )}
      </Grid>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}
      />
    </Box>
  );
}
